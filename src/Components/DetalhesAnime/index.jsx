import AnimeTemporario from "../../assets/images/slider-control.jpg"
import Estrelas from "../../assets/images/star.png"
import "../ListaDeAnimes/ListaDeAnimes.css"
import "../Banner/Banner.css"
import { Link } from "react-router-dom"

export default function DetalhesAnime() {
    return (
        <>
        <article className="container-inative-2">
            <section className="movie-list" aria-label="upcoming movie">

                <div className="title-wrapper">
                    <h2 className="title-large">Talvez Você Goste:</h2>
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

                            <Link to="/Detalhes" className="card-btn" title="Teste, mas o titulo tbm fica aq"></Link>

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

                            <Link to="/Detalhes" className="card-btn" title="Teste, mas o titulo tbm fica aq"></Link>

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

                            <Link to="/Detalhes" className="card-btn" title="Teste, mas o titulo tbm fica aq"></Link>

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

                            <Link to="/detalhes.html" className="card-btn" title="Teste, mas o titulo tbm fica aq"></Link>

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

                            <Link to="Detalhes" className="card-btn" title="Teste, mas o titulo tbm fica aq"></Link>

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

                            <Link to="/Detalhes" className="card-btn" title="Teste, mas o titulo tbm fica aq"></Link>

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

                            <Link to="/Detalhes" className="card-btn" title="Teste, mas o titulo tbm fica aq"></Link>

                        </div>

                    </div>
                </div>

            </section>
        </article>
        </>
    )
}