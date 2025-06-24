import React, { useState, useEffect, useCallback, useRef } from "react";
import { apiGet } from "../../utils/api";
import "./AZ.scss";
import { Link, useNavigate } from "react-router-dom";
import Estrelas from "../../components/animes/Estrelas/Estrelas";
import { fetchMissingImages } from "../../utils/fetchUtils";

const LIMIT = 18;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getHighQualityImage = (anime) =>
  anime.images?.jpg?.large_image_url ||
  anime.images?.jpg?.image_url ||
  "/fallback-image.jpg";

export default function AZ() {
  const [animes, setAnimes] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [altImages, setAltImages] = useState({});
  const [error, setError] = useState(null);
  const isFetching = useRef(false);
  const loaderRef = useRef(null);
  const navigate = useNavigate();
  const currentPage = useRef(1);

  const fetchAZ = useCallback(
    async (pageNum = 1, letter = selectedLetter, isFirst = false) => {
      if (isFetching.current || loading || !letter) return;
      isFetching.current = true;
      if (isFirst) setInitialLoading(true);
      setLoading(true);
      setError(null);
      try {
        const response = await apiGet("https://api.jikan.moe/v4/anime", {
          q: letter,
          order_by: "popularity",
          sort: "desc",
          limit: LIMIT,
          page: pageNum,
        });
        let data = response.data.data || [];
        data = data
          .filter((anime) => anime.title?.toUpperCase().startsWith(letter))
          .sort((a, b) => (b.score || 0) - (a.score || 0));
        setAnimes((prev) => (pageNum === 1 ? data : [...prev, ...data]));
        setHasMore(response.data.pagination?.has_next_page && data.length > 0);

        const altImgs = await fetchMissingImages(data);
        if (Object.keys(altImgs).length > 0) {
          setAltImages((prev) => ({ ...prev, ...altImgs }));
        }
      } catch (err) {
        setHasMore(false);
        let msg = "Erro ao buscar animes. Tente novamente mais tarde.";
        if (err?.code === "ECONNABORTED") msg = "A conexão com a API demorou demais. Tente novamente.";
        else if (err?.response?.status === 429) msg = "Muitas requisições para a API. Aguarde alguns segundos.";
        else if (err?.response?.status === 404) msg = "Nenhum anime encontrado para essa letra.";
        setError(msg);
      } finally {
        setLoading(false);
        setInitialLoading(false);
        isFetching.current = false;
      }
    },
    [selectedLetter, loading]
  );

  useEffect(() => {
    setAnimes([]);
    setHasMore(true);
    setAltImages({});
    currentPage.current = 1;
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchAZ(1, selectedLetter, true);
  }, [selectedLetter, fetchAZ]);

  useEffect(() => {
    if (!hasMore || loading || initialLoading) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading && !initialLoading) {
          currentPage.current += 1;
          fetchAZ(currentPage.current, selectedLetter);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading, fetchAZ, selectedLetter, initialLoading]);

  const handleCardClick = useCallback(
    (mal_id) => {
      navigate(`/Detalhes/${mal_id}`);
    },
    [navigate]
  );

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
          Carregando animes...
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
    <div className="page-fadein az-container">
      <h1 className="az-title">Encontre animes de A a Z</h1>
      <div className="az-alphabet" role="tablist" aria-label="Filtro por letra">
        {ALPHABET.map((letter) => (
          <button
            key={letter}
            className={`az-letter${selectedLetter === letter ? " selected" : ""}`}
            onClick={() => setSelectedLetter(letter)}
            disabled={selectedLetter === letter}
            aria-label={`Filtrar por ${letter}`}
            tabIndex={0}
            role="tab"
            aria-selected={selectedLetter === letter}
            aria-live={selectedLetter === letter ? "polite" : undefined}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="az-results-count">
        {initialLoading
          ? null
          : animes.length > 0
          ? `Encontramos ${animes.length} anime${animes.length > 1 ? "s" : ""} com a letra "${selectedLetter}".`
          : null}
      </div>
      {error && (
        <div className="az-error" style={{ color: "#ff5252", margin: "24px 0", fontWeight: 600 }}>
          {error}
        </div>
      )}
      {initialLoading ? (
        <div className="az-initial-loading">
          <div className="az-spinner"></div>
          <span style={{ marginLeft: 16, color: "var(--cor-texto)" }}>Buscando animes incríveis para você...</span>
        </div>
      ) : (
        <>
          <div className="az-grid">
            {animes.map((anime) => {
              const imgSrc = altImages[anime.mal_id] || getHighQualityImage(anime);
              return (
                <div
                  className="az-card"
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
                    className="az-img"
                    loading="lazy"
                    onError={e => { e.target.src = "/fallback-image.jpg"; }}
                  />
                  <div className="az-info">
                    <h3 className="az-anime-title">{anime.title}</h3>
                    <div className="az-meta">
                      <Estrelas avaliacao={Number(anime.score) || 0} />
                      <span className="az-score">{anime.score ?? "N/A"}</span>
                      <span className="az-year">{anime.year ?? "?"}</span>
                    </div>
                    <p className="az-synopsis">
                      {anime.synopsis
                        ? anime.synopsis.slice(0, 80) + "..."
                        : "Sem sinopse disponível para este anime."}
                    </p>
                    <Link
                      to={`/Detalhes/${anime.mal_id}`}
                      className="az-btn"
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
            <div className="az-loading">Carregando mais animes para você...</div>
          )}
          {!loading && animes.length === 0 && (
            <div className="az-empty">
              <p>
                Ops! Não encontramos nenhum anime que comece com &quot;{selectedLetter}&quot;.
              </p>
              <p style={{ fontSize: "1rem", color: "var(--cor-texto)" }}>
                Tente outra letra ou confira se você digitou corretamente.
              </p>
            </div>
          )}
          {!hasMore && animes.length > 0 && (
            <div className="az-end-message">
              Você chegou ao fim dos resultados para &quot;{selectedLetter}&quot;. <br />
              <span role="img" aria-label="confete">🎉</span> Que tal explorar outra letra?
            </div>
          )}
        </>
      )}
    </div>
  );
}
