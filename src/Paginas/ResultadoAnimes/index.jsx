import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Fuse from 'fuse.js';
import Estrelas from '../../assets/images/star.png';
import './ListaAnimesVertical.css';
import './Spinner.css'; // Adicione um arquivo CSS para o spinner

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResultadoAnimes() {
  const query = useQuery();
  const searchTerm = query.get('q') || '';
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        console.log(`Fetching animes with search term: ${searchTerm}`);
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchTerm}&limit=10`);
        console.log('Response data:', response.data);
        if (response.data && response.data.data) {
          setAnimes(response.data.data);
        } else {
          setAnimes([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime data:", error);
        setError("Erro ao buscar dados dos animes. Por favor, tente novamente mais tarde.");
        setAnimes([]);
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchAnimes();
    } else {
      setAnimes([]);
      setLoading(false);
    }
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  const fuse = new Fuse(animes, {
    keys: ['title'],
    threshold: 0.3, // Ajuste a sensibilidade da busca aproximada
  });

  const filteredData = searchTerm ? fuse.search(searchTerm).map(result => result.item) : animes;

  if (!filteredData.length) {
    return <p>Nenhum anime encontrado.</p>;
  }

  return (
    <article className="container-inative-2">
      <section className="movie-list" aria-label="upcoming movie">
        <div className="title-wrapper">
          <h2 className="title-large">Resultados da Pesquisa</h2>
        </div>
        <div className="grid-list">
          {filteredData.map((anime) => (
            <div className="movie-card" key={anime.mal_id}>
              <figure className="poster-box card-banner">
                <img src={anime.images.jpg.image_url} alt={anime.title} className="img-cover" />
              </figure>
              <h4 className="title">{anime.title}</h4>
              <div className="meta-list">
                <div className="meta-item">
                  <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliação" />
                  <span className="span">{anime.score}</span>
                </div>
                <div className="card-badge">{anime.year}</div>
              </div>
              <Link to={`/Detalhes/${anime.mal_id}`} className="card-btn" title="Detalhes">
                Detalhes
              </Link>
            </div>
          ))}
        </div>
        <button className="btn load-more">Ver Mais</button>
      </section>
    </article>
  );
}

export default ResultadoAnimes;