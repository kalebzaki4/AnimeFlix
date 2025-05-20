import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Menu.scss";
import logo from "../../../assets/images/logo-animeflix.png";
import logoPesquisa from "../../../assets/images/search.png";
import cancelarLogo from "../../../assets/images/close.png";
import menuLateral from "../../../assets/images/menu.png";
import cancelarMenuLateral from "../../../assets/images/menu-close.png";
import userIcon from "../../../assets/images/user.svg";
import { useAuth } from "../../../context/AuthContext"; 

export default function Menu() {
  const { isAuthenticated, logout, user } = useAuth();
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [recommendedAnimes, setRecommendedAnimes] = useState([]);
  const [selectedRecommendationIndex, setSelectedRecommendationIndex] =
    useState(0);
  const overlayRef = useRef(null);
  const userOverlayRef = useRef(null);
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  const menuItems = [
    { name: "home", label: "Home" },
    { name: "popular", label: "Populares" },
    { name: "novidades", label: "Novidades" },
    { name: "az", label: "A-Z" },
    { name: "simulcasts", label: "Simulcasts" },
    { name: "calendario", label: "Calendário de Lançamentos" },
    { name: "videoclipes", label: "Videoclipes & Shows" },
  ];

  const handleSearchChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.length > 2) {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${term}`
        );
        setRecommendedAnimes(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar dados de animes:", error);
      }
    } else {
      setRecommendedAnimes([]);
    }
  };

  const handleRecommendationClick = () => {
    setRecommendedAnimes([]);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/search?q=${searchTerm}`);
      setSearchActive(false);
    }
  };

  const toggleSearch = () => {
    setSearchActive((prevSearchActive) => !prevSearchActive);
    setSearchTerm("");
    setRecommendedAnimes([]);
  };

  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  const toggleUserMenu = () => {
    setUserMenuActive((prevUserMenuActive) => !prevUserMenuActive);
  };

  const closeOverlay = () => {
    setMenuActive(false);
  };

  const closeUserOverlay = () => {
    setUserMenuActive(false);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setMenuActive(false);
  };

  const handleUserMenuItemClick = (item) => {
    setSelectedItem(item);
    setUserMenuActive(false);
  };

  const handleLogoClick = () => {
    setSelectedItem("home");
    setMenuActive(false);
    setUserMenuActive(false);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target) &&
        userOverlayRef.current &&
        !userOverlayRef.current.contains(event.target)
      ) {
        closeOverlay();
        closeUserOverlay();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (menuActive || userMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuActive, userMenuActive]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setSelectedRecommendationIndex((prevIndex) =>
        Math.min(prevIndex + 1, recommendedAnimes.length - 1)
      );
    } else if (event.key === "ArrowUp") {
      setSelectedRecommendationIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === "Enter") {
      const selectedAnime = recommendedAnimes[selectedRecommendationIndex];
      if (selectedAnime) {
        navigate(`/Detalhes/${selectedAnime.mal_id}`);
        setRecommendedAnimes([]);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [recommendedAnimes, selectedRecommendationIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isFixed) {
        setIsFixed(true);
      } else if (window.scrollY <= 50 && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return (
    <>
      <header
        className={`header ${isFixed ? "fixed slide-down" : ""}`}
        ref={headerRef}
      >
        <button className="menu-btn" onClick={toggleMenu}>
          <img
            src={menuLateral}
            alt="Abrir menu"
            className={menuActive ? "hidden" : ""}
            width={24}
            height={24}
          />
          <img
            src={cancelarMenuLateral}
            alt="Fechar menu"
            className={menuActive ? "" : "hidden"}
            width={24}
            height={24}
          />
        </button>

        <button
          className={`logo ${selectedItem === "home" ? "selected" : ""}`}
          onClick={handleLogoClick}
        >
          <img src={logo} alt="Logo do Animeflix" width={140} height={32} />
        </button>

        <button className="search-btn" onClick={toggleSearch}>
          <img
            src={logoPesquisa}
            alt="Abrir caixa de pesquisa"
            width={24}
            height={24}
          />
        </button>

        <div className={`search-box ${searchActive ? "active" : ""}`}>
          <form onSubmit={handleSearchSubmit} className="search-wrapper">
            <input
              type="text"
              name="search"
              placeholder="Procurar Animes"
              className="search-field"
              autoComplete="off"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <img
              src={logoPesquisa}
              alt="Pesquisa"
              className="leading-icon"
              width={24}
              height={24}
            />
          </form>
          <button className="search-btn" onClick={toggleSearch}>
            <img
              src={cancelarLogo}
              alt="Fechar caixa de pesquisa"
              width={24}
              height={24}
            />
          </button>
          {recommendedAnimes.length > 0 && (
            <div className="recommendations">
              {recommendedAnimes.map((anime, index) => (
                <Link
                  key={anime.mal_id}
                  to={`/Detalhes/${anime.mal_id}`}
                  className={`recommendation-item ${
                    index === selectedRecommendationIndex ? "selected" : ""
                  }`}
                  onClick={handleRecommendationClick}
                >
                  <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    width={50}
                    height={70}
                  />
                  <span>{anime.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        <button className="user-btn" onClick={toggleUserMenu}>
          <img
            src={userIcon}
            alt="User Login"
            className={userMenuActive ? "hidden" : ""}
            width={24}
            height={24}
          />
          <img
            src={cancelarMenuLateral}
            alt="Fechar menu"
            className={userMenuActive ? "" : "hidden"}
            width={24}
            height={24}
          />
        </button>
      </header>

      <div className={`overlay ${menuActive ? "active" : ""}`} ref={overlayRef}>
        <div className={`menu-overlay${menuActive ? " active" : ""}`}>
          <button
            className="overlay-close"
            aria-label="Fechar menu"
            onClick={closeOverlay}
          >
            ×
          </button>
          <Link
            to="/"
            onClick={() => {
              handleMenuItemClick("home");
              closeOverlay();
            }}
          >
            <img
              className="menu-overlay-logo"
              src={logo}
              alt="Logo do Animeflix"
              width={200}
            />
          </Link>
          <div className="menu-section">
            <span className="navegar-span">NAVEGAR</span>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.name === "home" ? "/" : `/${item.name}`}
                className={`menu-item ${
                  selectedItem === item.name ? "selected" : ""
                }`}
                onClick={() => handleMenuItemClick(item.name)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`overlay ${userMenuActive ? "active" : ""}`}
        ref={userOverlayRef}
      >
        <button
          className="overlay-close"
          aria-label="Fechar menu do usuário"
          onClick={closeUserOverlay}
        >
          ×
        </button>
        <div className={`menu-overlay-2 ${userMenuActive ? "active" : ""}`}>
          <div className="menu-section-2">
            <img
              className="menu-overlay-logo-2"
              src={logo}
              alt="Logo do Animeflix"
              width={200}
            />
            <span className="navegar-span">OPÇÕES</span>
            {!isAuthenticated ? (
              <>
                <Link
                  to="/signup"
                  className="menu-item-2"
                  onClick={() => handleUserMenuItemClick("perfil")}
                >
                  Criar Conta
                </Link>
                <Link
                  to="/signup"
                  className="menu-item-3"
                  onClick={() => handleUserMenuItemClick("perfil")}
                >
                  Criando uma conta você terá benefícios!
                </Link>
                <Link
                  to="/login"
                  className="menu-item-2"
                  onClick={() => handleUserMenuItemClick("favoritos")}
                >
                  Login
                </Link>
                <Link
                  to="/login"
                  className="menu-item-3"
                  onClick={() => handleUserMenuItemClick("perfil")}
                >
                  Criando uma conta você terá benefícios!
                </Link>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 24,
                  marginTop: 18,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    background: "#23272f",
                    borderRadius: 16,
                    padding: "18px 18px 14px 18px",
                    width: "100%",
                    maxWidth: 340,
                    boxShadow: "0 2px 12px #0005",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <img
                    src={userIcon}
                    alt="Avatar"
                    width={44}
                    height={44}
                    style={{
                      borderRadius: "50%",
                      background: "#181818",
                      border: "2.5px solid #ffb300",
                      boxShadow: "0 2px 8px #0002",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 18,
                        letterSpacing: 0.2,
                        textShadow: "0 1px 4px #0008",
                        marginBottom: 2,
                      }}
                    >
                      {`Olá, ${user?.username || "Usuário"}!`}
                    </div>
                    <div
                      style={{
                        color: "#ffb300",
                        fontSize: 13,
                        fontWeight: 500,
                        opacity: 0.85,
                      }}
                    >
                      Conta ativa
                    </div>
                  </div>
                  <button
                    className="menu-item-2"
                    style={{
                      background: "#b71c1c",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      padding: "10px 18px",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      cursor: "pointer",
                      transition: "background 0.2s",
                      boxShadow: "0 2px 8px #0003",
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                    onClick={() => {
                      logout();
                      closeUserOverlay();
                    }}
                    aria-label="Sair da Conta"
                  >
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" style={{ verticalAlign: "middle" }}>
                      <path d="M16 17L21 12L16 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12H9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 19C7.58172 19 4 15.4183 4 11C4 6.58172 7.58172 3 12 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Sair</span>
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    width: "100%",
                    marginTop: 6,
                  }}
                >
                  {[
                    {
                      to: "/perfil",
                      className: "menu-item-2",
                      style: {
                        background: "#ffb300",
                        color: "#181818",
                        borderRadius: 8,
                        fontWeight: "bold",
                        padding: "12px 0",
                        textAlign: "center",
                        marginBottom: 2,
                        textDecoration: "none",
                        fontSize: "1.05rem",
                        boxShadow: "0 2px 8px #0002",
                        letterSpacing: 0.1,
                      },
                      icon: "👤",
                      label: "Meu Perfil",
                      onClick: () => handleUserMenuItemClick("perfil"),
                    },
                    {
                      to: "/configuracoes",
                      className: "menu-item-2",
                      style: {
                        background: "#23272f",
                        color: "#fff",
                        borderRadius: 8,
                        fontWeight: "bold",
                        padding: "12px 0",
                        textAlign: "center",
                        marginBottom: 2,
                        textDecoration: "none",
                        fontSize: "1.05rem",
                        boxShadow: "0 2px 8px #0002",
                        letterSpacing: 0.1,
                      },
                      icon: "⚙️",
                      label: "Configurações",
                      onClick: () => handleUserMenuItemClick("configuracoes"),
                    },
                    {
                      to: "/configuracoes",
                      className: "menu-item-2",
                      style: {
                        background: "#23272f",
                        color: "#fff",
                        borderRadius: 8,
                        fontWeight: "bold",
                        padding: "12px 0",
                        textAlign: "center",
                        marginBottom: 2,
                        textDecoration: "none",
                        fontSize: "1.05rem",
                        boxShadow: "0 2px 8px #0002",
                        letterSpacing: 0.1,
                      },
                      icon: "🎁",
                      label: "Cartão de Presente",
                      onClick: () => handleUserMenuItemClick("configuracoes"),
                    },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={item.className}
                      style={item.style}
                      onClick={item.onClick}
                    >
                      <span role="img" aria-label={item.label.toLowerCase()} style={{ marginRight: 6 }}>{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 18,
                    width: "100%",
                    textAlign: "center",
                    color: "#b3b3b3",
                    fontSize: 13,
                    opacity: 0.85,
                  }}
                >
                  <span role="img" aria-label="estrela">⭐</span> Obrigado por usar o AnimeFlix!
                </div>
              </div>
            )}
            <button
              className="menu-item-button"
              onClick={() => handleUserMenuItemClick("configuracoes")}
            >
              Teste Gratuito por 7 dias!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
