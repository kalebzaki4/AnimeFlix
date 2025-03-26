import React, { useState, useEffect, useRef } from 'react';
import Estrelas from '../Estrelas/Estrelas';
import { Link } from 'react-router-dom';
import './ListaDeAnimes.css';

const ListaDeAnimesHorizontal = ({ title, description, animes, loadMoreAnimes }) => {
  const [loading, setLoading] = useState(false);
  const sliderListRef = useRef(null);

  useEffect(() => {
    const handleScroll = async () => {
      if (sliderListRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderListRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10 && !loading) {
          setLoading(true);
          await loadMoreAnimes();
          setLoading(false);
        }
      }
    };

    const sliderList = sliderListRef.current;
    if (sliderList) {
      sliderList.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sliderList) {
        sliderList.removeEventListener('scroll', handleScroll);
      }
    };
  }, [loading, loadMoreAnimes]);

  return (
    <article className="container-inative">
      <section className="movie-list" aria-label={title}>
        <div className="title-wrapper">
          <h2 className="title-large">{title}</h2>
          <h6 className="descricao-famosos">{description}</h6>
        </div>
        <div className="slider-list" ref={sliderListRef}>
          <div className="slider-inner">
            {animes.map((anime) => (
              <Link to={`/Detalhes/${anime.mal_id}`} className="movie-card" key={anime.mal_id}>
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
        {loading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        )}
      </section>
    </article>
  );
};

export default ListaDeAnimesHorizontal;