import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/layout/Banner";
import ListaDeAnimesHorizontal from "../../components/animes/ListaDeAnimesHorizontal";
import TelaCarregamento from "../../components/common/TelaCarregamento";
import Estrelas from "../../components/animes/Estrelas/Estrelas";
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
  const navigate = useNavigate();

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

  const animeDoDia = useMemo(() => {
    if (lancamentos.length > 0) {
      const idx = Math.floor(Math.random() * lancamentos.length);
      return lancamentos[idx];
    }
    return null;
  }, [lancamentos]);

  // Estado para curiosidade aleatória
  const [curioIndex, setCurioIndex] = useState(() => Math.floor(Math.random() * 4));
  const curiosidades = [
    "O anime mais longo é Sazae-san, com mais de 7500 episódios.",
    "One Piece já vendeu mais de 500 milhões de cópias de mangá.",
    "O termo 'otaku' no Japão tem um significado diferente do ocidente.",
    "O Studio Ghibli ganhou um Oscar com 'A Viagem de Chihiro'.",
  ];
  const handleNovaCuriosidade = () => {
    let novo;
    do {
      novo = Math.floor(Math.random() * curiosidades.length);
    } while (novo === curioIndex);
    setCurioIndex(novo);
  };

  // Ranking de gêneros (mock)
  const rankingGeneros = [
    { genero: "Ação", count: 120 },
    { genero: "Comédia", count: 95 },
    { genero: "Drama", count: 80 },
    { genero: "Fantasia", count: 75 },
    { genero: "Romance", count: 60 },
  ];
  const maxGenero = Math.max(...rankingGeneros.map(g => g.count));

  // Notícias recentes (mock)
  const noticiasRecentes = [
    {
      titulo: "Novo filme de Demon Slayer anunciado!",
      data: "2024-06-10",
      link: "#",
      img: "https://cdn.myanimelist.net/images/anime/1704/128897.jpg",
    },
    {
      titulo: "Attack on Titan ganha spin-off em mangá",
      data: "2024-06-08",
      link: "#",
      img: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    },
    {
      titulo: "My Hero Academia terá 7ª temporada",
      data: "2024-06-05",
      link: "#",
      img: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    },
  ];

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
        {/* Anime do Dia */}
        {animeDoDia && (
          <section style={{
            margin: "1.2rem 0",
            background: "linear-gradient(90deg, #23272f 80%, #ffb30022 100%)",
            borderRadius: 18,
            padding: 18,
            boxShadow: "0 2px 16px #0005",
            display: "flex",
            flexDirection: "column",
            gap: 10
          }}>
            <h2 style={{ color: "#ffb300", marginBottom: 6, letterSpacing: 1.2, fontWeight: 700, fontSize: 22 }}>Anime do Dia</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <img src={animeDoDia.images?.jpg?.image_url} alt={animeDoDia.title}
                style={{ width: 100, borderRadius: 12, boxShadow: "0 2px 8px #0007" }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, color: "#fff", fontWeight: 600, fontSize: 20 }}>{animeDoDia.title}</h3>
                <Estrelas avaliacao={animeDoDia.score} />
                <p style={{ fontSize: 15, color: "#ccc", margin: "8px 0", lineHeight: 1.4 }}>
                  {animeDoDia.synopsis?.slice(0, 140)}...
                </p>
                <button
                  onClick={() => navigate(`/Detalhes/${animeDoDia.mal_id}`)}
                  style={{
                    background: "#ffb300",
                    color: "#181818",
                    border: "none",
                    borderRadius: 20,
                    padding: "7px 22px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "1rem",
                    marginTop: 4,
                    boxShadow: "0 2px 8px #0002",
                    transition: "background 0.2s"
                  }}
                >
                  Ver detalhes
                </button>
              </div>
            </div>
          </section>
        )}
        {/* Curiosidades */}
        <section style={{
          margin: "1.2rem 0",
          background: "linear-gradient(90deg, #23272f 80%, #e5091422 100%)",
          borderRadius: 18,
          padding: 18,
          boxShadow: "0 2px 16px #0004",
          display: "flex",
          flexDirection: "column",
          gap: 10
        }}>
          <h2 style={{ color: "#e50914", marginBottom: 6, letterSpacing: 1.2, fontWeight: 700, fontSize: 22 }}>Curiosidade do Mundo dos Animes</h2>
          <div style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: 500,
            marginBottom: 10,
            background: "#181818",
            borderRadius: 8,
            padding: "12px 16px",
            boxShadow: "0 1px 6px #0002",
            borderLeft: "4px solid #e50914",
            transition: "background 0.2s"
          }}>
            {curiosidades[curioIndex]}
          </div>
          <button
            onClick={handleNovaCuriosidade}
            style={{
              background: "#e50914",
              color: "#fff",
              border: "none",
              borderRadius: 20,
              padding: "6px 18px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "0.95rem",
              boxShadow: "0 2px 8px #0002",
              alignSelf: "flex-start",
              transition: "background 0.2s"
            }}
          >
            Outra curiosidade
          </button>
        </section>
        {/* Ranking de Gêneros */}
        <section style={{
          margin: "1.2rem 0",
          background: "#23272f",
          borderRadius: 18,
          padding: 18,
          boxShadow: "0 2px 16px #0004"
        }}>
          <h2 style={{ color: "#ffb300", marginBottom: 6, letterSpacing: 1.2, fontWeight: 700, fontSize: 22 }}>Ranking de Gêneros</h2>
          <ol style={{ margin: 0, paddingLeft: 20 }}>
            {rankingGeneros.map((g) => (
              <li key={g.genero} style={{
                color: "#eee",
                marginBottom: 10,
                fontWeight: 500,
                display: "flex",
                alignItems: "center"
              }}>
                <span style={{ minWidth: 90, display: "inline-block" }}>{g.genero}</span>
                <span style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: 10,
                  background: "linear-gradient(90deg, #ffb300 60%, #fffbe0 100%)",
                  borderRadius: 8,
                  height: 12,
                  width: `${Math.round((g.count / maxGenero) * 160)}px`,
                  maxWidth: 160,
                  minWidth: 30,
                  transition: "width 0.3s"
                }} />
                <span style={{ color: "#ffb300", marginLeft: 10, fontSize: 13 }}>
                  ({g.count} animes)
                </span>
              </li>
            ))}
          </ol>
        </section>
        {/* Notícias Recentes */}
        <section style={{
          margin: "1.2rem 0",
          background: "#23272f",
          borderRadius: 18,
          padding: 18,
          boxShadow: "0 2px 16px #0004"
        }}>
          <h2 style={{ color: "#ffb300", marginBottom: 6, letterSpacing: 1.2, fontWeight: 700, fontSize: 22 }}>Notícias Recentes</h2>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
            {noticiasRecentes.map((noticia) => (
              <li key={noticia.titulo} style={{
                color: "#eee",
                marginBottom: 10,
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "#181818",
                borderRadius: 8,
                padding: "7px 10px",
                boxShadow: "0 1px 4px #0003"
              }}>
                <img src={noticia.img} alt="thumb" style={{
                  width: 44, height: 44, borderRadius: 6, objectFit: "cover", boxShadow: "0 1px 4px #0004"
                }} />
                <div style={{ flex: 1 }}>
                  <a href={noticia.link} target="_blank" rel="noopener noreferrer"
                    style={{ color: "#ffb300", textDecoration: "underline", fontWeight: 500, fontSize: 15 }}>
                    {noticia.titulo}
                  </a>
                  <div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>{noticia.data}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}