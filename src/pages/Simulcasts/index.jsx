import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import "./Simulcasts.scss";
import { Link, useNavigate } from "react-router-dom";
import Estrelas from "../../components/animes/Estrelas/Estrelas";

const LIMIT = 18;

const getHighQualityImage = (anime) =>
  anime.images?.jpg?.large_image_url ||
  anime.images?.jpg?.image_url ||
  "/fallback-image.jpg";

const fetchKitsuImage = async (malId) => {
  try {
    const resp = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[malId]=${malId}`
    );
    const data = resp.data.data?.[0];
    return (
      data?.attributes?.posterImage?.original ||
      data?.attributes?.posterImage?.large ||
      data?.attributes?.posterImage?.medium ||
      null
    );
  } catch {
    return null;
  }
};

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

  const fetchSimulcasts = useCallback(async (pageNum = 1, isFirst = false) => {
    if (isFetching.current) return;
    isFetching.current = true;
    if (isFirst) setInitialLoading(true);
    setLoading(true);
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
      setAnimes((prev) => (pageNum === 1 ? data : [...prev, ...data]));
      setHasMore(response.data.pagination?.has_next_page && data.length > 0);

      // Busca imagens alternativas para animes sem large_image_url
      const missingHQ = data.filter(
        (anime) => !anime.images?.jpg?.large_image_url
      );
      if (missingHQ.length > 0) {
        const promises = missingHQ.map(async (anime) => {
          const img = await fetchKitsuImage(anime.mal_id);
          return { mal_id: anime.mal_id, img };
        });
        const results = await Promise.all(promises);
        setAltImages((prev) => {
          const next = { ...prev };
          results.forEach(({ mal_id, img }) => {
            if (img) next[mal_id] = img;
          });
          return next;
        });
      }
    } catch {
      setHasMore(false);
    } finally {
      setLoading(false);
      setInitialLoading(false);
      isFetching.current = false;
    }
  }, []);

  useEffect(() => {
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
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading && !initialLoading) {
          currentPage.current += 1;
          fetchSimulcasts(currentPage.current);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading, fetchSimulcasts, initialLoading]);

  const handleCardClick = useCallback((mal_id) => {
    navigate(`/Detalhes/${mal_id}`);
  }, [navigate]);

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
