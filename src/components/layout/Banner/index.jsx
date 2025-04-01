import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Banner.scss";
import play from "../../../assets/images/play_circle.png";

export default function Banner({ animes }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Função para alternar entre os animes e rolar para o topo
  const handlePosterClick = (index) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveIndex(index);
  };

  // UseEffect para gerenciar o intervalo de mudança de anime
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === animes.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // 7 segundos de intervalo

    return () => {
      clearInterval(intervalId);
    };
  }, [animes.length]);

  // Função para renderizar informações de anime
  const renderAnimeInfo = (anime) => {
    return (
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
  };

  return (
    <article className="container">
      <section className="banner" aria-label="Animes Populares">
        <div className="banner-slider">
          {animes.map((anime, index) => (
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
            {animes.map((anime, index) => (
              <button
                key={anime.mal_id}
                className={`poster-box slider-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => handlePosterClick(index)}
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
