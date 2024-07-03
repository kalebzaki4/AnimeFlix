import React, { useEffect, useState } from "react";
import "./Menu.css"; // Certifique-se de ter o arquivo CSS correto com estilos necessários
import logo from "../../assets/images/logo-animeflix.png";
import logoPesquisa from "../../assets/images/search.png";
import cancelarLogo from "../../assets/images/close.png";
import menuLateral from "../../assets/images/menu.png";
import cancelarMenuLateral from "../../assets/images/menu-close.png";
import { Link } from "react-router-dom";

export default function Menu() {
    const [searchActive, setSearchActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false); // Estado para controlar visibilidade do menu lateral
    const [selectedItem, setSelectedItem] = useState("home"); // Estado para controlar o item selecionado no menu

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

    const handleMenuItemClick = (item) => {
        setSelectedItem(item);
        setMenuActive(false); // Fechar o menu lateral ao clicar em um item
    };

    return (
        <>
            <header className="header">
                <Link to="/" className={`logo ${selectedItem === 'home' ? 'selected' : ''}`}>
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

                <button className="search-btn">
                    <img src={logoPesquisa} alt="Abrir menu lateral" width={24} height={24} />
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

            <div className={`sidebar ${menuActive ? 'active' : ''}`}>
                <nav className="side-menu">
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
                                to="/animes"
                                className={selectedItem === 'animes' ? 'selected' : ''}
                                onClick={() => handleMenuItemClick('animes')}
                            >
                                Todos os Animes
                            </Link>
                        </li>
                        {/* Adicione mais links conforme necessário */}
                    </ul>
                </nav>
            </div>
        </>
    );
}
