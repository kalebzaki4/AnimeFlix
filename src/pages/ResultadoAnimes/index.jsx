import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Estrelas from "../../assets/images/star.png";
import "./ListaAnimesVertical.scss";
import "./Spinner.scss";

const API_BASE_URL = "https://api.jikan.moe/v4";

console.log("API Base URL:", API_BASE_URL);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResultadoAnimes = () => {
  const query = useQuery();
  const searchTerm = query.get("q") || "";
  const [animes, setAnimes] = useState(() => {
    const cachedResults = sessionStorage.getItem(`search_${searchTerm}`);
    return cachedResults ? JSON.parse(cachedResults) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchAnimes = async (pageNumber) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get(`${API_BASE_URL}/anime`, {
        params: {
          q: searchTerm,
          limit: 10,
          page: pageNumber,
        },
      });

      if (response.data?.data) {
        const newResults = pageNumber === 1 ? response.data.data : [...animes, ...response.data.data];
        setAnimes(newResults);
        setHasMore(response.data.pagination.has_next_page);

        sessionStorage.setItem(`search_${searchTerm}`, JSON.stringify(newResults));
      } else {
        setHasMore(false);
      }

      setSearchPerformed(true);
    } catch (err) {
      console.error("Erro ao buscar animes:", err);
      setError("Erro ao carregar animes. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      const cachedResults = sessionStorage.getItem(`search_${searchTerm}`);
      if (!cachedResults) {
        setAnimes([]); 
        setPage(1); 
        setHasMore(true); 
        fetchAnimes(1); 
      } else {
        setAnimes(JSON.parse(cachedResults));
        setSearchPerformed(true);
      }
    }
  }, [searchTerm]);

  const handleLoadMore = () => {
    if (loading || !hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchAnimes(nextPage);
  };

  if (loading && animes.length === 0) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (searchPerformed && animes.length === 0) {
    return <p>Nenhum anime encontrado.</p>;
  }

  return (
    <article className="container-inative-2">
      <section className="movie-list" aria-label="Lista de animes">
        <div className="title-wrapper">
          <h2 className="title-large" tabIndex={0}>Resultados da Pesquisa</h2>
        </div>
        <div className="grid-list">
          {animes.map((anime) => (
            <div className="movie-card" key={anime.mal_id} tabIndex={0} aria-label={`Anime: ${anime.title || "Sem título"}`}>
              <figure className="poster-box card-banner">
                <img
                  src={anime.images?.jpg?.image_url || "/fallback-image.jpg"}
                  alt={anime.title || "Anime sem título"}
                  className="img-cover"
                  onError={(e) => (e.target.src = "/fallback-image.jpg")}
                />
              </figure>
              <h4 className="title">{anime.title || "Sem título"}</h4>
              <div className="meta-list">
                <div className="meta-item">
                  <img
                    src={Estrelas}
                    width={20}
                    height={20}
                    loading="lazy"
                    alt="Avaliação"
                  />
                  <span className="span">{anime.score ?? "N/A"}</span>
                </div>
                <div className="card-badge">{anime.year ?? "Desconhecido"}</div>
              </div>
              <Link
                to={`/Detalhes/${anime.mal_id}`}
                className="card-btn"
                title={`Ver detalhes de ${anime.title || "anime"}`}
                tabIndex={0}
              >
                Detalhes
              </Link>
            </div>
          ))}
        </div>
        {hasMore && (
          <button
            className="btn load-more"
            onClick={handleLoadMore}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Carregando..." : "Ver Mais"}
          </button>
        )}
      </section>
    </article>
  );
};

export default ResultadoAnimes;
