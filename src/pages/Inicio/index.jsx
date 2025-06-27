import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/layout/Banner";
import ListaDeAnimesHorizontal from "../../components/animes/ListaDeAnimesHorizontal";
import TelaCarregamento from "../../components/common/TelaCarregamento";
import Estrelas from "../../components/animes/Estrelas/Estrelas";
import "../../styles/message.scss";

// --- Hooks e helpers ---
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

// Fallback para curiosidades
const curiosidadesFallback = [
  "O anime mais longo é Sazae-san, com mais de 7500 episódios.",
  "One Piece já vendeu mais de 500 milhões de cópias de mangá.",
  "O termo 'otaku' no Japão tem um significado diferente do ocidente.",
  "O Studio Ghibli ganhou um Oscar com 'A Viagem de Chihiro'.",
  "Naruto foi inspirado em Dragon Ball.",
  "O criador de Death Note também criou Bakuman.",
  "Pokémon já teve mais de 1200 episódios.",
  "O mangá mais vendido da história é One Piece.",
  "O termo 'anime' no Japão significa qualquer animação.",
  "O primeiro anime colorido foi Hakujaden (1958)."
];

const rankingGeneros = [
  { genero: "Ação", count: 120 },
  { genero: "Comédia", count: 95 },
  { genero: "Drama", count: 80 },
  { genero: "Fantasia", count: 75 },
  { genero: "Romance", count: 60 },
];

function Curiosidade({ curioIndex, onNova, isMobile, curiosidades, loading }) {
  return (
    <section style={{
      margin: isMobile ? "0 0 40px 0" : "0 0 18px 0",
      background: "linear-gradient(90deg, #23272f 80%, #e5091422 100%)",
      borderRadius: 14,
      padding: isMobile ? 11 : 18,
      boxShadow: "0 2px 12px #0003",
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}>
      <h2 style={{
        color: "#e50914",
        marginBottom: 4,
        letterSpacing: 1.1,
        fontWeight: 700,
        fontSize: isMobile ? 17 : 22
      }}>
        Curiosidade do Mundo dos Animes
      </h2>
      <div style={{
        color: "#fff",
        fontSize: isMobile ? 14 : 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        background: isMobile ? "linear-gradient(90deg, #23272f 60%, #e5091440 100%)" : "none",
        borderRadius: isMobile ? 12 : 0,
        boxShadow: isMobile ? "0 2px 8px #0002" : "none",
        padding: isMobile ? "10px 8px" : 0,
        position: "relative",
        minHeight: isMobile ? 56 : undefined,
        transition: "background 0.3s"
      }}>
        {isMobile && (
          <span style={{
            fontSize: 22,
            marginRight: 8,
            color: "#ffb300",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            animation: "curioFadeIn 0.7s"
          }} aria-hidden="true">
            <span role="img" aria-label="lâmpada">💡</span>
          </span>
        )}
        <span
          key={curioIndex}
          style={{
            fontWeight: 500,
            color: "#fff",
            flex: 1,
            textAlign: isMobile ? "left" : "initial",
            animation: "curioFadeIn 0.7s"
          }}
        >
          {loading ? "Carregando curiosidade..." : curiosidades[curioIndex]}
        </span>
        <button
          style={{
            background: isMobile ? "linear-gradient(90deg, #ffb300 70%, #fffbe0 100%)" : "#e50914",
            color: isMobile ? "#181818" : "#fff",
            border: "none",
            borderRadius: 8,
            padding: isMobile ? "4px 12px" : "6px 18px",
            fontWeight: "bold",
            cursor: "pointer",
            marginLeft: 12,
            fontSize: isMobile ? 13 : 15,
            boxShadow: isMobile ? "0 2px 8px #0002" : "none",
            transition: "background 0.2s, color 0.2s"
          }}
          onClick={onNova}
          aria-label="Nova curiosidade"
          disabled={loading}
        >
          {isMobile ? (
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span role="img" aria-label="trocar">🔄</span>
              Nova
            </span>
          ) : "Nova Curiosidade"}
        </button>
        <style>
          {`@keyframes curioFadeIn {
            from { opacity: 0; transform: translateY(10px);}
            to { opacity: 1; transform: translateY(0);}
          }`}
        </style>
      </div>
    </section>
  );
}

Curiosidade.propTypes = {
  curioIndex: PropTypes.number.isRequired,
  onNova: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  curiosidades: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool,
};

function RankingGeneros({ isMobile }) {
  const maxGenero = Math.max(...rankingGeneros.map(g => g.count));
  return (
    <section style={{
      margin: isMobile ? "12px 0" : "1.2rem 0",
      background: "linear-gradient(90deg, #181818 80%, #ffb30022 100%)",
      borderRadius: 14,
      padding: isMobile ? 10 : 18,
      boxShadow: "0 2px 12px #0002"
    }}>
      <h2 style={{
        color: "#ffb300",
        marginBottom: 4,
        letterSpacing: 1.1,
        fontWeight: 700,
        fontSize: isMobile ? 17 : 22
      }}>Ranking de Gêneros</h2>
      <ol style={{ color: "#fff", fontSize: isMobile ? 13 : 16, paddingLeft: 18 }}>
        {rankingGeneros.map((g, i) => (
          <li key={g.genero} style={{ marginBottom: 6, display: "flex", alignItems: "center" }}>
            <span style={{ fontWeight: 600, minWidth: 70 }}>{i + 1}. {g.genero}</span>
            <div style={{
              marginLeft: 8,
              background: "linear-gradient(90deg, #ffb300 60%, #fffbe0 100%)",
              borderRadius: 8,
              height: 10,
              width: `${Math.round((g.count / maxGenero) * (isMobile ? 90 : 160))}px`,
              maxWidth: isMobile ? 90 : 160,
              minWidth: 20,
              transition: "width 0.3s"
            }} />
            <span style={{ color: "#ffb300", marginLeft: 8, fontSize: isMobile ? 11 : 13 }}>
              ({g.count} animes)
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

RankingGeneros.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

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
  const [famososPage, setFamososPage] = useState(1);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [showCookiePopup] = useState(() => {
    return !localStorage.getItem("cookiesAccepted");
  });

  const [curiosidades, setCuriosidades] = useState(curiosidadesFallback);
  const [curioIndex, setCurioIndex] = useState(() => Math.floor(Math.random() * curiosidadesFallback.length));
  const [curioLoading, setCurioLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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

  const maxAnimes = isMobile ? 8 : 25;

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

  const fetchCuriosidade = useCallback(async () => {
    setCurioLoading(true);
    try {
      const res = await fetch("https://uselessfacts.jsph.pl/random.json?language=pt");
      const data = await res.json();
      if (data && data.text) {
        setCuriosidades(prev => [data.text, ...prev.slice(0, 9)]);
        setCurioIndex(0);
      } else {
        let novo;
        do {
          novo = Math.floor(Math.random() * curiosidadesFallback.length);
        } while (novo === curioIndex);
        setCurioIndex(novo);
      }
    } catch {
      let novo;
      do {
        novo = Math.floor(Math.random() * curiosidadesFallback.length);
      } while (novo === curioIndex);
      setCurioIndex(novo);
    } finally {
      setCurioLoading(false);
    }
  }, [curioIndex]);

  const handleNovaCuriosidade = useCallback(() => {
    fetchCuriosidade();
  }, [fetchCuriosidade]);

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const loadMoreFamosos = useCallback(async () => {
    try {
      const nextPage = famososPage + 1;
      const response = await axios.get("https://api.jikan.moe/v4/top/anime", {
        params: { type: "tv", limit: 25, sort: "bypopularity", page: nextPage },
      });
      const data = response.data.data
        .filter(anime => anime.images?.jpg?.image_url)
        .map(anime => ({
          ...anime,
          score: parseFloat(anime.score) || 0,
        }));
      if (data.length === 0) return false;
      setAnimesFamosos(prev => [...prev, ...data]);
      setFamososPage(nextPage);
      return true;
    } catch (error) {
      return false;
    }
  }, [famososPage]);

  const hasMoreFamosos = useMemo(() => {
    return animesFamosos.length < famososPage * 25 || famososPage < 10;
  }, [animesFamosos.length, famososPage]);

  const animeDoDia = useMemo(() => {
    if (lancamentos.length > 0) {
      const idx = Math.floor(Math.random() * lancamentos.length);
      return lancamentos[idx];
    }
    return null;
  }, [lancamentos]);

  if (loading) return <TelaCarregamento />;

  if (lancamentos.length === 0) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "48px 0" }}>
        <div style={{
          border: "8px solid #222",
          borderTop: "8px solid #ffb300",
          borderRadius: "50%",
          width: 48,
          height: 48,
          animation: "spin 1s linear infinite"
        }} />
        <span style={{
          color: "#ffb300",
          fontWeight: 700,
          fontSize: 18,
          marginTop: 10,
          letterSpacing: 1.1,
          textShadow: "0 2px 8px #0008"
        }}>
          Carregando lançamentos...
        </span>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="page-fadein">
      <Banner
        title="Mais Famosos"
        description="Os animes mais populares do momento"
        animes={animesFamosos.slice(0, maxAnimes + (famososPage - 1) * 25)}
        loadMoreAnimes={loadMoreFamosos}
        hasMore={hasMoreFamosos}
        onClick={handleClick}
      />
      <div style={{ height: isMobile ? 20 : 32 }} />
      <ListaDeAnimesHorizontal
        title="Mais Famosos"
        description="Os animes mais populares do momento"
        animes={animesFamosos.slice(0, maxAnimes + (famososPage - 1) * 25)}
        onClick={handleClick}
        disableLoadingIndicator
        loadMoreAnimes={loadMoreFamosos}
      />
      <div style={{ height: isMobile ? 10 : 18 }} />
      <Curiosidade
        curioIndex={curioIndex}
        onNova={handleNovaCuriosidade}
        isMobile={isMobile}
        curiosidades={curiosidades}
        loading={curioLoading}
      />
      <ListaDeAnimesHorizontal
        title="Lançamentos"
        description="Os animes mais recentes da temporada"
        animes={lancamentos.slice(0, maxAnimes)}
        onClick={handleClick}
        disableLoadingIndicator
        loadMoreAnimes={() => {}}
      />
      <RankingGeneros isMobile={isMobile} />
      {animeDoDia && (
        <section style={{
          margin: isMobile ? "12px 0" : "1.2rem 0",
          background: "linear-gradient(90deg, #23272f 80%, #ffb30022 100%)",
          borderRadius: 14,
          padding: isMobile ? 10 : 18,
          boxShadow: "0 2px 12px #0004",
          display: "flex",
          flexDirection: "column",
          gap: 8
        }}>
          <h2 style={{
            color: "#ffb300",
            marginBottom: 4,
            letterSpacing: 1.1,
            fontWeight: 700,
            fontSize: isMobile ? 17 : 22
          }}>Anime do Dia</h2>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? 10 : 18,
            flexWrap: "wrap"
          }}>
            <img src={animeDoDia.images?.jpg?.image_url} alt={animeDoDia.title}
              style={{ width: isMobile ? 70 : 100, borderRadius: 10, boxShadow: "0 2px 8px #0007" }} />
            <div style={{ flex: 1 }}>
              <h3 style={{
                margin: 0,
                color: "#fff",
                fontWeight: 600,
                fontSize: isMobile ? 15 : 20
              }}>{animeDoDia.title}</h3>
              <Estrelas avaliacao={animeDoDia.score} />
              <p style={{
                fontSize: isMobile ? 12 : 15,
                color: "#ccc",
                margin: "8px 0",
                lineHeight: 1.46,
              }}>
                {animeDoDia.synopsis?.slice(0, 140)}...
              </p>
              <button
                onClick={() => navigate(`/Detalhes/${animeDoDia.mal_id}`)}
                style={{
                  background: "#ffb300",
                  color: "#181818",
                  border: "none",
                  borderRadius: 16,
                  padding: isMobile ? "5px 14px" : "7px 22px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: isMobile ? "0.95rem" : "1rem",
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
    </div>
  );
}