import '../../App.css'
import LogoPesquisa from '../../assets/images/pesquisa.svg'

export default function Menu() {
    return (
        <>
            <header className="header" data-header>
                <div className="container">

                    <div className="overlay" data-overlay></div>

                    <a href="index2.html" className="logo">
                        <img src="logo-animeflix.png" alt="AnimeFlix logo" width="300px" />
                    </a>

                    <div className="header-actions">

                        <div class="search-box">
                            <input type="text" className="search-txt" placeholder="Pesquisar" list="historico" data-pesquisa />
                            <button onclick="toggle2('conteudo2')" className="search-button" data-botao-pesquisa />
                            <img src="pesquisa.svg" alt="Lupa" height="20" width="20" />
                        </div>

                    </div>

                    <button className="menu-open-btn" data-menu-open-btn>
                        <img src={LogoPesquisa} alt="" />
                    </button>

                    <nav className="navbar" data-navbar>

                        <div className="navbar-top">

                            <a href="index.html" className="logo">
                                <img src="logo-animeflix.png" alt="AnimeFlix logo" width="200px" />
                            </a>

                            <button className="menu-close-btn" data-menu-close-btn>
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>

                        <ul className="navbar-list">

                            <li>
                                <a href="index.html" className="navbar-link">Home</a>
                            </li>

                            <li>
                                <a href="famosos.html" className="navbar-link">Famosos</a>
                            </li>

                            <li>
                                <a href="recomendados.html" className="navbar-link">Recomendados</a>
                            </li>

                            <li>
                                <a href="login.html" className="navbar-link">Sobre</a>
                            </li>

                            <button class="btn btn-primary">Sign in</button>


                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}