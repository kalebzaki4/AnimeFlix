import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Estrelas from '../Estrelas/Estrelas';
import { Link } from 'react-router-dom';
import './ListaDeAnimes.scss';

const ListaDeAnimesHorizontal = ({ title, description, animes, loadMoreAnimes }) => {
  const [loading, setLoading] = useState(false);
  const sliderListRef = useRef(null);

  const uniqueAnimes = animes.filter(
    (anime, index, self) => self.findIndex(a => a.mal_id === anime.mal_id) === index
  );

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
            {uniqueAnimes.map((anime, index) => (
              <Link
                to={`/Detalhes/${anime.mal_id}`}
                className="movie-card"
                key={`${anime.mal_id}-${index}`}
              >
                <figure className="poster-box card-banner">
                  <img
                    src={anime.images?.jpg?.image_url || "/fallback-image.jpg"}
                    alt={anime.title || "Anime sem título"}
                    className="img-cover"
                    onError={(e) => (e.target.src = "/fallback-image.jpg")}
                  />
                </figure>
                <h4 className="title">{anime.title}</h4>
                <div className="meta-list">
                  <div className="meta-item">
                    <Estrelas avaliacao={Number(anime.score) || 0} />
                    <span className="span">{anime.score ?? "N/A"}</span>
                  </div>
                  <div className="card-badge">{anime.year ?? "Desconhecido"}</div>
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

ListaDeAnimesHorizontal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animes: PropTypes.arrayOf(
    PropTypes.shape({
      mal_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.shape({
        jpg: PropTypes.shape({
          image_url: PropTypes.string,
        }),
      }),
      score: PropTypes.number,
      year: PropTypes.number,
    })
  ).isRequired,
  loadMoreAnimes: PropTypes.func.isRequired,
};

export default ListaDeAnimesHorizontal;