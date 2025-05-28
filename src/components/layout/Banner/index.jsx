import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Banner.scss";
import play from "../../../assets/images/play_circle.png";

export default function Banner({ animes, loadMoreAnimes, hasMore }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  const dailyAnimes = useMemo(() => {
    if (!Array.isArray(animes) || animes.length === 0) return [];
    const unique = [];
    const seen = new Set();
    for (const a of animes) {
      if (!seen.has(a.title)) {
        seen.add(a.title);
        unique.push(a);
      }
    }
    const ordered = unique
      .filter(a =>
        (typeof a.score === "number" && a.score >= 8.1) ||
        (a.members && a.members > 250000)
      )
      .sort((a, b) => {
        if ((b.score || 0) !== (a.score || 0)) return (b.score || 0) - (a.score || 0);
        if ((b.members || 0) !== (a.members || 0)) return (b.members || 0) - (a.members || 0);
        return (b.year || 0) - (a.year || 0);
      });
    const genresSeen = new Set();
    const diverse = [];
    for (const anime of ordered) {
      const mainGenre = anime.genres?.[0]?.name || "";
      if (!genresSeen.has(mainGenre) || diverse.length < 6) {
        genresSeen.add(mainGenre);
        diverse.push(anime);
      }
      if (diverse.length >= 10) break;
    }
    while (diverse.length < 10 && ordered[diverse.length]) {
      diverse.push(ordered[diverse.length]);
    }
    return diverse;
  }, [animes]);

  useEffect(() => {
    setActiveIndex(0);
    if (dailyAnimes.length <= 1) return;
    const intervalId = setInterval(() => {
      setActiveIndex((prev) =>
        prev === dailyAnimes.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(intervalId);
  }, [dailyAnimes.length]);

  const renderWindow = 2;
  const visibleIndexes = [];
  for (let i = -renderWindow; i <= renderWindow; i++) {
    const idx = activeIndex + i;
    if (idx >= 0 && idx < dailyAnimes.length) visibleIndexes.push(idx);
  }

  const renderAnimeInfo = (anime) => (
    <>
      <h2 className="heading">{anime.title}</h2>
      <div className="meta-list">
        <div className="meta-item">{anime.year}</div>
        <div className="meta-item card-badge">{anime.score}</div>
        <div className="meta-item">Episódios: {anime.episodes || "N/A"}</div>
      </div>
      <p className="genre">
        {anime.genres.map((genre) => genre.name).join(", ")}
      </p>
      <p className="banner-text">{anime.synopsis}</p>
      <Link 
        to={`/Detalhes/${anime.mal_id}`} 
        className="btn" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src={play}
          alt="Botão de Play"
          width={24}
          height={24}
          aria-hidden="true"
        />
        <span className="span">Assistir</span>
      </Link>
    </>
  );

  if (!dailyAnimes.length) return null;

  const handleLoadMore = async () => {
    if (!loadMoreAnimes) return;
    setLoadingMore(true);
    await loadMoreAnimes();
    setLoadingMore(false);
  };

  return (
    <article className="container">
      <section className="banner" aria-label="Animes Populares">
        <div className="banner-slider">
          {dailyAnimes.map((anime, index) =>
            visibleIndexes.includes(index) ? (
              <div
                key={anime.mal_id}
                className={`slider-item ${index === activeIndex ? "active" : ""}`}
                style={{ display: "block" }}
              >
                <img
                  src={anime.images.jpg.large_image_url}
                  alt={anime.title}
                  className="img-cover"
                  loading={index === activeIndex ? "eager" : "lazy"}
                />
                <div className="banner-content">{renderAnimeInfo(anime)}</div>
              </div>
            ) : (
              <div
                key={anime.mal_id}
                style={{ display: "none" }}
                aria-hidden="true"
              />
            )
          )}
        </div>
        <div className="slider-control">
          <div className="control-inner">
            {dailyAnimes.map((anime, index) => (
              <button
                key={anime.mal_id}
                className={`poster-box slider-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Exibir detalhes do anime ${anime.title}`}
              >
                <img
                  src={anime.images.jpg.image_url}
                  alt={`Poster de ${anime.title}`}
                  loading="lazy"
                  draggable="false"
                  className="img-cover"
                />
              </button>
            ))}
          </div>
        </div>
        {hasMore && loadMoreAnimes && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
            <button
              className="btn"
              style={{
                background: "#ffb300",
                color: "#181818",
                border: "none",
                borderRadius: 16,
                padding: "8px 28px",
                fontWeight: "bold",
                fontSize: 18,
                cursor: loadingMore ? "wait" : "pointer",
                opacity: loadingMore ? 0.7 : 1,
                boxShadow: "0 2px 8px #0002",
                transition: "background 0.2s"
              }}
              onClick={handleLoadMore}
              disabled={loadingMore}
              aria-busy={loadingMore}
            >
              {loadingMore ? "Carregando..." : "Carregar mais"}
            </button>
          </div>
        )}
      </section>
    </article>
  );
}

Banner.propTypes = {
  animes: PropTypes.arrayOf(
    PropTypes.shape({
      mal_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.number,
      score: PropTypes.number,
      episodes: PropTypes.number,
      synopsis: PropTypes.string,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
      images: PropTypes.shape({
        jpg: PropTypes.shape({
          large_image_url: PropTypes.string.isRequired,
          image_url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
  loadMoreAnimes: PropTypes.func,
  hasMore: PropTypes.bool,
};
