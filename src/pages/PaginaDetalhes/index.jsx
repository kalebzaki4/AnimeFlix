import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PaginaDetalhes.scss";
import TelaCarregamento from "../../components/common/TelaCarregamento";
import Alert from "../../components/common/Alert";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const statusTraduzidos = {
  "Finished Airing": "Finalizado",
  "Currently Airing": "Em exibição",
  "Not yet aired": "Ainda não exibido",
  Hiatus: "Em hiato",
};

const PaginaDetalhes = () => {
  const { animeId, episodioId } = useParams(); 
  const navigate = useNavigate();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [episodes, setEpisodes] = useState([]); 
  const [isFullSynopsis, setIsFullSynopsis] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);
  const [visibleEpisodes, setVisibleEpisodes] = useState(10); 
  const [isSaveAnimating, setIsSaveAnimating] = useState(false); 
  const [selectedEpisode, setSelectedEpisode] = useState(null); 
  const [showAnim, setShowAnim] = useState(false);

  const { isAuthenticated, saveAnime, removeAnime, isAnimeSaved, showAlert } = useAuth();

  useEffect(() => {
    if (!animeId || isNaN(Number(animeId))) {
      setError("Anime não encontrado.");
      setAnimeDetails(null);
      setEpisodes([]);
      return;
    }
    fetchAnimeDetails(animeId);
    fetchEpisodes(animeId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [animeId]);

  useEffect(() => {
    setShowAnim(false);
    const timeout = setTimeout(() => setShowAnim(true), 60);
    return () => clearTimeout(timeout);
  }, [animeId, episodioId]);

  useEffect(() => {
    if (!episodioId) {
      setSelectedEpisode(null);
      return;
    }
    const ep = episodes.find(
      (e) =>
        String(e.number) === String(episodioId) ||
        String(e.mal_id) === String(episodioId) ||
        String(e.id) === String(episodioId)
    );
    if (!ep) {
      setError("Episódio não encontrado.");
      setSelectedEpisode(null);
    } else {
      setError(null);
      setSelectedEpisode(ep);
    }
  }, [episodioId, episodes]);

  const fetchAnimeDetails = async (id) => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
      if (response.status !== 200) {
        throw new Error("Anime não encontrado!");
      }
      const data = response.data.data;
      setAnimeDetails({
        title: data.title,
        synopsis: data.synopsis,
        status: statusTraduzidos[data.status] || data.status,
        trailer: { url: data.trailer?.url || null },
      });
    } catch (error) {
      setError(
        "Ocorreu um erro ao carregar os detalhes do anime. Tente novamente mais tarde."
      );
      setAnimeDetails(null);
    }
  };

  const fetchEpisodes = async (id) => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/episodes`);
      const episodesData = response.data.data || [];
      let animeImage = null;
      try {
        const animeResp = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        animeImage =
          animeResp.data?.data?.images?.jpg?.large_image_url ||
          animeResp.data?.data?.images?.jpg?.image_url ||
          null;
      } catch {
        animeImage = null;
      }
      const updatedEpisodes = await Promise.all(
        episodesData.map(async (episode) => {
          let img =
            episode.images?.jpg?.image_url ||
            episode.images?.jpg?.still_image ||
            episode.still ||
            episode.image ||
            episode.images?.jpg?.large_image_url ||
            episode.images?.jpg?.small_image_url ||
            animeImage ||
            null;

          if (!img && episode.mal_id) {
            try {
              const kitsuResp = await axios.get(
                `https://kitsu.io/api/edge/episodes?filter[mediaType]=Anime&filter[number]=${episode.mal_id}&filter[animeId]=${id}`
              );
              const kitsuEp = kitsuResp.data.data?.[0];
              if (kitsuEp?.attributes?.thumbnail?.original) {
                img = kitsuEp.attributes.thumbnail.original;
              }
            } catch (e) {
              // ignora erro de fallback de imagem
            }
          }
          img = img || "/fallback-image.jpg";
          return {
            title: episode.title,
            synopsis: episode.synopsis,
            images: {
              jpg: {
                image_url: img,
              },
            },
            number: episode.mal_id || episode.episode_id || episode.id || episode.number,
          };
        })
      );
      setEpisodes(updatedEpisodes);
    } catch (error) {
      console.error("Erro ao buscar episódios na API principal:", error.message);
      try {
        const altResponse = await axios.get(`https://kitsu.io/api/edge/anime/${id}/episodes`);
        const altEpisodesData = altResponse.data.data || [];
        let animeKitsuImg = null;
        try {
          const animeResp = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
          animeKitsuImg =
            animeResp.data?.data?.attributes?.posterImage?.original ||
            animeResp.data?.data?.attributes?.posterImage?.large ||
            animeResp.data?.data?.attributes?.posterImage?.medium ||
            null;
        } catch {
          animeKitsuImg = null;
        }
        const updatedAltEpisodes = altEpisodesData.map((episode, idx) => ({
          title: episode.attributes.canonicalTitle,
          synopsis: episode.attributes.synopsis || "Sinopse não disponível",
          images: {
            jpg: {
              image_url:
                episode.attributes.thumbnail?.original ||
                episode.attributes.thumbnail?.small ||
                episode.attributes.thumbnail?.medium ||
                animeKitsuImg ||
                "/fallback-image.jpg",
            },
          },
          number: idx + 1,
        }));
        setEpisodes(updatedAltEpisodes);
      } catch (altError) {
        console.error("Erro ao buscar episódios na API alternativa:", altError.message);
        setEpisodes([]);
      }
    }
  };

  const toggleSynopsis = (event) => {
    event.preventDefault();
    setIsFullSynopsis((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoadMoreEpisodes = () => {
    setVisibleEpisodes((prev) => prev + 10);
  };

  const handleSaveAnime = () => {
    if (!animeDetails) return;
    setIsSaveAnimating(true);
    setTimeout(() => setIsSaveAnimating(false), 350);
    if (isAnimeSaved(Number(animeId))) {
      removeAnime(Number(animeId));
      showAlert("Anime removido dos salvos!", "info");
    } else {
      saveAnime({
        mal_id: Number(animeId),
        title: animeDetails.title,
        synopsis: animeDetails.synopsis,
        images: animeDetails.images || { jpg: { image_url: "" } },
        year: animeDetails.year,
        score: animeDetails.score,
        episodes: animeDetails.episodes,
        genres: animeDetails.genres || [],
      });
      showAlert("Anime salvo!", "success");
    }
  };

  const handleEpisodeClick = (ep) => {
    if (ep && ep.number) {
      navigate(`/Detalhes/${animeId}/episodio/${ep.number}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackToDetails = () => {
    navigate(`/Detalhes/${animeId}`);
    setSelectedEpisode(null);
  };

  if (error) {
    return (
      <div className="error-message" style={{ color: "#fff", background: "#b71c1c", padding: 24 }}>
        <h2>Ocorreu um erro</h2>
        <p>{error}</p>
        <button
          style={{
            background: "#23272f",
            color: "#ffb300",
            border: "none",
            borderRadius: 8,
            padding: "8px 18px",
            fontWeight: 600,
            fontSize: 16,
            marginTop: 16,
            cursor: "pointer"
          }}
          onClick={() => navigate("/")}
        >
          Voltar para a página inicial
        </button>
      </div>
    );
  }

  if (selectedEpisode) {
    return (
      <div className="assistir-episodio" style={{ background: "#181818", minHeight: "100vh", color: "#fff" }}>
        <button
          onClick={handleBackToDetails}
          style={{
            background: "#23272f",
            color: "#ffb300",
            border: "none",
            borderRadius: 8,
            padding: "8px 18px",
            fontWeight: 600,
            fontSize: 16,
            margin: "24px 0 16px 0",
            cursor: "pointer"
          }}
        >
          ← Voltar para Detalhes
        </button>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ marginBottom: 12 }}>{selectedEpisode.title || `Episódio ${selectedEpisode.number}`}</h2>
          <p style={{ color: "#bbb", maxWidth: 600, marginBottom: 16 }}>
            {selectedEpisode.synopsis || "Sinopse não disponível para este episódio."}
          </p>
          <div style={{ width: "100%", maxWidth: 800 }}>
            {selectedEpisode.video_url ? (
              <video
                src={selectedEpisode.video_url}
                controls
                style={{
                  width: "100%",
                  maxWidth: 800,
                  borderRadius: 10,
                  background: "#000"
                }}
              >
                Seu navegador não suporta vídeo incorporado.
              </video>
            ) : (
              <div style={{ color: "#bbb", marginTop: 12 }}>
                Nenhum player disponível para este episódio.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!animeDetails && !error) {
    return <TelaCarregamento />;
  }

  const shortSynopsis = animeDetails.synopsis
    ? animeDetails.synopsis.slice(0, 300) + "..."
    : "";

  return (
    <div className={`detalhes${showAnim ? " show-anim" : ""}`} style={{ background: "#181818" }}>
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      {animeDetails.trailer?.url ? (
        <div className="detalhes-trailer fade-in-up" style={{ animationDelay: "0.05s" }}>
          <iframe
            src={
              animeDetails.trailer.url.includes("youtube.com")
                ? `https://www.youtube.com/embed/${animeDetails.trailer.url.split("v=")[1]}`
                : animeDetails.trailer.url
            }
            title="Trailer"
            allowFullScreen
            className="anime-trailer"
            style={{ animation: "popIn 0.7s cubic-bezier(0.4,1.4,0.2,1)" }}
          />
        </div>
      ) : (
        <div className="detalhes-trailer-placeholder fade-in-up" style={{ animationDelay: "0.05s" }}>
          <span>Trailer não disponível</span>
          {animeDetails.trailer?.url && (
            <a
              href={animeDetails.trailer.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="assistir-trailer">Assistir ao Trailer</button>
            </a>
          )}
        </div>
      )}

      <div className="detalhes-titulo fade-in-up" style={{ alignItems: "center", gap: 8, animationDelay: "0.12s" }}>
        <h1 className="Title animated-title" style={{ margin: 0 }}>{animeDetails.title}</h1>
        {isAuthenticated && (
          <button
            className="save-button"
            style={{
              background: "none",
              border: "none",
              marginLeft: 4,
              marginBottom: -2,
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
              height: 24,
              transition: "transform 0.2s"
            }}
            onClick={handleSaveAnime}
            aria-label={isAnimeSaved(Number(animeId)) ? "Remover dos salvos" : "Salvar anime"}
            title={isAnimeSaved(Number(animeId)) ? "Remover dos salvos" : "Salvar anime"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isAnimeSaved(Number(animeId)) ? "#e50914" : "#444"}
              stroke={isAnimeSaved(Number(animeId)) ? "#e50914" : "#444"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isSaveAnimating ? "pop-animate" : ""}
              style={{
                transition: "fill 0.2s, stroke 0.2s",
                filter: isAnimeSaved(Number(animeId))
                  ? "drop-shadow(0 2px 8px #e5091444)"
                  : "drop-shadow(0 2px 8px #4443)"
              }}
            >
              <path d="M6 3a2 2 0 0 0-2 2v16l8-5.333L20 21V5a2 2 0 0 0-2-2z" />
            </svg>
          </button>
        )}
      </div>

      <p className="P-status fade-in-up" style={{ animationDelay: "0.18s" }}>
        <strong>Status:</strong>{" "}
        {animeDetails.status || "Informação não disponível"}
      </p>

      <div className="detalhes-sinopse fade-in-up" style={{ animationDelay: "0.22s" }}>
        <p>{isFullSynopsis ? animeDetails.synopsis : shortSynopsis}</p>
        <button className="ler-mais" onClick={toggleSynopsis}>
          {isFullSynopsis ? "Ler menos" : "Ler mais"}
        </button>
      </div>

      <div className="proximo-episodio fade-in-up" style={{ animationDelay: "0.28s" }}>
        <h2 style={{ color: "#ffb300" }}>EPISÓDIOS:</h2>
        {episodes.length > 0 ? (
          <div className="episodios-container">
            {episodes.slice(0, visibleEpisodes).map((episodio, index) => (
              <div
                key={`${episodio.title}-${index}`}
                className="episodio-card fade-in-episodio"
                tabIndex={0}
                role="button"
                aria-label={`Ver detalhes do episódio ${episodio.title}`}
                style={{
                  cursor: "pointer",
                  background: "#23272f",
                  color: "#fff",
                  animationDelay: `${0.05 + index * 0.03}s`
                }}
                onClick={() => handleEpisodeClick(episodio)}
                onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleEpisodeClick(episodio)}
              >
                <img
                  src={episodio.images?.jpg?.image_url || "/fallback-image.jpg"}
                  alt={episodio.title}
                  className="episodio-imagem"
                  style={{
                    background: "#181818",
                    border: "2px solid #222",
                    objectFit: "cover"
                  }}
                  onError={e => { e.target.src = "/fallback-image.jpg"; }}
                />
                <div className="episodio-info">
                  <h3 style={{ color: "#ffb300" }}>
                    Episódio {episodio.number ?? index + 1}: {episodio.title}
                  </h3>
                  <p style={{ color: "#ccc" }}>
                    {episodio.synopsis
                      ? episodio.synopsis.slice(0, 100) + "..."
                      : "Sem sinopse disponível"}
                  </p>
                </div>
              </div>
            ))}
            {visibleEpisodes < episodes.length && (
              <button className="ver-mais" onClick={handleLoadMoreEpisodes}>
                Ver Mais
              </button>
            )}
          </div>
        ) : (
          <p style={{ color: "#bbb" }}>Não há episódios disponíveis.</p>
        )}
      </div>
      <style>
        {`
        .show-anim .fade-in-up {
          opacity: 0;
          transform: translateY(32px) scale(0.97);
          animation: fadeInUp 0.7s cubic-bezier(0.4,1.4,0.2,1) forwards;
        }
        .show-anim .fade-in-up[style*="animation-delay"] {
          animation-fill-mode: both;
        }
        .show-anim .animated-title {
          animation: popIn 0.7s cubic-bezier(0.4,1.4,0.2,1);
        }
        .show-anim .fade-in-episodio {
          opacity: 0;
          transform: translateY(24px) scale(0.97);
          animation: fadeInUp 0.5s cubic-bezier(0.4,1.4,0.2,1) forwards;
        }
        .show-anim .fade-in-episodio[style*="animation-delay"] {
          animation-fill-mode: both;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px) scale(0.97);}
          to   { opacity: 1; transform: translateY(0) scale(1);}
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.92);}
          60% { opacity: 1; transform: scale(1.06);}
          100% { opacity: 1; transform: scale(1);}
        }
        `}
      </style>
    </div>
  );
};

export default PaginaDetalhes;
