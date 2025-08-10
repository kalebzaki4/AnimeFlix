import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarImg from '../../../assets/images/star.png';
import './ListaDeAnimes.scss';

const ListaDeAnimesHorizontal = ({ title, description, animes, loadMoreAnimes, getAnimeImage }) => {
  const sliderListRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const uniqueAnimes = animes.filter(
    (anime, index, self) => self.findIndex(a => a.mal_id === anime.mal_id) === index
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Botões de rolagem
  const updateScrollButtons = () => {
    const slider = sliderListRef.current;
    if (!slider) return;
    setCanScrollLeft(slider.scrollLeft > 0);
    setCanScrollRight(slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 1);
  };

  useEffect(() => {
    updateScrollButtons();
    const slider = sliderListRef.current;
    if (slider) slider.addEventListener('scroll', updateScrollButtons);
    return () => slider?.removeEventListener('scroll', updateScrollButtons);
  }, [animes.length]);

  const scrollByAmount = (amount) => {
    sliderListRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
  };

  // Infinite scroll horizontal
  useEffect(() => {
    let loading = false;
    let hasMore = true;
    const handleScroll = async () => {
      if (!sliderListRef.current || loading || !hasMore) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderListRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 50) {
        loading = true;
        const start = Date.now();
        const result = await loadMoreAnimes?.();
        const elapsed = Date.now() - start;
        if (elapsed < 400) await new Promise(r => setTimeout(r, 400 - elapsed));
        if (result === false) hasMore = false;
        loading = false;
      }
    };
    const slider = sliderListRef.current;
    slider?.addEventListener('scroll', handleScroll);
    return () => slider?.removeEventListener('scroll', handleScroll);
  }, [loadMoreAnimes, animes.length]);

  // Função para renderizar estrelas diretamente aqui
  const renderEstrelas = (avaliacao) => {
    const estrelas = [];
    const maxEstrelas = 5;
    const avaliacaoConvertida = (avaliacao || 0) / 2;
    const inteiras = Math.floor(avaliacaoConvertida);
    const fracionadas = avaliacaoConvertida - inteiras;

    for (let i = 0; i < inteiras && i < maxEstrelas; i++) {
      estrelas.push(<img key={i} src={StarImg} alt="Estrela" className="estrela" />);
    }

    if (fracionadas >= 0.5 && inteiras < maxEstrelas) {
      estrelas.push(<img key="fracionada" src={StarImg} alt="Estrela Fracionada" className="estrela fracionada" />);
    }

    for (let i = estrelas.length; i < maxEstrelas; i++) {
      estrelas.push(<img key={`empty-${i}`} src={StarImg} alt="Estrela Vazia" className="estrela empty" />);
    }

    return estrelas;
  };

  return (
    <article className="anime-list-container">
      <section className="movie-list" aria-label={title}>
        <header className="title-wrapper">
          <div className="title-group">
            <h2 className="title-large">{title}</h2>
            <h6 className="descricao-famosos">{description}</h6>
          </div>
        </header>

        {!isMobile && canScrollLeft && (
          <button className="scroll-btn left" aria-label="Ver anteriores" onClick={() => scrollByAmount(-300)}>‹</button>
        )}

        <div className={`slider-list ${isMobile ? 'mobile' : ''}`} ref={sliderListRef}>
          <div className="slider-inner">
            {uniqueAnimes.map((anime, index) => (
              <Link
                to={`/Detalhes/${anime.mal_id}`}
                className="movie-card"
                key={`${anime.mal_id}-${index}`}
              >
                <figure className="poster-box card-banner">
                  <img
                    src={
                      getAnimeImage
                        ? getAnimeImage(anime)
                        : anime.images?.jpg?.image_url || "/fallback-image.jpg"
                    }
                    alt={anime.title || "Anime sem título"}
                    className="img-cover"
                    loading="lazy"
                    onError={(e) => (e.target.src = "/fallback-image.jpg")}
                  />
                </figure>
                <h4 className="title">{anime.title}</h4>
                <div className="meta-list">
                  <div className="meta-item">
                    <div className="estrelas">{renderEstrelas(Number(anime.score))}</div>
                    <span className="span">{anime.score ?? "N/A"}</span>
                  </div>
                  <div className="card-badge">{anime.year ?? "Desconhecido"}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {!isMobile && canScrollRight && (
          <button className="scroll-btn right" aria-label="Ver próximos" onClick={() => scrollByAmount(300)}>›</button>
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
  loadMoreAnimes: PropTypes.func,
  getAnimeImage: PropTypes.func,
};

export default ListaDeAnimesHorizontal;
