import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import "./Simulcasts.scss";
import { Link, useNavigate } from "react-router-dom";
import Estrelas from "../../components/animes/Estrelas/Estrelas";
import { fetchMissingImages } from "../../utils/fetchUtils";

const LIMIT = 18;

const getHighQualityImage = (anime) =>
  anime.images?.jpg?.large_image_url ||
  anime.images?.jpg?.image_url ||
  "/fallback-image.jpg";

export default function Simulcasts() {
  const [animes, setAnimes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [altImages, setAltImages] = useState({});
  const isFetching = useRef(false);
  const loaderRef = useRef(null);
  const navigate = useNavigate();
  const currentPage = useRef(1);

  // Controle de requisições para evitar race condition
  const requestIdRef = useRef(0);

  const fetchSimulcasts = useCallback(async (pageNum = 1, isFirst = false) => {
    if (isFetching.current || loading) return;
    isFetching.current = true;
    if (isFirst) setInitialLoading(true);
    setLoading(true);
    const thisRequestId = ++requestIdRef.current;
    try {
      const response = await axios.get("https://api.jikan.moe/v4/anime", {
        params: {
          status: "airing",
          order_by: "popularity",
          sort: "desc",
          limit: LIMIT,
          page: pageNum,
        },
      });
      let data = response.data.data || [];
      if (thisRequestId !== requestIdRef.current) return; // IGNORA resposta antiga
      setAnimes((prev) => (pageNum === 1 ? data : [...prev, ...data]));
      setHasMore(response.data.pagination?.has_next_page && data.length > 0);

      const altImgs = await fetchMissingImages(data);
      if (Object.keys(altImgs).length > 0 && thisRequestId === requestIdRef.current) {
        setAltImages((prev) => ({ ...prev, ...altImgs }));
      }
    } catch (err) {
      if (thisRequestId === requestIdRef.current) {
        setHasMore(false);
      }
    } finally {
      if (thisRequestId === requestIdRef.current) {
        setLoading(false);
        setInitialLoading(false);
        isFetching.current = false;
      }
    }
  }, [loading]);

  useEffect(() => {
    // Ao iniciar nova busca, invalida todas as anteriores
    requestIdRef.current += 1;
    setAnimes([]);
    setHasMore(true);
    setAltImages({});
    currentPage.current = 1;
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchSimulcasts(1, true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!hasMore || loading || initialLoading) return;
    let cancelled = false;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasMore &&
          !loading &&
          !initialLoading &&
          !cancelled
        ) {
          currentPage.current += 1;
          fetchSimulcasts(currentPage.current);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      cancelled = true;
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading, fetchSimulcasts, initialLoading]);

  const handleCardClick = useCallback((mal_id) => {
    navigate(`/Detalhes/${mal_id}`);
  }, [navigate]);

  if ((initialLoading || loading) && animes.length === 0) {
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
          Carregando simulcasts...
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
    <div className="simulcasts-container">
      <h1 className="simulcasts-title">Simulcasts</h1>
      <p className="simulcasts-desc">
        Veja os animes que estão sendo exibidos agora no Japão e no mundo!
      </p>
      <div className="simulcasts-results-count">
        {initialLoading
          ? null
          : animes.length > 0
          ? `Exibindo ${animes.length} anime${animes.length > 1 ? "s" : ""} em exibição`
          : null}
      </div>
      {initialLoading ? (
        <div className="simulcasts-initial-loading">
          <div className="simulcasts-spinner"></div>
          <span style={{marginLeft: 16, color: "var(--cor-texto)"}}>Buscando os simulcasts mais quentes...</span>
        </div>
      ) : (
        <>
          <div className="simulcasts-grid">
            {animes.map((anime) => {
              const imgSrc = altImages[anime.mal_id] || getHighQualityImage(anime);
              return (
                <div
                  className="simulcasts-card"
                  key={anime.mal_id}
                  tabIndex={0}
                  role="button"
                  onClick={() => handleCardClick(anime.mal_id)}
                  onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleCardClick(anime.mal_id)}
                  aria-label={`Ver detalhes de ${anime.title}`}
                >
                  <img
                    src={imgSrc}
                    alt={anime.title}
                    className="simulcasts-img"
                    loading="lazy"
                  />
                  <div className="simulcasts-info">
                    <h3 className="simulcasts-anime-title">{anime.title}</h3>
                    <div className="simulcasts-meta">
                      <Estrelas avaliacao={Number(anime.score) || 0} />
                      <span className="simulcasts-score">{anime.score ?? "N/A"}</span>
                      <span className="simulcasts-year">{anime.year ?? "?"}</span>
                    </div>
                    <p className="simulcasts-synopsis">
                      {anime.synopsis
                        ? anime.synopsis.slice(0, 80) + "..."
                        : "Sem sinopse disponível para este anime."}
                    </p>
                    <Link
                      to={`/Detalhes/${anime.mal_id}`}
                      className="simulcasts-btn"
                      tabIndex={-1}
                      onClick={e => e.stopPropagation()}
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div ref={loaderRef} style={{ height: 1 }} />
          {loading && animes.length > 0 && (
            <div className="simulcasts-loading">Carregando mais simulcasts...</div>
          )}
          {!loading && animes.length === 0 && (
            <div className="simulcasts-empty">
              <p>
                Nenhum anime em exibição encontrado agora.
              </p>
              <p style={{fontSize: "1rem", color: "var(--cor-texto)"}}>
                Volte mais tarde ou confira outras categorias!
              </p>
            </div>
          )}
          {!hasMore && animes.length > 0 && (
            <div className="simulcasts-end-message">
              Você chegou ao fim dos simulcasts disponíveis. <br />
              <span role="img" aria-label="confete">🎉</span> Continue explorando!
            </div>
          )}
        </>
      )}
    </div>
  );
}
