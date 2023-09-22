import styles from './Menu.module.css'
import logo from '../../assets/images/logo-animeflix.png'

export default function Menu() {
    return (
        <>
            <header className={styles.header} data-header>
                <div className={styles.container}>

                    <div className={styles.overlay} data-overlay></div>

                    <a href="index.html" className={styles.logo}>
                        <img src={logo} alt="AnimeFlix logo" width="300px"/>
                    </a>

                    <div className="header-actions">

                        <div className="search-box">
                            <input type="text" className="search-txt" placeholder="Pesquisar" list="historico" data-pesquisa/>
                                <button onclick="toggle2('conteudo2')" className="search-button" data-botao-pesquisa/>
                                    <img src="pesquisa.svg" alt="Lupa" height="20" width="20"/>
                                <button/>
                        </div>

                        <a href="login.html"><button className="btn btn-primary">Entrar</button></a>

                    </div>

                    <button className="menu-open-btn" data-menu-open-btn>
                        <ion-icon name="reorder-two"></ion-icon>
                    </button>

                    <nav className="navbar" data-navbar>

                        <div className="navbar-top">

                            <a href="index.html" className="logo">
                                <img src="logo-animeflix.png" alt="AnimeFlix logo" width="200px"/>
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
                                <a href="login.html" className="navbar-link">Entrar</a>
                            </li>

                        </ul>

                        <ul className="navbar-social-list">

                            <li>
                                <a href="#" className="navbar-social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="navbar-social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="navbar-social-link">
                                    <ion-icon name="logo-pinterest"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="navbar-social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="navbar-social-link">
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </nav>

                </div>
            </header>
        </>
    )
}