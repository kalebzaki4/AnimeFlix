import React, { useState } from "react";
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

    const toggleSearch = () => {
        setSearchActive(prevSearchActive => !prevSearchActive);
    };

    const toggleMenu = () => {
        setMenuActive(prevMenuActive => !prevMenuActive);
    };

    const handleMenuItemClick = (item) => {
        setSelectedItem(item);
        setMenuActive(false);
    };

    const handleLogoClick = () => {
        setSelectedItem("home");
        setMenuActive(false);
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
                    <button className="search-btn" onClick={toggleSearch}>
                        <img src={cancelarLogo} alt="Fechar caixa de pesquisa" width={24} height={24} />
                    </button>
                </div>
                <button className="search-btn" onClick={toggleSearch}>
                    <img src={logoPesquisa} alt="Abrir caixa de pesquisa" width={24} height={24} />
                </button>
                <button className="menu-btn" onClick={toggleMenu}>
                    <img
                        src={menuLateral}
                        alt="Abrir menu"
                        className={`menu ${menuActive ? 'hidden' : ''}`}
                        width={24}
                        height={24}
                    />
                    <img
                        src={cancelarMenuLateral}
                        alt="Fechar menu"
                        className={`close ${menuActive ? '' : 'hidden'}`}
                        width={24}
                        height={24}
                    />
                </button>
            </header>
            <div className={`sidebar ${menuActive ? 'active' : 'hidden'}`}>
                <nav className="side-menu">
                    <div className="sidebar-logo">
                        <Link to="/" className={selectedItem === 'home' ? 'selected' : ''} onClick={() => handleLogoClick('home')}>
                            <img src={logo} alt="Logo Animeflix" width={140} height={32} />
                        </Link>
                    </div>
                    <ul>
                        <span className="navegar-span">Navegar</span>
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
                                to="/Series"
                                className={selectedItem === 'Series' ? 'selected' : ''}
                                onClick={() => handleMenuItemClick('Series')}
                            >
                                Séries
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={`overlay ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
            </div>
        </>
    );
}
