import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import "./Novidades.scss";
import { Link, useNavigate } from "react-router-dom";
import Estrelas from "../../components/animes/Estrelas/Estrelas";

const LIMIT = 12;

const getHighQualityImage = (anime) => (
  anime.images?.jpg?.large_image_url ||
  anime.images?.jpg?.image_url ||
  "/fallback-image.jpg"
);

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

const Novidades = () => {
  const [animes, setAnimes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const isFetching = useRef(false);
  const navigate = useNavigate();
  const [altImages, setAltImages] = useState({});
  const loaderRef = useRef(null);

  const fetchNovidades = useCallback(async (pageNum = 1) => {
    if (isFetching.current) return;
    isFetching.current = true;
    setLoading(true);
    try {
      const response = await axios.get("https://api.jikan.moe/v4/seasons/now", {
        params: { limit: LIMIT, page: pageNum },
      });
      const data = response.data.data || [];
      setAnimes((prev) => (pageNum === 1 ? data : [...prev, ...data]));
      setHasMore(response.data.pagination?.has_next_page);

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
      isFetching.current = false;
    }
  }, []);

  useEffect(() => {
    fetchNovidades(1);
    // eslint-disable-next-line
  }, []);

  // Infinite scroll usando IntersectionObserver
  useEffect(() => {
    if (!hasMore || loading) return;
    let currentPage = 1;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          currentPage += 1;
          fetchNovidades(currentPage);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading, fetchNovidades]);

  const handleCardClick = useCallback((mal_id) => {
    navigate(`/Detalhes/${mal_id}`);
  }, [navigate]);

  if (loading && animes.length === 0) {
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
          Carregando novidades...
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
    <div className="page-fadein novidades-container">
      <h1 className="novidades-title">Novidades</h1>
      <p className="novidades-desc">Confira os animes lançados recentemente!</p>
      <div className="novidades-grid">
        {animes.map((anime) => {
          const imgSrc =
            altImages[anime.mal_id] ||
            getHighQualityImage(anime);
          return (
            <div
              className="novidade-card"
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
                className="novidade-img"
                loading="lazy"
              />
              <div className="novidade-info">
                <h3 className="novidade-title">{anime.title}</h3>
                <div className="novidade-meta">
                  <Estrelas avaliacao={Number(anime.score) || 0} />
                  <span className="novidade-score">{anime.score ?? "N/A"}</span>
                  <span className="novidade-year">{anime.year ?? "?"}</span>
                </div>
                <p className="novidade-synopsis">
                  {anime.synopsis ? anime.synopsis.slice(0, 90) + "..." : "Sem sinopse disponível"}
                </p>
                <Link
                  to={`/Detalhes/${anime.mal_id}`}
                  className="novidade-btn"
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
      {loading && (
        <div className="novidade-loading">Carregando...</div>
      )}
      {!loading && animes.length === 0 && (
        <p className="novidades-empty">Nenhum anime recente encontrado.</p>
      )}
    </div>
  );
};

export default Novidades;
