import "./ListaLateral.css"
import logo from "../../assets/images/logo-animeflix.png";


export default function ListaLateral() {
    return (
        <>
        <nav className="sidebar active" sidebar>
            <div className="sidebar-inner">

                <div className="sidebar-list">
                    <p className="title">Gêneros</p>

                    <a href="./Animes" menu-close className="sidebar-link"> Ação</a>
                    <a href="./Animes" menu-close className="sidebar-link"> Terror</a>
                    <a href="./Animes" menu-close className="sidebar-link"> Comedia</a>
                    <a href="./Animes" menu-close className="sidebar-link"> Aventura</a>
                    <a href="./Animes" menu-close className="sidebar-link"> Drama</a>
                    <a href="./Animes" menu-close className="sidebar-link"> Shounen</a>

                </div>

                <div className="sidebar-list">
                    <p className="title">Linguagens</p>

                    <a href="./Animes" menu-close className="sidebar-link"> Ingles</a>
                    <a href="./Animes" menu-close className="sidebar-link"> Português</a>

                </div>

                <div className="sidebar-footer">
                    <p className="copyright">
                        Copyright 2023-2027 <a href="https://github.com/kalebzaki4">@Kalebzaki4</a>
                    </p>

                    <img src={logo} alt="" width={130} height={17}/>
                </div>

            </div>
        </nav>
        <div className="overlay" overlay menu-toggler ></div>
        </>
    )
}