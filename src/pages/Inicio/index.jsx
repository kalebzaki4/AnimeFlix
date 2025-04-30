import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Banner from "../../components/layout/Banner";
import ListaDeAnimesHorizontal from "../../components/animes/ListaDeAnimesHorizontal";
import TelaCarregamento from "../../components/common/TelaCarregamento";
import { useAuth } from "../../context/AuthContext";
import "../../styles/message.scss";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [animesFamosos, setAnimesFamosos] = useState(() => {
    const cachedFamosos = sessionStorage.getItem("animesFamosos");
    return cachedFamosos ? JSON.parse(cachedFamosos) : [];
  });
  const [lancamentos, setLancamentos] = useState(() => {
    const cachedLancamentos = sessionStorage.getItem("lancamentos");
    return cachedLancamentos ? JSON.parse(cachedLancamentos) : [];
  });

  const { isAuthenticated, savedAnimes } = useAuth();
  const isMobile = useIsMobile();

  // Mostrar popup só se ainda não aceitou cookies
  const [showCookiePopup, setShowCookiePopup] = useState(() => {
    return !localStorage.getItem("cookiesAccepted");
  });
  const [cookieFadeOut, setCookieFadeOut] = useState(false);

  // Bloquear rolagem enquanto o popup estiver aberto
  useEffect(() => {
    if (showCookiePopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showCookiePopup]);

  const handleAcceptCookies = () => {
    setCookieFadeOut(true);
    setTimeout(() => {
      setShowCookiePopup(false);
      setCookieFadeOut(false);
      localStorage.setItem("cookiesAccepted", "true"); // Marca como aceito
    }, 500); // tempo igual ao da animação fadeOut
  };

  const maxAnimes = isMobile ? 8 : 25;

  const fadeInStyle = {
    animation: "fadeIn 0.7s",
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 }
    }
  };

  const fetchAnimes = useCallback(async () => {
    setLoading(true);
    try {
      const [famososResponse, lancamentosResponse] = await Promise.all([
        axios.get("https://api.jikan.moe/v4/top/anime", {
          params: { type: "tv", limit: 25, sort: "bypopularity" },
        }),
        axios.get("https://api.jikan.moe/v4/seasons/now", {
          params: { limit: 25 },
        }),
      ]);

      const famososData = famososResponse.data.data
        .filter(anime => anime.images?.jpg?.image_url)
        .map(anime => ({
          ...anime,
          score: parseFloat(anime.score) || 0,
        }));

      const lancamentosData = lancamentosResponse.data.data
        .filter(anime => anime.images?.jpg?.image_url)
        .map(anime => ({
          ...anime,
          score: parseFloat(anime.score) || 0,
        }));

      setAnimesFamosos(famososData);
      setLancamentos(lancamentosData);

      sessionStorage.setItem("animesFamosos", JSON.stringify(famososData));
      sessionStorage.setItem("lancamentos", JSON.stringify(lancamentosData));
    } catch (error) {
      console.error("Erro ao buscar animes:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!animesFamosos.length || !lancamentos.length) {
      fetchAnimes();
    } else {
      setLoading(false);
    }
  }, []);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (loading) return <TelaCarregamento />;

  return (
    <>
      {showCookiePopup && (
        <>
          {/* Overlay bloqueando toda a interação */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.7)",
              zIndex: 9998,
              pointerEvents: "auto",
            }}
            tabIndex={-1}
            aria-hidden="true"
          />
          <div
            className={`cookie-popup${cookieFadeOut ? " fade-out" : " slide-up"}`}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100vw",
              background: "#222",
              color: "#fff",
              padding: "18px 12px 12px 12px",
              zIndex: 9999,
              textAlign: "center",
              boxShadow: "0 -2px 16px #0005",
              fontSize: "1rem"
            }}
            role="dialog"
            aria-modal="true"
          >
            Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
            <a href="/politica-de-privacidade" style={{ color: "#e50914", textDecoration: "underline" }}>Política de Privacidade</a>.
            <br />
            <button
              onClick={handleAcceptCookies}
              style={{
                marginTop: 10,
                background: "#e50914",
                color: "#fff",
                border: "none",
                borderRadius: 20,
                padding: "8px 24px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "1rem",
                boxShadow: "0 2px 8px #0002",
                position: "relative",
                left: "30%",
              }}
              autoFocus
            >
              Aceitar e continuar
            </button>
          </div>
        </>
      )}
      <div style={fadeInStyle}>
        <Banner animes={animesFamosos.slice(0, maxAnimes)} onClick={handleClick} />
        <ListaDeAnimesHorizontal
          title="Mais Famosos"
          description="Os animes mais populares do momento"
          animes={animesFamosos.slice(0, maxAnimes)}
          onClick={handleClick}
          disableLoadingIndicator
          loadMoreAnimes={() => {}}
        />
        <ListaDeAnimesHorizontal
          title="Lançamentos"
          description="Os animes mais recentes da temporada"
          animes={lancamentos.slice(0, maxAnimes)}
          onClick={handleClick}
          disableLoadingIndicator
          loadMoreAnimes={() => {}}
        />
        {isAuthenticated && savedAnimes.length > 0 && (
          <ListaDeAnimesHorizontal
            title="Animes Salvos"
            description="Seus animes favoritos salvos"
            animes={savedAnimes.slice(0, maxAnimes)}
            onClick={handleClick}
            disableLoadingIndicator
            loadMoreAnimes={() => {}}
          />
        )}
      </div>
    </>
  );
}
