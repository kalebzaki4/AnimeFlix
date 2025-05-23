import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import "./Populares.scss";
import { Link, useNavigate } from "react-router-dom";
import Estrelas from "../../components/animes/Estrelas/Estrelas";

const LIMIT = 12;

const getHighQualityImage = (anime) => {
  return (
    anime.images?.jpg?.large_image_url ||
    anime.images?.jpg?.image_url ||
    "/fallback-image.jpg"
  );
};

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

const Populares = () => {
  const [animes, setAnimes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const isFetching = useRef(false);
  const navigate = useNavigate();
  const [altImages, setAltImages] = useState({});
  const loaderRef = useRef(null);

  const fetchPopulares = useCallback(async (pageNum = 1) => {
    if (isFetching.current) return;
    isFetching.current = true;
    setLoading(true);
    try {
      const response = await axios.get("https://api.jikan.moe/v4/top/anime", {
        params: { type: "tv", limit: LIMIT, page: pageNum, sort: "bypopularity" },
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
    fetchPopulares(1);
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
          fetchPopulares(currentPage);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading, fetchPopulares]);

  const handleCardClick = useCallback((mal_id) => {
    navigate(`/Detalhes/${mal_id}`);
  }, [navigate]);

  return (
    <div className="populares-container">
      <h1 className="populares-title">Mais Populares</h1>
      <p className="populares-desc">Os animes mais famosos de todos os tempos!</p>
      <div className="populares-grid">
        {animes.map((anime) => {
          const imgSrc =
            altImages[anime.mal_id] ||
            getHighQualityImage(anime);
          return (
            <div
              className="populares-card"
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
                className="populares-img"
                loading="lazy"
              />
              <div className="populares-info">
                <h3 className="populares-anime-title">{anime.title}</h3>
                <div className="populares-meta">
                  <Estrelas avaliacao={Number(anime.score) || 0} />
                  <span className="populares-score">{anime.score ?? "N/A"}</span>
                  <span className="populares-year">{anime.year ?? "?"}</span>
                </div>
                <p className="populares-synopsis">
                  {anime.synopsis ? anime.synopsis.slice(0, 90) + "..." : "Sem sinopse disponível"}
                </p>
                <Link
                  to={`/Detalhes/${anime.mal_id}`}
                  className="populares-btn"
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
        <div className="populares-loading">Carregando...</div>
      )}
      {!loading && animes.length === 0 && (
        <p className="populares-empty">Nenhum anime popular encontrado.</p>
      )}
    </div>
  );
};

export default Populares;
