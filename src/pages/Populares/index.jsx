import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Estrelas from "../../components/animes/Estrelas/Estrelas";
import "./Populares.scss";

// --- Constantes e utilitários ---
const LIMIT = 12;

function getHighQualityImage(anime) {
  return (
    anime.images?.jpg?.large_image_url ||
    anime.images?.jpg?.image_url ||
    "/fallback-image.jpg"
  );
}

async function fetchKitsuImage(malId) {
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
}

// --- Componente principal ---
function Populares() {
  // --- States ---
  const [animes, setAnimes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [altImages, setAltImages] = useState({});
  const isFetching = useRef(false);
  const loaderRef = useRef(null);
  const currentPage = useRef(1);
  const navigate = useNavigate();

  // --- Fetch de animes ---
  const fetchPopulares = useCallback(async (pageNum = 1) => {
    if (isFetching.current) return;
    isFetching.current = true;
    setLoading(true);
    try {
      // Garante que o loading fique visível por pelo menos 600ms
      const start = Date.now();
      const response = await axios.get("https://api.jikan.moe/v4/top/anime", {
        params: { type: "tv", limit: LIMIT, page: pageNum, sort: "bypopularity" },
      });
      const data = response.data.data || [];
      setAnimes((prev) => (pageNum === 1 ? data : [...prev, ...data]));
      setHasMore(response.data.pagination?.has_next_page);

      // Busca imagens alternativas se necessário
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
      // Aguarda pelo menos 600ms para UX consistente
      const elapsed = Date.now() - start;
      if (elapsed < 600) await new Promise(r => setTimeout(r, 600 - elapsed));
    } catch {
      setHasMore(false);
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  }, []);

  // --- Efeitos ---
  useEffect(() => {
    fetchPopulares(1);
    currentPage.current = 1;
  }, [fetchPopulares]);

  useEffect(() => {
    if (!hasMore || loading) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          currentPage.current += 1;
          fetchPopulares(currentPage.current);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading, fetchPopulares]);

  // --- Handlers ---
  const handleCardClick = useCallback((mal_id) => {
    navigate(`/Detalhes/${mal_id}`);
  }, [navigate]);

  const animesFiltrados = useMemo(() => {
    if (!Array.isArray(animes) || animes.length === 0) return [];
    const unique = [];
    const seen = new Set();
    for (const a of animes) {
      if (!seen.has(a.title)) {
        seen.add(a.title);
        unique.push(a);
      }
    }
    return unique
      .filter(a =>
        (typeof a.score === "number" && a.score >= 7.5) &&
        (a.members && a.members > 150000)
      )
      .sort((a, b) => {
        if ((b.members || 0) !== (a.members || 0)) return (b.members || 0) - (a.members || 0);
        if ((b.score || 0) !== (a.score || 0)) return (b.score || 0) - (a.score || 0);
        return (b.year || 0) - (a.year || 0);
      });
  }, [animes]);

  // --- Render ---
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
          Carregando animes populares...
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
    <div className="populares-container">
      <h1 className="populares-title">Mais Populares</h1>
      <p className="populares-desc">Os animes mais famosos de todos os tempos!</p>
      <div className="populares-grid">
        {animesFiltrados.map((anime) => {
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
                onError={e => { e.target.src = "/fallback-image.jpg"; }}
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
        <div className="populares-loading" style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "24px 0" }}>
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
            Buscando mais animes populares...
          </span>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}
      {!loading && animes.length === 0 && (
        <p className="populares-empty">Nenhum anime popular encontrado.</p>
      )}
      {!hasMore && animes.length > 0 && (
        <div className="populares-end-message">
          Você chegou ao fim dos animes populares disponíveis.
        </div>
      )}
    </div>
  );
}

export default Populares;
