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
  const { animeId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, saveAnime, removeAnime, savedAnimes } = useAuth();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [episodes, setEpisodes] = useState([]); // State for episodes
  const [isFullSynopsis, setIsFullSynopsis] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);
  const [visibleEpisodes, setVisibleEpisodes] = useState(10); // Limit to 10 episodes initially

  useEffect(() => {
    fetchAnimeDetails(animeId);
    fetchEpisodes(animeId); // Fetch episodes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [animeId]);

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
      const updatedEpisodes = episodesData.map((episode) => ({
        title: episode.title,
        synopsis: episode.synopsis,
        images: {
          jpg: {
            image_url: episode.images?.jpg?.image_url || `https://via.placeholder.com/150?text=${encodeURIComponent(episode.title || "Sem Imagem")}`,
          },
        },
      }));
      setEpisodes(updatedEpisodes);
    } catch (error) {
      console.error("Erro ao buscar episódios na API principal:", error.message);
      // Tentar API alternativa
      try {
        const altResponse = await axios.get(`https://kitsu.io/api/edge/anime/${id}/episodes`);
        const altEpisodesData = altResponse.data.data || [];
        const updatedAltEpisodes = altEpisodesData.map((episode) => ({
          title: episode.attributes.canonicalTitle,
          synopsis: episode.attributes.synopsis || "Sinopse não disponível",
          images: {
            jpg: {
              image_url: episode.attributes.thumbnail?.original || `https://via.placeholder.com/150?text=${encodeURIComponent(episode.attributes.canonicalTitle || "Sem Imagem")}`,
            },
          },
        }));
        setEpisodes(updatedAltEpisodes);
      } catch (altError) {
        console.error("Erro ao buscar episódios na API alternativa:", altError.message);
        setEpisodes([]); // Garante que o estado seja atualizado mesmo em caso de erro
      }
    }
  };

  const toggleSynopsis = (event) => {
    event.preventDefault();
    setIsFullSynopsis((prev) => !prev);
  };

  const handleSaveAnime = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      saveAnime(animeDetails);
      setAlert({ message: "Anime adicionado aos favoritos", type: "success" });
    }
  };

  const handleRemoveAnime = () => {
    removeAnime(animeDetails.mal_id);
    setAlert({ message: "Anime removido dos favoritos", type: "info" });
  };

  const handleLoadMoreEpisodes = () => {
    setVisibleEpisodes((prev) => prev + 10); // Load 10 more episodes
  };

  if (!animeDetails && !error) {
    return <TelaCarregamento />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const shortSynopsis = animeDetails.synopsis
    ? animeDetails.synopsis.slice(0, 300) + "..."
    : "";

  const isFavorite = savedAnimes.some(
    (anime) => anime.mal_id === animeDetails.mal_id
  );

  return (
    <div className="detalhes">
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      {animeDetails.trailer?.url ? (
        <div className="detalhes-trailer">
          <iframe
            src={
              animeDetails.trailer.url.includes("youtube.com")
                ? `https://www.youtube.com/embed/${animeDetails.trailer.url.split("v=")[1]}`
                : animeDetails.trailer.url
            }
            title="Trailer"
            allowFullScreen
            className="anime-trailer"
          />
        </div>
      ) : (
        <div className="detalhes-trailer-placeholder">
          <p>Trailer não disponível</p>
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

      <div className="detalhes-titulo">
        <h1 className="Title">{animeDetails.title}</h1>
        {isFavorite ? (
          <button className="save-button" onClick={handleRemoveAnime}>
            Remover dos Favoritos
          </button>
        ) : (
          <button className="save-button" onClick={handleSaveAnime}>
            Adicionar aos Favoritos
          </button>
        )}
      </div>

      <p className="P-status">
        <strong>Status:</strong>{" "}
        {animeDetails.status || "Informação não disponível"}
      </p>

      <div className="detalhes-sinopse">
        <p>{isFullSynopsis ? animeDetails.synopsis : shortSynopsis}</p>
        <button className="ler-mais" onClick={toggleSynopsis}>
          {isFullSynopsis ? "Ler menos" : "Ler mais"}
        </button>
      </div>

      <div className="proximo-episodio">
        <h2>EPISÓDIOS:</h2>
        {episodes.length > 0 ? (
          <div className="episodios-container">
            {episodes.slice(0, visibleEpisodes).map((episodio) => (
              <div key={episodio.mal_id} className="episodio-card">
                <img
                  src={episodio.images?.jpg?.image_url || "https://via.placeholder.com/150"}
                  alt={episodio.title}
                  className="episodio-imagem"
                />
                <div className="episodio-info">
                  <h3>{episodio.title}</h3>
                  <p>
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
          <p>Não há episódios disponíveis.</p>
        )}
      </div>
    </div>
  );
};

export default PaginaDetalhes;
