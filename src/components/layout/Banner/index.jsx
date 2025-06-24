import React, { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Banner.scss";
import play from "../../../assets/images/play_circle.png";

// Utilitário global para imagens seguras e de alta qualidade
function getSafeImage(anime, type = "large") {
  if (!anime?.images?.jpg) return "/fallback-image.jpg";
  if (type === "large") {
    return anime.images.jpg.large_image_url || anime.images.jpg.image_url || "/fallback-image.jpg";
  }
  return anime.images.jpg.image_url || anime.images.jpg.large_image_url || "/fallback-image.jpg";
}

export default function Banner({ animes }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right"); // "right" ou "left"

  // Embaralha apenas uma vez por reload, mantendo estável até recarregar a página
  const [shuffled, setShuffled] = useState([]);

  useEffect(() => {
    if (!Array.isArray(animes) || animes.length === 0) {
      setShuffled([]);
      return;
    }
    // Fisher-Yates shuffle
    const arr = [...animes];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    const unique = [];
    const seen = new Set();
    for (const a of arr) {
      if (!seen.has(a.title)) {
        seen.add(a.title);
        unique.push(a);
      }
    }
    setShuffled(unique);
  }, [animes]);

  const dailyAnimes = shuffled;

  useEffect(() => {
    setActiveIndex(0);
    if (dailyAnimes.length <= 1) return;
    const intervalId = setInterval(() => {
      setSlideDirection("right");
      setActiveIndex(prev => (prev === dailyAnimes.length - 1 ? 0 : prev + 1));
    }, 7000); // 7 segundos
    return () => clearInterval(intervalId);
  }, [dailyAnimes.length]);

  // Handler para clique nos controles do carrossel
  const handleControlClick = useCallback((index) => {
    if (index === activeIndex) return;
    setSlideDirection(index < activeIndex ? "left" : "right");
    setActiveIndex(index);
  }, [activeIndex]);

  // Renderiza apenas os banners próximos para performance
  const renderWindow = 2;
  const visibleIndexes = useMemo(() => {
    const arr = [];
    for (let i = -renderWindow; i <= renderWindow; i++) {
      const idx = activeIndex + i;
      if (idx >= 0 && idx < dailyAnimes.length) arr.push(idx);
    }
    return arr;
  }, [activeIndex, dailyAnimes.length]);

  // Renderização das informações do anime
  const renderAnimeInfo = useCallback((anime) => (
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
  ), []);

  if (!dailyAnimes.length) return null;

  return (
    <article className="container">
      <section className="banner" aria-label="Animes Populares">
        <div className="banner-slider">
          {dailyAnimes.map((anime, index) =>
            visibleIndexes.includes(index) ? (
              <div
                key={anime.mal_id}
                className={`slider-item ${index === activeIndex ? "active" : ""} slide-${index === activeIndex ? slideDirection : ""}`}
                style={{ display: "block" }}
              >
                <img
                  src={getSafeImage(anime, "large")}
                  alt={anime.title}
                  className="img-cover"
                  loading={index === activeIndex ? "eager" : "lazy"}
                  onError={e => { e.target.src = "/fallback-image.jpg"; }}
                  decoding="async"
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
                onClick={() => handleControlClick(index)}
                aria-label={`Exibir detalhes do anime ${anime.title}`}
                tabIndex={0}
              >
                <img
                  src={getSafeImage(anime, "thumb")}
                  alt={`Poster de ${anime.title}`}
                  loading="lazy"
                  draggable="false"
                  className="img-cover"
                  onError={e => { e.target.src = "/fallback-image.jpg"; }}
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>
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
};
