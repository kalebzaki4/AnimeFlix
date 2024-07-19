import React, { useState, useEffect } from "react";
import "./Banner.css";
import play from "../../assets/images/play_circle.png";
import { Link } from "react-router-dom";
import data from "../../data"; // Importe a lista de dados

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePosterClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <article className="container">
        <section className="banner" aria-label="Animes Populares">
          <div className="banner-slider">
            {data.map((anime, index) => (
              <div
                key={anime.id}
                className={`slider-item ${index === activeIndex ? "active" : ""}`}
              >
                <img
                  src={anime.banner}
                  alt={anime.titulo}
                  className="img-cover"
                  loading="eager"
                />

                <div className="banner-content">
                  <h2 className="heading">{anime.titulo}</h2>

                  <div className="meta-list">
                    <div className="meta-item">{anime.ano}</div>
                    <div className="meta-item card-badge">{anime.avaliacao}</div>
                    <div className="meta-item">Episódios: {anime.episodios}</div>
                  </div>

                  <p className="genre">{anime.genero}</p>

                  <p className="banner-text">{anime.sinopse}</p>

                  <Link to={`/Detalhes/${anime.id}`} className="btn">
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
              {data.map((anime, index) => (
                <button
                  key={anime.id}
                  className={`poster-box slider-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={() => handlePosterClick(index)}
                >
                  <img
                    src={anime.imagem}
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
