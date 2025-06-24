import React, { useEffect, useState, useCallback, useMemo } from "react";
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

const MAX_EPISODE_PAGES = 20; // Limite de segurança para evitar abuso

const PaginaDetalhes = () => {
  const { animeId, episodioId } = useParams();
  const navigate = useNavigate();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [episodesPage, setEpisodesPage] = useState(1);
  const [episodesLoading, setEpisodesLoading] = useState(false);
  const [totalEpisodesLoaded, setTotalEpisodesLoaded] = useState(10);
  const [isFullSynopsis, setIsFullSynopsis] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);
  const [isSaveAnimating, setIsSaveAnimating] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [showAnim, setShowAnim] = useState(false);
  const [abortControllers, setAbortControllers] = useState({}); // Para cancelar requisições

  const { isAuthenticated, saveAnime, removeAnime, isAnimeSaved, showAlert } = useAuth();

  const statusTraduzidosMemo = useMemo(() => statusTraduzidos, []);

  // Busca detalhes do anime com timeout/cancelamento
  const fetchAnimeDetails = useCallback(async (id) => {
    const controller = new AbortController();
    setAbortControllers(prev => ({ ...prev, details: controller }));
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`, {
        timeout: 6000,
        signal: controller.signal,
      });
      if (response.status !== 200) throw new Error("Anime não encontrado!");
      const data = response.data.data;
      setAnimeDetails({
        title: data.title,
        synopsis: data.synopsis,
        status: statusTraduzidosMemo[data.status] || data.status,
        trailer: { url: data.trailer?.url || null },
        images: data.images,
        year: data.year,
        score: data.score,
        episodes: data.episodes,
        genres: data.genres,
      });
    } catch (err) {
      if (axios.isCancel(err)) return;
      let msg =
        err?.code === "ECONNABORTED"
          ? "A conexão com a API demorou demais. Tente novamente."
          : err?.response?.status === 429
          ? "Muitas requisições para a API. Aguarde alguns segundos e tente novamente."
          : "Ocorreu um erro ao carregar os detalhes do anime. Tente novamente mais tarde.";
      setError(msg);
      setAnimeDetails(null);
    }
  }, [statusTraduzidosMemo]);

  // Busca episódios paginados com timeout/cancelamento
  const fetchEpisodes = useCallback(async (id, page = 1, append = false) => {
    if (page > MAX_EPISODE_PAGES) return; // Limite de segurança
    const controller = new AbortController();
    setAbortControllers(prev => ({ ...prev, [`episodes_${page}`]: controller }));
    try {
      if (page === 1) setEpisodesLoading(true);
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/episodes`, {
        params: { page, limit: 25 },
        timeout: 6000,
        signal: controller.signal,
      });
      const data = response.data.data || [];
      setEpisodes(prev => append ? [...prev, ...data] : data);
    } catch (err) {
      if (axios.isCancel(err)) return;
      if (!append) setEpisodes([]);
      setError(
        err?.code === "ECONNABORTED"
          ? "A conexão com a API demorou demais. Tente novamente."
          : "Ocorreu um erro ao carregar episódios. Tente novamente mais tarde."
      );
    } finally {
      setEpisodesLoading(false);
    }
  }, []);

  // Cancela requisições pendentes ao desmontar/trocar anime
  useEffect(() => {
    return () => {
      Object.values(abortControllers).forEach((controller) => {
        if (controller && typeof controller.abort === "function") controller.abort();
      });
    };
  }, [animeId]);

  useEffect(() => {
    if (!animeId || isNaN(Number(animeId))) {
      setError("Anime não encontrado.");
      setAnimeDetails(null);
      setEpisodes([]);
      return;
    }
    fetchAnimeDetails(animeId);
    setEpisodesPage(1);
    setTotalEpisodesLoaded(10);
    fetchEpisodes(animeId, 1, false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [animeId, fetchAnimeDetails, fetchEpisodes]);

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

  const toggleSynopsis = (event) => {
    event.preventDefault();
    setIsFullSynopsis((prev) => !prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLoadMoreEpisodes = () => {
    if (totalEpisodesLoaded >= episodes.length && episodes.length % 25 === 0) {
      const nextPage = episodesPage + 1;
      setEpisodesPage(nextPage);
      setEpisodesLoading(true);
      fetchEpisodes(animeId, nextPage, true);
    }
    setTotalEpisodesLoaded(prev => prev + 10);
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

  const getEpisodeImage = useCallback((ep) => {
    const img =
      ep?.images?.jpg?.large_image_url ||
      ep?.images?.jpg?.image_url ||
      ep?.images?.jpg?.small_image_url ||
      ep?.image_url ||
      ep?.thumbnail ||
      animeDetails?.images?.jpg?.large_image_url ||
      animeDetails?.images?.jpg?.image_url ||
      animeDetails?.images?.webp?.large_image_url ||
      animeDetails?.images?.webp?.image_url ||
      "/fallback-image.jpg";
    return img;
  }, [animeDetails]);

  const shortSynopsis = useMemo(() =>
    animeDetails?.synopsis
      ? animeDetails.synopsis.slice(0, 300) + (animeDetails.synopsis.length > 300 ? "..." : "")
      : ""
  , [animeDetails]);

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
            {episodes.slice(0, totalEpisodesLoaded).map((episodio, index) => (
              <div
                key={`${episodio.title || "ep"}-${episodio.number || index}`}
                className="episodio-card fade-in-episodio"
                tabIndex={0}
                role="button"
                aria-label={`Ver detalhes do episódio ${episodio.title || episodio.number || index + 1}`}
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
                  src={getEpisodeImage(episodio)}
                  alt={episodio.title || animeDetails?.title || "Imagem do episódio"}
                  className="episodio-imagem"
                  style={{
                    background: "#181818",
                    border: "2px solid #222",
                    objectFit: "cover",
                    width: 80,
                    height: 60,
                    borderRadius: 6,
                    marginRight: 10,
                    display: "block"
                  }}
                  onError={e => { e.target.onerror = null; e.target.src = "/fallback-image.jpg"; }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="episodio-info">
                  <h3 style={{ color: "#ffb300" }}>
                    Episódio {episodio.number ?? index + 1}: {episodio.title}
                  </h3>
                  <p style={{ color: "#ccc" }}>
                    {episodio.synopsis
                      ? episodio.synopsis.slice(0, 100) + (episodio.synopsis.length > 100 ? "..." : "")
                      : "Sem sinopse disponível"}
                  </p>
                </div>
              </div>
            ))}
            {episodesLoading && (
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0" }}>
                <span className="search-btn-spinner" style={{
                  width: 28, height: 28, borderWidth: 3, marginRight: 10
                }} />
                <span style={{ color: "#ffb300", fontWeight: 600 }}>Carregando episódios...</span>
              </div>
            )}
            {!episodesLoading && (
              (totalEpisodesLoaded < episodes.length || episodes.length % 25 === 0) && (
                <button className="ver-mais" onClick={handleLoadMoreEpisodes} disabled={episodesLoading}>
                  Ver Mais Episódios
                </button>
              )
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
