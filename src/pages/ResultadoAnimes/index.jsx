import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Estrelas from "../../assets/images/star.png";
import "./ListaAnimesVertical.scss";
import "./Spinner.scss";

const API_BASE_URL = "https://api.jikan.moe/v4";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResultadoAnimes = () => {
  const query = useQuery();
  const searchTerm = query.get("q") || "";
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const requestIdRef = useRef(0);
  const navigate = useNavigate();

  const fetchAnimes = async (pageNumber, term = searchTerm) => {
    setLoading(true);
    setError(null);
    const thisRequestId = ++requestIdRef.current;
    try {
      const response = await axios.get(`${API_BASE_URL}/anime`, {
        params: {
          q: term,
          limit: 12,
          page: pageNumber,
        },
      });

      if (response.data?.data) {
        if (thisRequestId !== requestIdRef.current) return;
        const newResults = pageNumber === 1 ? response.data.data : [...animes, ...response.data.data];
        setAnimes(newResults);
        setHasMore(response.data.pagination.has_next_page);
        sessionStorage.setItem(`search_${term}`, JSON.stringify(newResults));
      } else {
        setHasMore(false);
      }
      setSearchPerformed(true);
    } catch (err) {
      if (thisRequestId !== requestIdRef.current) return;
      setError("Erro ao carregar animes. Tente novamente mais tarde.");
    } finally {
      if (thisRequestId === requestIdRef.current) setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      requestIdRef.current += 1;
      setAnimes([]);
      setPage(1);
      setHasMore(true);
      setError(null);
      setSearchPerformed(false);
      fetchAnimes(1, searchTerm);
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  const handleLoadMore = () => {
    if (loading || !hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchAnimes(nextPage, searchTerm);
  };

  // --- UI ---
  return (
    <article className="search-container">
      <section className="search-list" aria-label="Resultados da Pesquisa">
        <div className="search-title-wrapper">
          <h2 className="search-title" tabIndex={0}>
            Resultados para <span className="search-term">&quot;{searchTerm}&quot;</span>
          </h2>
          {animes.length > 0 && (
            <span className="search-count">{animes.length} resultado{animes.length > 1 ? "s" : ""}</span>
          )}
        </div>
        {loading && animes.length === 0 && (
          <div className="search-spinner-container">
            <div className="search-spinner"></div>
            <span className="search-loading-text">Buscando animes...</span>
          </div>
        )}
        {error && (
          <div className="search-error-message">
            <h2>Ocorreu um erro</h2>
            <p>{error}</p>
          </div>
        )}
        {searchPerformed && animes.length === 0 && !loading && !error && (
          <div className="search-empty-state">
            <img src="/assets/images/empty-search.svg" alt="Nenhum resultado" style={{ width: 120, marginBottom: 16 }} />
            <h3>Nenhum anime encontrado</h3>
            <p>Tente outro termo ou confira se digitou corretamente.</p>
          </div>
        )}
        <div className="search-grid-list">
          {animes.map((anime) => (
            <div
              className="search-card"
              key={anime.mal_id}
              tabIndex={0}
              aria-label={`Anime: ${anime.title || "Sem título"}`}
              onClick={() => navigate(`/Detalhes/${anime.mal_id}`)}
              onKeyDown={e => (e.key === "Enter" || e.key === " ") && navigate(`/Detalhes/${anime.mal_id}`)}
              role="button"
              style={{ cursor: "pointer" }}
            >
              <figure className="search-card-banner">
                <img
                  src={anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url || "/fallback-image.jpg"}
                  alt={anime.title || "Anime sem título"}
                  className="search-img-cover"
                  onError={(e) => (e.target.src = "/fallback-image.jpg")}
                  loading="lazy"
                />
              </figure>
              <div className="search-card-info">
                <h4 className="search-card-title">{anime.title || "Sem título"}</h4>
                <div className="search-card-meta">
                  <img
                    src={Estrelas}
                    width={20}
                    height={20}
                    loading="lazy"
                    alt="Avaliação"
                  />
                  <span className="search-score">{anime.score ?? "N/A"}</span>
                  <span className="search-year">{anime.year ?? "?"}</span>
                </div>
                <p className="search-card-synopsis">
                  {anime.synopsis
                    ? anime.synopsis.slice(0, 100) + "..."
                    : "Sem sinopse disponível para este anime."}
                </p>
                <Link
                  to={`/Detalhes/${anime.mal_id}`}
                  className="search-card-btn"
                  title={`Ver detalhes de ${anime.title || "anime"}`}
                  tabIndex={0}
                  onClick={e => e.stopPropagation()}
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
        {hasMore && animes.length > 0 && (
          <button
            className="search-btn-load-more"
            onClick={handleLoadMore}
            disabled={loading}
            aria-busy={loading}
            aria-label={loading ? "Carregando mais resultados" : "Ver mais resultados"}
            tabIndex={0}
            style={{ position: "relative", overflow: "hidden" }}
          >
            {loading ? (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span className="search-btn-spinner" aria-hidden="true"></span>
                <span>Carregando...</span>
              </span>
            ) : (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{marginRight: 2}}>
                  <circle cx="11" cy="11" r="10" stroke="#ffb300" strokeWidth="2" fill="none"/>
                  <path d="M11 6v5l4 2" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Ver Mais</span>
              </span>
            )}
          </button>
        )}
      </section>
    </article>
  );
};

export default ResultadoAnimes;
