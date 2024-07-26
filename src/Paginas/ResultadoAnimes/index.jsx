import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Estrelas from '../../assets/images/star.png';
import './ListaAnimesVertical.css';
import data from "../../data"; 

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ResultadoAnimes() {
    const query = useQuery();
    const searchTerm = query.get('q');

    const filteredData = data.filter(anime =>
        anime.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <article className="container-inative-2">
                <section className="movie-list" aria-label="upcoming movie">
                    <div className="title-wrapper">
                        <h2 className="title-large">Resultados da Pesquisa</h2>
                    </div>
                    <div className="grid-list">
                        {filteredData.map((anime) => (
                            <div className="movie-card" key={anime.id}>
                                <figure className="poster-box card-banner">
                                    <img src={anime.imagem} alt={anime.titulo} className="img-cover" />
                                </figure>
                                <h4 className="title">{anime.titulo}</h4>
                                <div className="meta-list">
                                    <div className="meta-item">
                                        <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliacao" />
                                        <span className="span">{anime.avalicao}</span>
                                    </div>
                                    <div className="card-badge">{anime.ano}</div>
                                </div>
                                <Link to={`/Detalhes/${anime.id}`} className="card-btn" title="Detalhes"></Link>
                            </div>
                        ))}
                    </div>

                    <button className="btn load-more">Ver Mais</button>
                </section>
            </article>
        </>
    );
}

export default ResultadoAnimes;
