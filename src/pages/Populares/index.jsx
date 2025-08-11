import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  useTransition,
} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Populares.scss";
import { fetchMissingImages } from "../../utils/fetchUtils";

const LIMIT = 12;

const getHighQualityImage = (anime) => {
  return (
    anime.images?.jpg?.large_image_url ||
    anime.images?.jpg?.image_url ||
    "/fallback-image.jpg"
  );
};

function Populares() {
  const [animes, setAnimes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [altImages, setAltImages] = useState({});
  const [isPending, startTransition] = useTransition();
  const [blockUntil, setBlockUntil] = useState(0);
  const isFetching = useRef(false);
  const loaderRef = useRef(null);
  const currentPage = useRef(1);
  const navigate = useNavigate();

  const fetchPopulares = useCallback(async (pageNum = 1) => {
    if (
      isFetching.current ||
      loading ||
      (blockUntil && Date.now() < blockUntil)
    ) {
      return;
    }

    isFetching.current = true;
    setLoading(true);

    try {
      const start = Date.now();
      const response = await axios.get("https://api.jikan.moe/v4/top/anime", {
        params: {
          type: "tv",
          limit: LIMIT,
          page: pageNum,
          sort: "bypopularity",
        },
      });

      const data = response.data.data || [];

      startTransition(() => {
        setAnimes((prev) => (pageNum === 1 ? data : [...prev, ...data]));
        setHasMore(response.data.pagination?.has_next_page);
      });

      const altImgs = await fetchMissingImages(data);
      if (Object.keys(altImgs).length > 0) {
        setAltImages((prev) => ({ ...prev, ...altImgs }));
      }

      const elapsed = Date.now() - start;
      if (elapsed < 600) {
        await new Promise((resolve) => setTimeout(resolve, 600 - elapsed));
      }
    } catch (error) {
      if (error?.response?.status === 429) {
        setBlockUntil(Date.now() + 8000);
      } else {
        console.error("Failed to fetch popular animes:", error);
        setHasMore(false);
      }
    } finally {
      setLoading(false);
      isFetching.current = false;
    }
  }, [blockUntil, loading]);

  useEffect(() => {
    setAltImages({});
    fetchPopulares(1);
    currentPage.current = 1;
  }, [fetchPopulares]);

  useEffect(() => {
    if (!hasMore || loading) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          currentPage.current += 1;
          fetchPopulares(currentPage.current);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [fetchPopulares, hasMore, loading]);

  const handleCardClick = useCallback((mal_id) => {
    navigate(`/Detalhes/${mal_id}`);
  }, [navigate]);

  const animesFiltrados = useMemo(() => {
    if (!Array.isArray(animes) || animes.length === 0) {
      return [];
    }

    const unique = [];
    const seen = new Set();

    for (const anime of animes) {
      if (!seen.has(anime.title)) {
        seen.add(anime.title);
        unique.push(anime);
      }
    }

    return unique
      .filter(
        (anime) =>
          typeof anime.score === "number" &&
          anime.score >= 7.5 &&
          anime.members &&
          anime.members > 150000
      )
      .sort((a, b) => {
        if ((b.members || 0) !== (a.members || 0)) {
          return (b.members || 0) - (a.members || 0);
        }

        if ((b.score || 0) !== (a.score || 0)) {
          return (b.score || 0) - (a.score || 0);
        }

        return (b.year || 0) - (a.year || 0);
      });
  }, [animes]);

  const renderLoadingIndicator = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "48px 0",
      }}
    >
      <div
        style={{
          border: "8px solid #222",
          borderTop: "8px solid #ffb300",
          borderRadius: "50%",
          width: 48,
          height: 48,
          animation: "spin 1s linear infinite",
        }}
      />
      <span
        style={{
          color: "#ffb300",
          fontWeight: 700,
          fontSize: 18,
          marginTop: 10,
          letterSpacing: 1.1,
          textShadow: "0 2px 8px #0008",
        }}
      >
        Carregando animes populares...
      </span>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );

  const renderBlockMessage = () => (
    <div
      style={{
        color: "#ffb300",
        background: "#23272f",
        borderRadius: 10,
        padding: "18px 24px",
        margin: "48px auto",
        maxWidth: 420,
        textAlign: "center",
        fontWeight: 600,
      }}
    >
      Muitas requisições em sequência. Aguarde alguns segundos para tentar
      novamente.
    </div>
  );

  const renderAnimeCard = (anime) => {
    const imgSrc = altImages[anime.mal_id] || getHighQualityImage(anime);

    return (
      <div
        className="populares-card"
        key={anime.mal_id}
        tabIndex={0}
        role="button"
        onClick={() => handleCardClick(anime.mal_id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleCardClick(anime.mal_id);
          }
        }}
        aria-label={`Ver detalhes de ${anime.title}`}
      >
        <img
          src={imgSrc}
          alt={anime.title}
          className="populares-img"
          loading="lazy"
          onError={(e) => {
            e.target.src = "/fallback-image.jpg";
          }}
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
            onClick={(e) => e.stopPropagation()}
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    );
  };

  // --- Render ---
  return (
    <div className="page-fadein populares-container">
      <h1 className="populares-title">Mais Populares</h1>
      <p className="populares-desc">Os animes mais famosos de todos os tempos!</p>

      {blockUntil && Date.now() < blockUntil ? (
        renderBlockMessage()
      ) : loading && animes.length === 0 ? (
        renderLoadingIndicator()
      ) : (
        <div className="populares-grid">
          {animesFiltrados.map(renderAnimeCard)}
        </div>
      )}

      <div ref={loaderRef} style={{ height: 1 }} />

      {loading && animes.length > 0 && (
        <div
          className="populares-loading"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "24px 0",
          }}
        >
          <div
            style={{
              border: "8px solid #222",
              borderTop: "8px solid #ffb300",
              borderRadius: "50%",
              width: 48,
              height: 48,
              animation: "spin 1s linear infinite",
            }}
          />
          <span
            style={{
              color: "#ffb300",
              fontWeight: 700,
              fontSize: 18,
              marginTop: 10,
              letterSpacing: 1.1,
              textShadow: "0 2px 8px #0008",
            }}
          >
            Buscando mais animes populares...
          </span>
          <style>
            {`
              @keyframes spin {
                to {
                  transform: rotate(360deg);
                }
              }
            `}
          </style>
        </div>
      )}

      {isPending && <div className="pending-loader">Carregando...</div>}

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
