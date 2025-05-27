import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Estrelas from '../Estrelas/Estrelas';
import { Link } from 'react-router-dom';
import './ListaDeAnimes.scss';

const ListaDeAnimesHorizontal = ({ title, description, animes, loadMoreAnimes }) => {
  const sliderListRef = useRef(null);

  const uniqueAnimes = animes.filter(
    (anime, index, self) => self.findIndex(a => a.mal_id === anime.mal_id) === index
  );

  // Responsividade: detecta mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Infinite scroll horizontal: carrega mais ao chegar no fim do slider
  useEffect(() => {
    let loading = false;
    let hasMore = true;

    const handleScroll = async () => {
      if (!sliderListRef.current || loading || !hasMore) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderListRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        loading = true;
        const start = Date.now();
        const result = await loadMoreAnimes?.();
        const elapsed = Date.now() - start;
        if (elapsed < 500) await new Promise(r => setTimeout(r, 500 - elapsed));
        if (result === false) hasMore = false;
        loading = false;
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
  }, [loadMoreAnimes, animes.length]);

  return (
    <article className="container-inative">
      <section className="movie-list" aria-label={title}>
        <div
          className="title-wrapper"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 4 : 16,
            marginBottom: isMobile ? 10 : 0,
            width: "100%",
          }}
        >
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 2 : 10,
            flex: 1,
            width: "100%",
          }}>
            <h2 className="title-large" style={{
              fontSize: isMobile ? 22 : undefined,
              marginBottom: isMobile ? 2 : 0,
              lineHeight: 1.1
            }}>{title}</h2>
            <h6 className="descricao-famosos" style={{
              fontSize: isMobile ? 13 : undefined,
              marginTop: isMobile ? 2 : 12,
              marginLeft: isMobile ? 0 : 8,
              color: "#bbb",
              fontWeight: 400
            }}>{description}</h6>
          </div>
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
  loadMoreAnimes: PropTypes.func,
};

export default ListaDeAnimesHorizontal;