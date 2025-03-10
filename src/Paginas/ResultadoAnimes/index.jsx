import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Fuse from 'fuse.js';
import Estrelas from '../../assets/images/star.png';
import './ListaAnimesVertical.css';
import './Spinner.css';

// Usar a variável de ambiente do Vite corretamente
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log("API Base URL:", API_BASE_URL); // Debug para verificar a URL da API

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Função debounce para evitar requisições excessivas
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function ResultadoAnimes() {
  const query = useQuery();
  const searchTerm = query.get('q') || '';
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setAnimes([]);
      setLoading(false);
      setSearchPerformed(true);
      return;
    }

    setLoading(true);
    setSearchPerformed(false);

    const fetchAnimes = debounce(async () => {
      try {
        console.log(`Buscando animes para: ${searchTerm}`);
        const response = await axios.get(`${API_BASE_URL}/anime?q=${searchTerm}&limit=10`);
        console.log('Resposta da API:', response.data);

        if (response.data?.data) {
          setAnimes(response.data.data);
        } else {
          setAnimes([]);
        }

        setLoading(false);
        setSearchPerformed(true);
      } catch (err) {
        console.error("Erro ao buscar animes:", err);
        setError("Erro ao carregar animes. Tente novamente mais tarde.");
        setAnimes([]);
        setLoading(false);
        setSearchPerformed(true);
      }
    }, 500);

    fetchAnimes();
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

  // Configuração da pesquisa otimizada com Fuse.js
  const fuse = new Fuse(animes, {
    keys: ['title'],
    threshold: 0.3,
  });

  const filteredData = searchTerm ? fuse.search(searchTerm).map(result => result.item) : animes;

  if (searchPerformed && !filteredData.length) {
    return <p>Nenhum anime encontrado.</p>;
  }

  return (
    <article className="container-inative-2">
      <section className="movie-list" aria-label="Lista de animes">
        <div className="title-wrapper">
          <h2 className="title-large">Resultados da Pesquisa</h2>
        </div>
        <div className="grid-list">
          {filteredData.map((anime) => (
            <div className="movie-card" key={anime.mal_id}>
              <figure className="poster-box card-banner">
                <img 
                  src={anime.images?.jpg?.image_url || 'fallback-image-url.jpg'} 
                  alt={anime.title} 
                  className="img-cover" 
                  onError={(e) => (e.target.src = 'fallback-image-url.jpg')} 
                />
              </figure>
              <h4 className="title">{anime.title}</h4>
              <div className="meta-list">
                <div className="meta-item">
                  <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliação" />
                  <span className="span">{anime.score ?? "N/A"}</span>
                </div>
                <div className="card-badge">{anime.year ?? "Desconhecido"}</div>
              </div>
              <Link to={`/Detalhes/${anime.mal_id}`} className="card-btn" title="Ver detalhes">
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
