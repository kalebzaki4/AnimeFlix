// src/Components/Banner/index.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import play from "../../assets/images/play_circle.png";

export default function Banner({ animes }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePosterClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === animes.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, [animes.length]);

  return (
    <>
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
                <div className="banner-content">
                  <h2 className="heading">{anime.title}</h2>
                  <div className="meta-list">
                    <div className="meta-item">{anime.year}</div>
                    <div className="meta-item card-badge">{anime.score}</div>
                    <div className="meta-item">Episódios: {anime.episodes || "N/A"}</div>
                  </div>
                  <p className="genre">{anime.genres.map(genre => genre.name).join(", ")}</p>
                  <p className="banner-text">{anime.synopsis}</p>
                  <Link to={`/Detalhes/${anime.mal_id}`} className="btn">
                    <img
                      src={play}
                      alt="Botão de Play"
                      width={24}
                      height={24}
                      aria-hidden="true"
                    />
                    <span className="span">Assistir</span>
                  </Link>
                </div>
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
                >
                  <img
                    src={anime.images.jpg.image_url}
                    alt=""
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
    </>
  );
}
