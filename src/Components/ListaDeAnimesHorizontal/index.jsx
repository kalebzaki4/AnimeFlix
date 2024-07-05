import React from 'react';
import Estrelas from './Estrelas';
import { Link } from 'react-router-dom';
import './ListaDeAnimes.css'; 
import data from '../../data';

const ListaDeAnimesHorizontal = () => {
  return (
    <article className="container-inative">
      <section className="movie-list" aria-label="upcoming movie">
        <div className="title-wrapper">
          <h2 className="title-large">Mais Famosos</h2>
          <h6 className="descricao-famosos">Fique por dentro de todos os lançamentos</h6>
        </div>
        <div className="slider-list">
          <div className="slider-inner">
            {data.map((anime) => (
              <div className="movie-card" key={anime.id}>
                <figure className="poster-box card-banner">
                  <img src={anime.imagem} alt={anime.titulo} className="img-cover" />
                </figure>
                <h4 className="title">{anime.titulo}</h4>
                <div className="meta-list">
                  <div className="meta-item">
                    <Estrelas avaliacao={anime.avaliacao} />
                    <span className="span">{anime.avaliacao}</span>
                  </div>
                  <div className="card-badge">{anime.ano}</div>
                </div>
                <Link to={`/Detalhes/${anime.id}`} className="card-btn" title="Detalhes"></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default ListaDeAnimesHorizontal;
