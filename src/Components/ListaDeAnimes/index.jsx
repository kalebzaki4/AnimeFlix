import AnimeTemporario from "../../assets/images/slider-control.jpg"
import Estrelas from "../../assets/images/star.png"
import "./ListaDeAnimes.css"
import "../Banner/Banner.css"

export default function Animes() {
    return (

        <article className="container-inative">
            <section className="movie-list" aria-label="upcoming movie">

                <div className="title-wrapper">
                    <h2 className="title-large">Novos Animes</h2>
                </div>

                <div className="slider-list">
                    <div className="slider-inner">

                        <div className="movie-card">
                            <figure className="poster-box card-banner">
                                <img src={AnimeTemporario} alt="Animes recentes" className="img-cover" />
                            </figure>

                            <h4 className="title">
                                Teste, mas o titulo fica aqui
                            </h4>

                            <div className="meta-list">
                                <div className="meta-item">
                                    <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliacao" />

                                    <span className="span">
                                        8.4
                                    </span>
                                </div>

                                <div className="card-badge">2022</div>
                            </div>

                            <a href="/detalhes.html" className="card-btn" title="Teste, mas o titulo tbm fica aq"></a>

                        </div>

                        <div className="movie-card">
                            <figure className="poster-box card-banner">
                                <img src={AnimeTemporario} alt="Animes recentes" className="img-cover" />
                            </figure>

                            <h4 className="title">
                                Teste, mas o titulo fica aqui
                            </h4>

                            <div className="meta-list">
                                <div className="meta-item">
                                    <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliacao" />

                                    <span className="span">
                                        8.4
                                    </span>
                                </div>

                                <div className="card-badge">2022</div>
                            </div>

                            <a href="/detalhes.html" className="card-btn" title="Teste, mas o titulo tbm fica aq"></a>

                        </div>

                        <div className="movie-card">
                            <figure className="poster-box card-banner">
                                <img src={AnimeTemporario} alt="Animes recentes" className="img-cover" />
                            </figure>

                            <h4 className="title">
                                Teste, mas o titulo fica aqui
                            </h4>

                            <div className="meta-list">
                                <div className="meta-item">
                                    <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliacao" />

                                    <span className="span">
                                        8.4
                                    </span>
                                </div>

                                <div className="card-badge">2022</div>
                            </div>

                            <a href="/detalhes.html" className="card-btn" title="Teste, mas o titulo tbm fica aq"></a>

                        </div>

                        <div className="movie-card">
                            <figure className="poster-box card-banner">
                                <img src={AnimeTemporario} alt="Animes recentes" className="img-cover" />
                            </figure>

                            <h4 className="title">
                                Teste, mas o titulo fica aqui
                            </h4>

                            <div className="meta-list">
                                <div className="meta-item">
                                    <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliacao" />

                                    <span className="span">
                                        8.4
                                    </span>
                                </div>

                                <div className="card-badge">2022</div>
                            </div>

                            <a href="/detalhes.html" className="card-btn" title="Teste, mas o titulo tbm fica aq"></a>

                        </div>

                        <div className="movie-card">
                            <figure className="poster-box card-banner">
                                <img src={AnimeTemporario} alt="Animes recentes" className="img-cover" />
                            </figure>

                            <h4 className="title">
                                Teste, mas o titulo fica aqui
                            </h4>

                            <div className="meta-list">
                                <div className="meta-item">
                                    <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliacao" />

                                    <span className="span">
                                        8.4
                                    </span>
                                </div>

                                <div className="card-badge">2022</div>
                            </div>

                            <a href="/detalhes.html" className="card-btn" title="Teste, mas o titulo tbm fica aq"></a>

                        </div>

                        <div className="movie-card">
                            <figure className="poster-box card-banner">
                                <img src={AnimeTemporario} alt="Animes recentes" className="img-cover" />
                            </figure>

                            <h4 className="title">
                                Teste, mas o titulo fica aqui
                            </h4>

                            <div className="meta-list">
                                <div className="meta-item">
                                    <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliacao" />

                                    <span className="span">
                                        8.4
                                    </span>
                                </div>

                                <div className="card-badge">2022</div>
                            </div>

                            <a href="/detalhes.html" className="card-btn" title="Teste, mas o titulo tbm fica aq"></a>

                        </div>

                        <div className="movie-card">
                            <figure className="poster-box card-banner">
                                <img src={AnimeTemporario} alt="Animes recentes" className="img-cover" />
                            </figure>

                            <h4 className="title">
                                Teste, mas o titulo fica aqui
                            </h4>

                            <div className="meta-list">
                                <div className="meta-item">
                                    <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliacao" />

                                    <span className="span">
                                        8.4
                                    </span>
                                </div>

                                <div className="card-badge">2022</div>
                            </div>

                            <a href="/detalhes.html" className="card-btn" title="Teste, mas o titulo tbm fica aq"></a>

                        </div>

                    </div>
                </div>

            </section>
        </article>
    )
} 0