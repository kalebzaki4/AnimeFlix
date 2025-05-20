import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Banner.scss";
import play from "../../../assets/images/play_circle.png";

function getDailyIndexes(total, count) {
  // Gera índices diferentes por dia, mas sempre os mesmos para o mesmo dia
  const seed = Number(new Date().toISOString().slice(0, 10).replace(/-/g, ""));
  let arr = [];
  for (let i = 0; i < total; i++) arr.push(i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (seed + i * 31) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

export default function Banner({ animes }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Seleção dinâmica dos animes do banner (muda todo dia, mostra só 3)
  const dailyIndexes = getDailyIndexes(animes.length, Math.min(animes.length, 3));
  const dailyAnimes = dailyIndexes.map(idx => animes[idx]).filter(Boolean);

  useEffect(() => {
    setActiveIndex(0);
    if (dailyAnimes.length <= 1) return;
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === dailyAnimes.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(intervalId);
  }, [animes.length, dailyAnimes.length]);

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

  if (!dailyAnimes.length) {
    return null;
  }

  return (
    <article className="container">
      <section className="banner" aria-label="Animes Populares">
        <div className="banner-slider">
          {dailyAnimes.map((anime, index) => (
            <div
              key={anime.mal_id}
              className={`slider-item ${index === activeIndex ? "active" : ""}`}
            >
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="img-cover"
                loading="eager"
              />
              <div className="banner-content">{renderAnimeInfo(anime)}</div>
            </div>
          ))}
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
