// src/Pages/PaginaDetalhes/index.js
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Avaliacao from "../../assets/images/star.png";
import "./PaginaDetalhes.css";
import Animes from "../../Components/ListaDeAnimesHorizontal/index";
import Erro404 from '../../Components/Erro404';

const PaginaDetalhes = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const topRef = useRef(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime details:", error);
        setLoading(false);
      }
    };

    fetchAnimeDetails();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Pode substituir por um componente de carregamento
  }

  if (!anime) {
    return <Erro404 />;
  }

  const animeBackgroundStyle = {
    backgroundImage: `url(${anime.images.jpg.large_image_url || ''})`,
  };

  return (
    <>
      <article className="container-inative-3" ref={topRef}>
        <div className="movie-detail">
          <figure className="poster-box movie-poster">
            <div className="anime-background" style={animeBackgroundStyle}></div>
            <img src={anime.images.jpg.large_image_url} alt={`Detalhes de ${anime.title}`} className="img-cover" />
          </figure>
          <div className="detail-box">
            <div className="detail-content">
              <h1 className="heading">{anime.title}</h1>
              <div className="meta-list">
                <div className="meta-item">
                  <img src={Avaliacao} alt="avaliação do anime" width={20} height={20} />
                  <span className="span">{anime.score}</span>
                </div>
                <div className="separator"></div>
                <div className="meta-item">{anime.episodes || 'N/A'}</div>
                <div className="separator"></div>
                <div className="meta-item">{anime.year || 'N/A'}</div>
                <div className="meta-item card-badge">{anime.rating || 'N/A'}</div>
              </div>
              <p className="genre">{anime.genres.map(genre => genre.name).join(', ')}</p>
              <p className="overview">{anime.synopsis}</p>
            </div>
            <div className="tilte-wrapper">
              <h3 className="title-large">Todos as imagens:</h3>
            </div>
            <div className="slider-list">
              <div className="slider-inner">
                {/* Substitua com as imagens reais se disponíveis */}
                <div className="video-card"></div>
                <div className="video-card"></div>
                <div className="video-card"></div>
              </div>
            </div>
            <div className="slider-list">
              <div className="slider-inner2">
                <Animes />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PaginaDetalhes;
