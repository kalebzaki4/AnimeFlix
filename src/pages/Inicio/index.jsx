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

  const [showCookiePopup] = useState(() => {
    return !localStorage.getItem("cookiesAccepted");
  });

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

  const curiosidades = [
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
  const [curioIndex, setCurioIndex] = useState(() => Math.floor(Math.random() * curiosidades.length));
  const handleNovaCuriosidade = () => {
    let novo;
    do {
      novo = Math.floor(Math.random() * curiosidades.length);
    } while (novo === curioIndex);
    setCurioIndex(novo);
  };

  const rankingGeneros = [
    { genero: "Ação", count: 120 },
    { genero: "Comédia", count: 95 },
    { genero: "Drama", count: 80 },
    { genero: "Fantasia", count: 75 },
    { genero: "Romance", count: 60 },
  ];
  const maxGenero = Math.max(...rankingGeneros.map(g => g.count));

  const [noticiasRecentes, setNoticiasRecentes] = useState([]);
  const [noticiasLoading, setNoticiasLoading] = useState(true);
  const [noticiaIndex, setNoticiaIndex] = useState(0);

  const handleNextNoticia = useCallback(() => {
    setNoticiaIndex((prev) => (prev + 1) % noticiasRecentes.length);
  }, [noticiasRecentes.length]);

  const handlePrevNoticia = useCallback(() => {
    setNoticiaIndex((prev) => (prev - 1 + noticiasRecentes.length) % noticiasRecentes.length);
  }, [noticiasRecentes.length]);

  useEffect(() => {
    async function fetchNoticias() {
      setNoticiasLoading(true);
      try {
        const resp = await axios.get("https://api.jikan.moe/v4/anime/1/news", {
          params: { limit: 5 }
        });
        const noticias = resp.data.data.map(n => ({
          titulo: n.title,
          data: n.date?.slice(0, 10) || "",
          link: n.url,
          img: n.images?.jpg?.image_url || "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
        }));
        setNoticiasRecentes(noticias);
      } catch {
        // Fallback local se a API falhar
        setNoticiasRecentes([
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
        ]);
      } finally {
        setNoticiasLoading(false);
      }
    }
    fetchNoticias();
  }, []);

  if (loading) return <TelaCarregamento />;

  return (
    <div>
      <div style={fadeInStyle}>
        <Banner animes={animesFamosos.slice(0, maxAnimes)} onClick={handleClick} />
      </div>

      <ListaDeAnimesHorizontal
        title="Mais Famosos"
        description="Os animes mais populares do momento"
        animes={animesFamosos.slice(0, maxAnimes)}
        onClick={handleClick}
        disableLoadingIndicator
        loadMoreAnimes={() => {}}
      />

      <div style={{ height: isMobile ? 10 : 18 }} />

      <section
        style={{
          margin: isMobile ? "0 0 40px 0" : "0 0 18px 0",
          background: "linear-gradient(90deg, #23272f 80%, #e5091422 100%)",
          borderRadius: 14,
          padding: isMobile ? 11 : 18,
          boxShadow: "0 2px 12px #0003",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <h2 style={{
          color: "#e50914",
          marginBottom: 4,
          letterSpacing: 1.1,
          fontWeight: 700,
          fontSize: isMobile ? 17 : 22
        }}>
          Curiosidade do Mundo dos Animes
        </h2>
        <div
          style={{
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
          }}
        >
          {isMobile && (
            <span
              style={{
                fontSize: 22,
                marginRight: 8,
                color: "#ffb300",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                animation: "curioFadeIn 0.7s"
              }}
              aria-hidden="true"
            >
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
            {curiosidades[curioIndex]}
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
            onClick={handleNovaCuriosidade}
            aria-label="Nova curiosidade"
          >
            {isMobile ? (
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span role="img" aria-label="trocar">🔄</span>
                Nova
              </span>
            ) : "Nova Curiosidade"}
          </button>
          <style>
            {`
              @keyframes curioFadeIn {
                from { opacity: 0; transform: translateY(10px);}
                to { opacity: 1; transform: translateY(0);}
              }
            `}
          </style>
        </div>
      </section>

      <div style={{ height: isMobile ? 10 : 18 }} />

      <ListaDeAnimesHorizontal
        title="Lançamentos"
        description="Os animes mais recentes da temporada"
        animes={lancamentos.slice(0, maxAnimes)}
        onClick={handleClick}
        disableLoadingIndicator
        loadMoreAnimes={() => {}}
      />
      
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
                lineHeight: 1.4
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

      <section
        style={{
          margin: isMobile ? "12px 0" : "1.2rem 0",
          background: "#23272f",
          borderRadius: 14,
          padding: isMobile ? 10 : 18,
          boxShadow: "0 2px 12px #0003"
        }}
      >
        <h2 style={{
          color: "#e50914",
          marginBottom: 4,
          letterSpacing: 1.1,
          fontWeight: 700,
          fontSize: isMobile ? 17 : 22
        }}>Notícias Recentes</h2>
        {noticiasLoading ? (
          <div style={{ color: "#fff", fontSize: isMobile ? 13 : 16 }}>Carregando notícias...</div>
        ) : noticiasRecentes.length > 0 ? (
          <div className="noticia-carousel">
            <button
              onClick={handlePrevNoticia}
              aria-label="Notícia anterior"
              className="noticia-carousel-btn"
              disabled={noticiasRecentes.length <= 1}
              tabIndex={0}
              type="button"
            >
              <span className="noticia-carousel-btn-icon">
                {/* SVG seta esquerda */}
                <svg width={isMobile ? 22 : 28} height={isMobile ? 22 : 28} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#181818" opacity="0.7"/>
                  <path d="M14.5 7L10 12L14.5 17" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            {(() => {
              const noticia = noticiasRecentes[noticiaIndex];
              const isDisabled = noticia.link === "#";
              return (
                <a
                  key={noticiaIndex}
                  href={isDisabled ? undefined : noticia.link}
                  target={isDisabled ? undefined : "_blank"}
                  rel={isDisabled ? undefined : "noopener noreferrer"}
                  className={`noticia-carousel-card${isDisabled ? " noticia-carousel-card-disabled" : ""}`}
                  tabIndex={0}
                  style={isDisabled ? { cursor: "not-allowed", pointerEvents: "none", opacity: 0.7 } : {}}
                  aria-disabled={isDisabled}
                >
                  <img
                    src={noticia.img}
                    alt={noticia.titulo}
                    className="noticia-carousel-img"
                  />
                  <div className="noticia-carousel-info">
                    <div className="noticia-carousel-title">
                      {noticia.titulo}
                    </div>
                    <div className="noticia-carousel-date">
                      <span role="img" aria-label="calendário" className="noticia-carousel-date-icon">🗓️</span>
                      <span>{noticia.data}</span>
                    </div>
                  </div>
                  <span className="noticia-carousel-arrow" aria-hidden="true">
                    <svg width={isMobile ? 18 : 22} height={isMobile ? 18 : 22} viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#ffb300" opacity="0.15"/>
                      <path d="M10 7L14.5 12L10 17" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              );
            })()}
            <button
              onClick={handleNextNoticia}
              aria-label="Próxima notícia"
              className="noticia-carousel-btn"
              disabled={noticiasRecentes.length <= 1}
              tabIndex={0}
              type="button"
            >
              <span className="noticia-carousel-btn-icon">
                {/* SVG seta direita */}
                <svg width={isMobile ? 22 : 28} height={isMobile ? 22 : 28} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#181818" opacity="0.7"/>
                  <path d="M10 7L14.5 12L10 17" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <style>{`
              @keyframes noticiaFadeIn {
                from { opacity: 0; transform: translateY(10px);}
                to { opacity: 1; transform: translateY(0);}
              }
              .noticia-carousel {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: ${isMobile ? 110 : 120}px;
                position: relative;
                gap: ${isMobile ? 6 : 18}px;
              }
              .noticia-carousel-btn {
                background: none;
                border: none;
                border-radius: 50%;
                padding: 0;
                margin: 0 2px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: box-shadow 0.2s, background 0.2s, opacity 0.2s;
                box-shadow: 0 2px 8px #0002;
                outline: none;
              }
              .noticia-carousel-btn:active,
              .noticia-carousel-btn:focus-visible {
                box-shadow: 0 0 0 2px #ffb30099;
                background: #181818;
              }
              .noticia-carousel-btn:disabled {
                opacity: 0.3;
                cursor: default;
                box-shadow: none;
              }
              .noticia-carousel-btn-icon {
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .noticia-carousel-card {
                background: linear-gradient(120deg, #181818 80%, #e5091422 100%);
                border-radius: 14px;
                box-shadow: 0 2px 16px #0005;
                color: #fff;
                text-decoration: none;
                display: flex;
                flex-direction: ${isMobile ? "column" : "row"};
                align-items: ${isMobile ? "flex-start" : "center"};
                gap: ${isMobile ? 8 : 12}px;
                padding: ${isMobile ? 12 : 18}px;
                min-width: ${isMobile ? 170 : 260}px;
                max-width: ${isMobile ? 220 : 360}px;
                flex: 1;
                position: relative;
                overflow: hidden;
                transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
                animation: noticiaFadeIn 0.7s;
                margin: 0 2px;
              }
              .noticia-carousel-card:active {
                transform: scale(0.97);
              }
              .noticia-carousel-card:focus-visible,
              .noticia-carousel-card:hover {
                box-shadow: 0 4px 18px #e5091455, 0 2px 12px #0006;
                outline: none;
                background: linear-gradient(120deg, #23272f 80%, #ffb30022 100%);
              }
              .noticia-carousel-card-disabled {
                filter: grayscale(0.5);
                pointer-events: none;
                cursor: not-allowed;
                opacity: 0.7;
              }
              .noticia-carousel-img {
                width: ${isMobile ? 62 : 90}px;
                height: ${isMobile ? 62 : 90}px;
                object-fit: cover;
                border-radius: 10px;
                box-shadow: 0 2px 8px #0006;
                margin-bottom: ${isMobile ? 6 : 0}px;
                flex-shrink: 0;
                background: #222;
              }
              .noticia-carousel-info {
                flex: 1;
                min-width: 0;
              }
              .noticia-carousel-title {
                font-weight: 700;
                font-size: ${isMobile ? 14 : 18}px;
                margin-bottom: 2px;
                color: #fff;
                line-height: 1.2;
                text-shadow: 0 1px 4px #0007;
              }
              .noticia-carousel-date {
                color: #ffb300;
                font-size: ${isMobile ? 11 : 13}px;
                display: flex;
                align-items: center;
                gap: 4px;
                margin-top: 2px;
              }
              .noticia-carousel-date-icon {
                font-size: ${isMobile ? 13 : 15}px;
              }
              .noticia-carousel-arrow {
                position: absolute;
                right: 10px;
                bottom: 10px;
                color: #ffb300;
                font-size: ${isMobile ? 18 : 22}px;
                opacity: 0.7;
                pointer-events: none;
                display: flex;
                align-items: center;
              }
              .noticia-carousel-arrow svg {
                display: block;
              }
            `}</style>
          </div>
        ) : (
          <div style={{ color: "#fff", fontSize: isMobile ? 13 : 16 }}>Nenhuma notícia encontrada.</div>
        )}
      </section>
    </div>
  );
}