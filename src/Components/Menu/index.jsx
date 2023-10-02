import React, { useEffect, useState } from "react";
import "./Menu.css";
import logo from "../../assets/images/logo-animeflix.png";
import logoPesquisa from "../../assets/images/search.png";
import cancelarLogo from "../../assets/images/close.png";
import menuLateral from "../../assets/images/menu.png";
import cancelarMenuLateral from "../../assets/images/menu-close.png";

export default function Menu() {
    const [searchActive, setSearchActive] = useState(false);

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

    return (
        <>
            <header className="header">
                <a href="/index" className="logo">
                    <img src={logo} alt="Logo do Animeflix" width={140} height={32} />
                </a>

                <div className={`search-box ${searchActive ? 'active' : ''}`}>
                    <div className="search-wrapper">
                        <input type="text" name="search" placeholder="Procurar Mangás" className="search-field" autoComplete="off" />
                        <img src={logoPesquisa} alt="Pesquisa" className="leading-icon" width={24} height={24} />
                    </div>

                    <button className="search-btn">
                        <img src={cancelarLogo} alt="fechar caixa de pesquisa" width={24} height={24} />
                    </button>
                </div>

                <button className="search-btn" search-toggle menu-close>
                    <img src={logoPesquisa} alt="Abrir menu lateral" width={24} height={24} />
                </button>

                <button className="menu-btn" menu-btn menu-toggler>
                    <img src={menuLateral} alt="abrir menu" className="menu" width={24} height={24} />
                    <img src={cancelarMenuLateral} alt="fechar menu" className="close" width={24} height={24} />
                </button>
            </header>
        </>
    );
}
