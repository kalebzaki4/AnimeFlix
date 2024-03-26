import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avaliacao from "../../assets/images/star.png";
import "./PaginaDetalhes.css";
import Animes from "../../Components/ListaDeAnimesHorizontal/index"
import Erro404 from '../../Components/Erro404';



const PaginaDetalhes = () => {

  const { id } = useParams();
  const anime = data.find((item) => item.id === parseInt(id));

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (!anime) {
    return <Erro404/>;
  }

  const animeBackgroundStyle = {
    backgroundImage: `url(${anime.banner})`,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <article className="container-inative-3">
        <div className="movie-detail">
          <figure className="poster-box movie-poster">
            <div className="anime-background" style={animeBackgroundStyle}></div>
            <img src={anime.imagem} alt={`Detalhes de ${anime.titulo}`} className="img-cover" />
          </figure>
          <div className="detail-box">
            <div className="detail-content">
              <h1 className="heading">{anime.titulo}</h1>
              <div className="meta-list">
                <div className="meta-item">
                  <img src={Avaliacao} alt="avaliação do anime" width={20} height={20} />
                  <span className="span">{anime.avalicao}</span>
                </div>
                <div className="separator"></div>
                <div className="meta-item">{anime.episodios}</div>
                <div className="separator"></div>
                <div className="meta-item">{anime.ano}</div>
                <div className="meta-item card-badge">PG-13</div>
              </div>
              <p className="genre">{anime.genero}</p>
              <p className="overview">{anime.sinopse}</p>
            </div>
            <div className="tilte-wrapper">
              <h3 className="title-large">Todos as imagens:</h3>
            </div>
            <div className="slider-list">
              <div className="slider-inner">
                <div className="video-card"></div>
                <div className="video-card"></div>
                <div className="video-card"></div>
              </div>
            </div>
            <div className="slider-list">
              <div className="slider-inner2">
                <Animes/>
              </div>
            </div>
          </div>
        </div>
      </article>

    </>
  );
}

export default PaginaDetalhes;