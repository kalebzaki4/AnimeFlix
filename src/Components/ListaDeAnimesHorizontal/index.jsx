import React from 'react';
import Estrelas from './Estrelas';
import { Link } from 'react-router-dom';
import './ListaDeAnimes.css';

const ListaDeAnimesHorizontal = ({ title, description, animes }) => {
  return (
    <article className="container-inative">
      <section className="movie-list" aria-label={title}>
        <div className="title-wrapper">
          <h2 className="title-large">{title}</h2>
          <h6 className="descricao-famosos">{description}</h6>
        </div>
        <div className="slider-list">
          <div className="slider-inner">
            {animes.map((anime) => (
              <Link to={`/Detalhes/${anime.mal_id}`} className="movie-card">
                <figure className="poster-box card-banner">
                  <img src={anime.images.jpg.image_url} alt={anime.title} className="img-cover" />
                </figure>
                <h4 className="title">{anime.title}</h4>
                <div className="meta-list">
                  <div className="meta-item">
                    <Estrelas avaliacao={anime.score} />
                    <span className="span">{anime.score}</span>
                  </div>
                  <div className="card-badge">{anime.year}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default ListaDeAnimesHorizontal;