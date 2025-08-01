// src/components/common/Menu/Menu.jsx

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Menu.scss";
import logo from "../../../assets/images/logo-animeflix.png";
import logoPesquisa from "../../../assets/images/search.png";
import cancelarLogo from "../../../assets/images/close.png";
import menuLateral from "../../../assets/images/menu.png";
import userIcon from "../../../assets/images/user.svg";
import { useAuth } from "../../../context/AuthContext";

const useDebouncedValue = (value, delay = 400) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
};

export default function Menu() {
  const { isAuthenticated, user, logout } = useAuth();
  const [searchActive, setSearchActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const userMenuRef = useRef(null);
  const inputRef = useRef(null);
  const requestIdRef = useRef(0);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef(null);
  const isMobile = window.innerWidth < 1024;

  const menuItems = [
    { name: "home", label: "Home", path: "/" },
    { name: "popular", label: "Populares", path: "/popular" },
    { name: "novidades", label: "Novidades", path: "/novidades" },
    { name: "az", label: "A-Z", path: "/az" },
    { name: "simulcasts", label: "Simulcasts", path: "/simulcasts" },
    { name: "calendario", label: "Calendário de Lançamentos", path: "/calendario" },
    { name: "videoclipes", label: "Videoclipes & Shows", path: "/videoclipes" },
  ];

  useEffect(() => {
    if (debouncedSearchTerm.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      setIsSearching(false);
      return;
    }

    const controller = new AbortController();
    const thisRequestId = ++requestIdRef.current;
    setIsSearching(true);
    setShowSuggestions(true);
    setSuggestions([]);

    const fetchSuggestions = async () => {
      try {
        const resp = await axios.get("https://api.jikan.moe/v4/anime", {
          params: { q: debouncedSearchTerm, limit: 8 },
          signal: controller.signal,
        });
        if (thisRequestId === requestIdRef.current) {
          const filtered = (resp.data?.data || []).filter(
            (anime) =>
              (anime.type === "TV" || anime.type === "ONA") &&
              anime.images?.jpg?.image_url
          );
          setSuggestions(filtered);
          setShowSuggestions(true);
        }
      } catch (err) {
        if (thisRequestId === requestIdRef.current) {
          setSuggestions([]);
          setShowSuggestions(false);
        }
      } finally {
        if (thisRequestId === requestIdRef.current) {
          setIsSearching(false);
        }
      }
    };

    fetchSuggestions();
    return () => controller.abort();
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (activeMenu === 'left' && menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
      if (isMobile && activeMenu === 'right' && userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
      if (!isMobile && userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [activeMenu, isMobile]);

  useEffect(() => {
    document.body.style.overflow = activeMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeMenu]);

  const toggleSearch = useCallback(() => {
    setSearchActive(prev => !prev);
    setSearchTerm("");
    setSuggestions([]);
    setShowSuggestions(false);
    if (!searchActive && isMobile) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [searchActive, isMobile]);

  const toggleMenu = useCallback((menuName) => {
    setActiveMenu(prev => (prev === menuName ? null : menuName));
  }, []);

  const toggleUserDropdown = useCallback(() => {
    if (!isMobile) {
      setIsUserDropdownOpen(prev => !prev);
    } else {
      toggleMenu('right');
    }
  }, [isMobile, toggleMenu]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const term = inputRef.current?.value?.trim() ?? searchTerm.trim();
    if (term) {
      setShowSuggestions(false);
      setSearchActive(false);
      setSuggestions([]);
      navigate(`/search?q=${encodeURIComponent(term)}`);
    }
  };

  const handleSuggestionClick = (anime) => {
    setShowSuggestions(false);
    setSearchActive(false);
    setSearchTerm("");
    navigate(`/Detalhes/${anime.mal_id}`);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setActiveMenu(null);
  };

  const handleLogoClick = () => {
    setSelectedItem("home");
    setActiveMenu(null);
    navigate("/");
  };
  
  const handleLogout = () => {
    logout();
    setActiveMenu(null);
    setIsUserDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setActiveMenu(null);
    setIsUserDropdownOpen(false);
  }

  return (
    <>
      <header className={`header ${isHeaderFixed ? "fixed" : ""}`}>
        {/* Botão de menu lateral para mobile */}
        <button 
          className="header__btn menu-btn" 
          onClick={() => toggleMenu('left')} 
          aria-expanded={activeMenu === 'left'} 
          aria-controls="main-menu"
          aria-label="Abrir menu principal"
        >
          <img src={menuLateral} alt="" width={24} height={24} />
        </button>

        <Link to="/" className="logo-btn" onClick={handleLogoClick}>
          <img src={logo} alt="Logo do Animeflix" width={140} height={32} />
        </Link>
        
        <nav className="menu-desktop">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`menu-desktop-item ${selectedItem === item.name ? "selected" : ""}`}
              onClick={() => handleMenuItemClick(item.name)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Busca para PC */}
        <div className="search-box-desktop">
          <form onSubmit={handleSearchSubmit} className="search-wrapper" autoComplete="off">
            <input
              ref={inputRef}
              type="text"
              name="search"
              placeholder="Pesquisar..."
              className="search-field"
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
              aria-label="Buscar animes"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={showSuggestions}
              aria-haspopup="listbox"
            />
            <img src={logoPesquisa} alt="Ícone de pesquisa" className="search-field-icon" />
            {showSuggestions && (
              <ul className="search-suggestions-list" role="listbox">
                {isSearching ? (
                  <li className="search-suggestion-item status-message">Buscando...</li>
                ) : suggestions.length === 0 ? (
                  <li className="search-suggestion-item status-message">Nenhuma sugestão encontrada.</li>
                ) : (
                  suggestions.map((anime) => (
                    <li
                      key={anime.mal_id}
                      className="search-suggestion-item"
                      onMouseDown={() => handleSuggestionClick(anime)}
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleSuggestionClick(anime)}
                      aria-label={`Ir para detalhes de ${anime.title}`}
                      role="option"
                    >
                      <img
                        src={anime.images?.jpg?.image_url || "/fallback-image.jpg"}
                        alt={`Capa de ${anime.title}`}
                        width={44}
                        height={62}
                      />
                      <span className="title">{anime.title}</span>
                      <span className="score">{anime.score ?? "N/A"}</span>
                    </li>
                  ))
                )}
              </ul>
            )}
          </form>
        </div>

        {/* Botão de busca para mobile */}
        <button 
          className="header__btn search-btn" 
          onClick={toggleSearch} 
          aria-expanded={searchActive} 
          aria-controls="search-box"
          aria-label="Abrir caixa de pesquisa"
        >
          <img src={logoPesquisa} alt="" width={24} height={24} />
        </button>

        <div className="user-menu-wrapper" ref={userDropdownRef}>
          {/* Botão de usuário para ambos */}
          <button 
            className="header__btn user-btn" 
            onClick={toggleUserDropdown} 
            aria-expanded={isMobile ? activeMenu === 'right' : isUserDropdownOpen} 
            aria-controls={isMobile ? "user-menu" : "user-dropdown"}
            aria-label="Abrir menu do usuário"
          >
            <img src={userIcon} alt="" width={24} height={24} />
          </button>

          {/* Dropdown de usuário para PC */}
          {!isMobile && isUserDropdownOpen && (
            <div id="user-dropdown" className="user-menu-dropdown">
              {!isAuthenticated ? (
                <>
                  <div className="auth-options-container">
                    <div className="auth-option">
                      <Link to="/signup" className="auth-link" onClick={handleLinkClick}>
                        Criar Conta
                        <p>Junte-se a nós para ter acesso Premium.</p>
                      </Link>
                    </div>
                    <div className="auth-option">
                      <Link to="/login" className="auth-link" onClick={handleLinkClick}>
                        Login
                        <p>Já é um AnimeFlix? Faça login!</p>
                      </Link>
                    </div>
                    <div className="auth-option">
                      <Link to="/giftcard" className="auth-link" onClick={handleLinkClick}>
                        Gift Card
                        <p>Tem um gift card? Resgate-o aqui.</p>
                      </Link>
                    </div>
                  </div>
                  <Link to="/premium" className="menu-link-btn menu-link-btn--trial" onClick={handleLinkClick}>
                    <span role="img" aria-label="coroa">👑</span> 7-DAY FREE TRIAL
                  </Link>
                </>
              ) : (
                <div className="user-profile-card">
                  <div className="user-info">
                    <img src={userIcon} alt="Avatar do usuário" className="user-avatar" width={44} height={44} />
                    <div className="user-text">
                      <div className="user-name-wrapper">
                        <span className="user-name">{`Olá, ${user?.username || "Usuário"}!`}</span>
                        <button className="logout-btn" onClick={handleLogout} title="Sair da conta" aria-label="Sair da conta">
                          Sair
                        </button>
                      </div>
                      <span className="user-status">Conta ativa</span>
                    </div>
                  </div>
                  <div className="user-links">
                    <Link to="/perfil" className="menu-link-btn menu-link-btn--secondary" onClick={handleLinkClick}>
                      <span role="img" aria-label="perfil">👤</span> Meu Perfil
                    </Link>
                    <Link to="/configuracoes" className="menu-link-btn menu-link-btn--secondary" onClick={handleLinkClick}>
                      <span role="img" aria-label="configurações">⚙️</span> Configurações
                    </Link>
                  </div>
                  <p className="user-footer">
                    <span role="img" aria-label="estrela">⭐</span> Obrigado por usar o AnimeFlix!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Busca Modal para mobile */}
        <div id="search-box" className={`search-box ${searchActive ? "active" : ""}`}>
          <form onSubmit={handleSearchSubmit} className="search-wrapper" autoComplete="off">
            <input
              ref={inputRef}
              type="text"
              name="search"
              placeholder="Pesquisar..."
              className="search-field"
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
              aria-label="Buscar animes"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={showSuggestions}
              aria-haspopup="listbox"
            />
            <img src={logoPesquisa} alt="Ícone de pesquisa" className="search-field-icon" />
            {showSuggestions && (
              <ul className="search-suggestions-list" role="listbox">
                {isSearching ? (
                  <li className="search-suggestion-item status-message">Buscando...</li>
                ) : suggestions.length === 0 ? (
                  <li className="search-suggestion-item status-message">Nenhuma sugestão encontrada.</li>
                ) : (
                  suggestions.map((anime) => (
                    <li
                      key={anime.mal_id}
                      className="search-suggestion-item"
                      onMouseDown={() => handleSuggestionClick(anime)}
                      tabIndex={0}
                      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleSuggestionClick(anime)}
                      aria-label={`Ir para detalhes de ${anime.title}`}
                      role="option"
                    >
                      <img
                        src={anime.images?.jpg?.image_url || "/fallback-image.jpg"}
                        alt={`Capa de ${anime.title}`}
                        width={44}
                        height={62}
                      />
                      <span className="title">{anime.title}</span>
                      <span className="score">{anime.score ?? "N/A"}</span>
                    </li>
                  ))
                )}
              </ul>
            )}
          </form>
          <button className="header__btn search-btn" onClick={toggleSearch} aria-label="Fechar caixa de pesquisa">
            <img src={cancelarLogo} alt="" width={24} height={24} />
          </button>
        </div>
      </header>

      {/* Menus laterais (apenas para mobile) */}
      <div className={`overlay ${activeMenu ? "active" : ""}`} onClick={() => setActiveMenu(null)}>
        <div 
          id="main-menu"
          className={`menu-modal menu-modal--left ${activeMenu === 'left' ? "active" : ""}`} 
          ref={menuRef} 
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Menu Principal"
        >
          <Link to="/" onClick={handleLogoClick}>
            <img className="menu-modal-logo" src={logo} alt="Logo do Animeflix" width={200} />
          </Link>
          <span className="menu-heading">NAVEGAR</span>
          <nav>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`menu-item ${selectedItem === item.name ? "selected" : ""}`}
                onClick={() => handleMenuItemClick(item.name)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div 
          id="user-menu"
          className={`menu-modal menu-modal--right ${activeMenu === 'right' ? "active" : ""}`} 
          ref={userMenuRef} 
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de Usuário"
        >
          {/* Menu do usuário não autenticado para mobile */}
          {!isAuthenticated ? (
            <>
              <div className="auth-options-container">
                <div className="auth-option">
                  <Link to="/signup" className="auth-link" onClick={handleLinkClick}>
                    Criar Conta
                    <p>Junte-se a nós para ter acesso Premium.</p>
                  </Link>
                </div>
                <div className="auth-option">
                  <Link to="/login" className="auth-link" onClick={handleLinkClick}>
                    Login
                    <p>Já é um AnimeFlix? Faça login!</p>
                  </Link>
                </div>
                <div className="auth-option">
                  <Link to="/giftcard" className="auth-link" onClick={handleLinkClick}>
                    Gift Card
                    <p>Tem um gift card? Resgate-o aqui.</p>
                  </Link>
                </div>
              </div>
              <Link to="/premium" className="menu-link-btn menu-link-btn--trial" onClick={handleLinkClick}>
                <span role="img" aria-label="coroa">👑</span> 7-DAY FREE TRIAL
              </Link>
            </>
          ) : (
            // Menu do usuário autenticado para mobile
            <div className="user-profile-card">
              <div className="user-info">
                <img src={userIcon} alt="Avatar do usuário" className="user-avatar" width={44} height={44} />
                <div className="user-text">
                  <div className="user-name-wrapper">
                    <span className="user-name">{`Olá, ${user?.username || "Usuário"}!`}</span>
                    <button className="logout-btn" onClick={handleLogout} title="Sair da conta" aria-label="Sair da conta">
                      Sair
                    </button>
                  </div>
                  <span className="user-status">Conta ativa</span>
                </div>
              </div>
              <div className="user-links">
                <Link to="/perfil" className="menu-link-btn menu-link-btn--secondary" onClick={handleLinkClick}>
                  <span role="img" aria-label="perfil">👤</span> Meu Perfil
                </Link>
                <Link to="/configuracoes" className="menu-link-btn menu-link-btn--secondary" onClick={handleLinkClick}>
                  <span role="img" aria-label="configurações">⚙️</span> Configurações
                </Link>
              </div>
              <p className="user-footer">
                <span role="img" aria-label="estrela">⭐</span> Obrigado por usar o AnimeFlix!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}