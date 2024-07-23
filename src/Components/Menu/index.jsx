import React, { useState, useRef, useEffect } from "react";
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
  const overlayRef = useRef(null);

  const toggleSearch = () => {
    setSearchActive((prevSearchActive) => !prevSearchActive);
  };

  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  const closeOverlay = () => {
    setMenuActive(false);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setMenuActive(false);
  };

  const handleLogoClick = () => {
    setSelectedItem("home");
    setMenuActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        closeOverlay();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header">
        <Link
          to="/"
          className={`logo ${selectedItem === "home" ? "selected" : ""}`}
          onClick={handleLogoClick}
        >
          <img src={logo} alt="Logo do Animeflix" width={140} height={32} />
        </Link>
        <div className={`search-box ${searchActive ? "active" : ""}`}>
          <div className="search-wrapper">
            <input
              type="text"
              name="search"
              placeholder="Procurar Animes"
              className="search-field"
              autoComplete="off"
            />
            <img
              src={logoPesquisa}
              alt="Pesquisa"
              className="leading-icon"
              width={24}
              height={24}
            />
          </div>
          <button className="search-btn" onClick={toggleSearch}>
            <img
              src={cancelarLogo}
              alt="Fechar caixa de pesquisa"
              width={24}
              height={24}
            />
          </button>
        </div>
        <button className="search-btn" onClick={toggleSearch}>
          <img
            src={logoPesquisa}
            alt="Abrir caixa de pesquisa"
            width={24}
            height={24}
          />
        </button>
        <button className="menu-btn" onClick={toggleMenu}>
          <img
            src={menuLateral}
            alt="Abrir menu"
            className={`menu ${menuActive ? "hidden" : ""}`}
            width={24}
            height={24}
          />
          <img
            src={cancelarMenuLateral}
            alt="Fechar menu"
            className={`close ${menuActive ? "" : "hidden"}`}
            width={24}
            height={24}
          />
        </button>
      </header>

      <div
        className={`overlay ${menuActive ? "active" : ""}`}
        ref={overlayRef}
      >
        <button className="overlay-close" onClick={closeOverlay}>
          &times;
        </button>
        <div className={`menu-overlay ${menuActive ? "active" : ""}`}>
          <Link to="/" className="menu-item" onClick={() => handleMenuItemClick("home")}>
            Navegar
          </Link>
          <Link to="/about" className="menu-item" onClick={() => handleMenuItemClick("about")}>
            About
          </Link>
          <Link to="/contact" className="menu-item" onClick={() => handleMenuItemClick("contact")}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
