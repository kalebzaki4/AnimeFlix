import React, { useEffect, useState } from "react";
import "./Menu.css";
import logo from "../../assets/images/logo-animeflix.png";
import logoPesquisa from "../../assets/images/search.png";
import cancelarLogo from "../../assets/images/close.png";
import menuLateral from "../../assets/images/menu.png";
import cancelarMenuLateral from "../../assets/images/menu-close.png";
import { Link } from "react-router-dom";

export default function Menu() {
    const [searchActive, setSearchActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState("home");

    useEffect(() => {
        const searchTogglers = document.querySelectorAll(".search-btn");

        const toggleSearch = () => {
            setSearchActive((prevSearchActive) => !prevSearchActive);
        };

        searchTogglers.forEach((searchToggler) => {
            searchToggler.addEventListener("click", toggleSearch);
        });

        return () => {
            searchTogglers.forEach((searchToggler) => {
                searchToggler.removeEventListener("click", toggleSearch);
            });
        };
    }, []);

    const toggleMenu = () => {
        setMenuActive((prevMenuActive) => !prevMenuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    const handleMenuItemClick = (item) => {
        setSelectedItem(item);
        closeMenu(); // Fechar o menu lateral ao clicar em um item de navegação
    };

    const handleLogoClick = () => {
        setSelectedItem("home");
        closeMenu(); // Fechar o menu lateral ao clicar no logo
    };

    return (
        <>
            <header className="header">
                <Link to="/" className={`logo ${selectedItem === 'home' ? 'selected' : ''}`} onClick={handleLogoClick}>
                    <img src={logo} alt="Logo do Animeflix" width={140} height={32} />
                </Link>

                <div className={`search-box ${searchActive ? 'active' : ''}`}>
                    <div className="search-wrapper">
                        <input type="text" name="search" placeholder="Procurar Animes" className="search-field" autoComplete="off" />
                        <img src={logoPesquisa} alt="Pesquisa" className="leading-icon" width={24} height={24} />
                    </div>
                    <button className="search-btn">
                        <img src={cancelarLogo} alt="Fechar caixa de pesquisa" width={24} height={24} />
                    </button>
                </div>

                <button className="search-btn" onClick={toggleMenu}>
                    <img src={logoPesquisa} alt="Abrir menu lateral" width={24} height={24} />
                </button>

                <button className="menu-btn" onClick={toggleMenu}>
                    {menuActive ? (
                        <img src={cancelarMenuLateral} alt="Fechar menu" className="close" width={24} height={24} />
                    ) : (
                        <img src={menuLateral} alt="Abrir menu" className="menu" width={24} height={24} />
                    )}
                </button>
            </header>

            <div className={`sidebar ${menuActive ? 'active' : ''}`}>
                <nav className="side-menu">
                    <div className="sidebar-logo">
                        <Link to="/" onClick={handleLogoClick}>
                            <img src={logo} alt="Logo Animeflix" width={140} height={32} />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className={selectedItem === 'home' ? 'selected' : ''}
                                onClick={() => handleMenuItemClick('home')}
                            >
                                Página Inicial
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Animes"
                                className={selectedItem === 'Animes' ? 'selected' : ''}
                                onClick={() => handleMenuItemClick('Animes')}
                            >
                                Animes
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Filmes"
                                className={selectedItem === 'Filmes' ? 'selected' : ''}
                                onClick={() => handleMenuItemClick('Filmes')}
                            >
                                Filmes
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Sobre"
                                className={selectedItem === 'Sobre' ? 'selected' : ''}
                                onClick={() => handleMenuItemClick('Sobre')}
                            >
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <span className="menu-title">Navegar</span>
                            <ul>
                                <li><Link to="/Populares">Populares</Link></li>
                                <li><Link to="/Novidades">Novidades</Link></li>
                                <li><Link to="/A-Z">A-Z</Link></li>
                                <li><Link to="/Simulcasts">Simulcasts da Temporada</Link></li>
                                <li><Link to="/Calendario">Calendário de Lançamentos</Link></li>
                                <li><Link to="/Videoclipes">Videoclipes & Shows</Link></li>
                                {/* Adicione mais itens conforme necessário */}
                            </ul>
                        </li>
                        <li>
                            <Link
                                to="/Jogos"
                                className={selectedItem === 'Jogos' ? 'selected' : ''}
                                onClick={() => handleMenuItemClick('Jogos')}
                            >
                                Jogos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Noticias"
                                className={selectedItem === 'Noticias' ? 'selected' : ''}
                                onClick={() => handleMenuItemClick('Noticias')}
                            >
                                Notícias
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={`overlay ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
        </>
    );
}
