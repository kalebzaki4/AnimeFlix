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
    setError(null); // Reset error state before fetching
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
        setAnimes([]); // Clear previous results
        setPage(1); // Reset to the first page
        setHasMore(true); // Reset pagination
        fetchAnimes(1); // Fetch without debounce for initial load
      } else {
        setAnimes(JSON.parse(cachedResults)); // Load cached results
        setSearchPerformed(true);
      }
    }
  }, [searchTerm]);

  const handleLoadMore = () => {
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
    return <p>{error}</p>;
  }

  if (searchPerformed && animes.length === 0) {
    return <p>Nenhum anime encontrado.</p>;
  }

  return (
    <article className="container-inative-2">
      <section className="movie-list" aria-label="Lista de animes">
        <div className="title-wrapper">
          <h2 className="title-large">Resultados da Pesquisa</h2>
        </div>
        <div className="grid-list">
          {animes.map((anime) => (
            <div className="movie-card" key={anime.mal_id}>
              <figure className="poster-box card-banner">
                <img
                  src={anime.images?.jpg?.image_url || "fallback-image-url.jpg"}
                  alt={anime.title}
                  className="img-cover"
                  onError={(e) => (e.target.src = "fallback-image-url.jpg")}
                />
              </figure>
              <h4 className="title">{anime.title}</h4>
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
                title="Ver detalhes"
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
          >
            {loading ? "Carregando..." : "Ver Mais"}
          </button>
        )}
      </section>
    </article>
  );
};

export default ResultadoAnimes;
