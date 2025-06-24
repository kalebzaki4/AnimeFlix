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
  const [hasMore, setHasMore] = useState(true);
  const [lastPageLoaded, setLastPageLoaded] = useState(1);
  const requestIdRef = useRef(0);
  const abortControllerRef = useRef(null);
  const navigate = useNavigate();

  const fetchAnimes = async (pageNumber, term = searchTerm) => {
    setLoading(true);
    setError(null);
    if (abortControllerRef.current) abortControllerRef.current.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;
    const thisRequestId = ++requestIdRef.current;
    try {
      const response = await axios.get(`${API_BASE_URL}/anime`, {
        params: {
          q: term,
          limit: 12,
          page: pageNumber,
        },
        timeout: 6000,
        signal: controller.signal,
      });

      // Garante que a resposta é válida e tem dados
      if (response?.data?.data && Array.isArray(response.data.data)) {
        if (thisRequestId !== requestIdRef.current) return;
        let filtered = response.data.data.filter(
          anime =>
            (anime.type === "TV" || anime.type === "ONA") &&
            anime.images?.jpg?.image_url
        );
        // Fallback: se filtro por tipo não retornar nada, mostra todos com imagem
        if (filtered.length === 0) {
          filtered = response.data.data.filter(anime => anime.images?.jpg?.image_url);
        }
        setAnimes(prev =>
          pageNumber === 1 ? filtered : [...prev, ...filtered]
        );
        setLastPageLoaded(pageNumber); // Atualiza a última página carregada
        setHasMore(response.data.pagination?.has_next_page && filtered.length > 0);
        if (pageNumber === 1) {
          sessionStorage.setItem(`search_${term}`, JSON.stringify(filtered));
        } else {
          const prevResults = JSON.parse(sessionStorage.getItem(`search_${term}`) || "[]");
          sessionStorage.setItem(`search_${term}`, JSON.stringify([...prevResults, ...filtered]));
        }
      } else {
        setHasMore(false);
        if (pageNumber === 1) setAnimes([]);
      }
      setSearchPerformed(true);
    } catch (err) {
      if (axios.isCancel(err)) return;
      if (thisRequestId !== requestIdRef.current) return;
      let msg = "Erro ao carregar animes. Tente novamente mais tarde.";
      if (err?.code === "ECONNABORTED") {
        msg = "A conexão com a API demorou demais. Tente novamente.";
      } else if (err?.response?.status === 429) {
        msg = "Muitas requisições para a API. Aguarde alguns segundos e tente novamente.";
      } else if (err?.response?.status === 404) {
        msg = "Nenhum anime encontrado para esse termo.";
      }
      setError(msg);
    } finally {
      if (thisRequestId === requestIdRef.current) setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      if (abortControllerRef.current) abortControllerRef.current.abort();
      requestIdRef.current += 1;
      setAnimes([]);
      setHasMore(true);
      setError(null);
      setSearchPerformed(false);
      setLastPageLoaded(1); // Reset ao buscar novo termo
      fetchAnimes(1, searchTerm);
    }
    // eslint-disable-next-line
  }, [searchTerm]);

  const handleLoadMore = () => {
    if (loading || !hasMore) return;
    const nextPage = lastPageLoaded + 1;
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
            style={{
              position: "relative",
              overflow: "hidden",
              border: "none",
              borderRadius: 32,
              background: "linear-gradient(90deg, #ffb300 80%, #ffd740 100%)",
              color: "#181818",
              fontWeight: 700,
              fontSize: "1.18rem",
              boxShadow: "0 4px 18px #ffb30033, 0 2px 8px #0002",
              margin: "36px auto 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              minHeight: 54,
              maxWidth: 340,
              width: "100%",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "background 0.18s, transform 0.18s, box-shadow 0.18s, filter 0.18s"
            }}
            onMouseDown={e => {
              // Ripple effect
              const btn = e.currentTarget;
              const ripple = document.createElement("span");
              ripple.className = "ripple";
              ripple.style.left = `${e.nativeEvent.offsetX}px`;
              ripple.style.top = `${e.nativeEvent.offsetY}px`;
              btn.appendChild(ripple);
              setTimeout(() => ripple.remove(), 400);
            }}
          >
            {loading ? (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span
                  className="search-btn-spinner"
                  aria-hidden="true"
                  style={{
                    width: 26,
                    height: 26,
                    border: "3px solid #fffbe0",
                    borderTop: "3px solid #ffb300",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                    marginRight: 4,
                  }}
                ></span>
                <span>Carregando...</span>
              </span>
            ) : (
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  style={{
                    marginRight: 2,
                    transition: "transform 0.18s",
                  }}
                  className="ver-mais-icone"
                >
                  <circle
                    cx="14"
                    cy="14"
                    r="12"
                    stroke="#ffb300"
                    strokeWidth="2.5"
                    fill="#fffbe0"
                    style={{ filter: "drop-shadow(0 2px 8px #ffb30033)" }}
                  />
                  <path
                    d="M14 10v6M14 16l-3-3m3 3l3-3"
                    stroke="#e53935"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
