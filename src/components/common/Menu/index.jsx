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

function useDebouncedValue(value, delay = 20) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

export default function Menu() {
  const { isAuthenticated, user, logout } = useAuth();
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false); // novo estado
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 20);
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const userOverlayRef = useRef(null);
  const headerRef = useRef(null);
  const inputRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const requestIdRef = useRef(0);

  const menuItems = [
    { name: "home", label: "Home" },
    { name: "popular", label: "Populares" },
    { name: "novidades", label: "Novidades" },
    { name: "az", label: "A-Z" },
    { name: "simulcasts", label: "Simulcasts" },
    { name: "calendario", label: "Calendário de Lançamentos" },
    { name: "videoclipes", label: "Videoclipes & Shows" },
  ];

  useEffect(() => {
    if (debouncedSearchTerm.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      setIsSearching(false);
      return;
    }
    let cancel = false;
    const controller = new AbortController();
    const thisRequestId = ++requestIdRef.current;
    setIsSearching(true);
    setSuggestions([]); // Limpa sugestões enquanto busca
    (async () => {
      try {
        const resp = await axios.get("https://api.jikan.moe/v4/anime", {
          params: { q: debouncedSearchTerm, limit: 8 },
          timeout: 1200,
          signal: controller.signal,
        });
        if (!cancel && thisRequestId === requestIdRef.current) {
          const filtered = (resp.data?.data || []).filter(
            (anime) =>
              (anime.type === "TV" || anime.type === "ONA") &&
              anime.images?.jpg?.image_url
          );
          setSuggestions(filtered);
          setShowSuggestions(filtered.length > 0);
        }
      } catch (err) {
        if (!cancel && thisRequestId === requestIdRef.current) {
          setSuggestions([]);
          setShowSuggestions(false);
        }
      } finally {
        if (thisRequestId === requestIdRef.current) setIsSearching(false);
      }
    })();
    return () => {
      cancel = true;
      controller.abort();
    };
  }, [debouncedSearchTerm]);

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
    navigate(`/Detalhes/${anime.mal_id}`);
  };

  const toggleSearch = () => {
    setSearchActive((prevSearchActive) => !prevSearchActive);
    setSearchTerm("");
    setSuggestions([]);
    setShowSuggestions(false);
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
    function handleClickOutside(event) {
      if (
        menuActive &&
        overlayRef.current &&
        !overlayRef.current.querySelector(".menu-overlay").contains(event.target)
      ) {
        setMenuActive(false);
      }
      if (
        userMenuActive &&
        userOverlayRef.current &&
        !userOverlayRef.current.querySelector(".menu-overlay-2").contains(event.target)
      ) {
        setUserMenuActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuActive, userMenuActive]);

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
          <form onSubmit={handleSearchSubmit} className="search-wrapper" autoComplete="off">
            <input
              ref={inputRef}
              type="text"
              name="search"
              placeholder="Procurar Animes"
              className="search-field"
              autoComplete="off"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(suggestions.length > 0)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
              aria-label="Buscar animes"
            />
            <img
              src={logoPesquisa}
              alt="Pesquisa"
              className="leading-icon"
              width={24}
              height={24}
            />
            {showSuggestions && (
              <ul
                className="search-suggestions-list"
                style={{
                  position: "absolute",
                  top: 48,
                  left: 0,
                  right: 0,
                  background: "#181818",
                  borderRadius: 16,
                  boxShadow: "0 8px 32px #000b",
                  zIndex: 10,
                  padding: 0,
                  margin: 0,
                  listStyle: "none",
                  maxHeight: 320,
                  overflowY: "auto",
                  border: "1.5px solid #23272f",
                  minWidth: 260,
                  animation: "fadeInMenu 0.25s cubic-bezier(0.4,0.2,0.2,1)"
                }}
              >
                {isSearching ? (
                  <li className="search-suggestion-item" style={{ color: "#ffb300", fontWeight: 600 }}>
                    Buscando...
                  </li>
                ) : suggestions.length === 0 ? (
                  <li className="search-suggestion-item" style={{ color: "#ffb300", fontWeight: 600 }}>
                    Nenhuma sugestão encontrada.
                  </li>
                ) : (
                  suggestions.map((anime, idx) => (
                    <li
                      key={anime.mal_id}
                      className="search-suggestion-item"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        padding: "12px 18px",
                        cursor: "pointer",
                        borderBottom: idx === suggestions.length - 1 ? "none" : "1px solid #23272f",
                        background: "none",
                        transition: "background 0.16s, box-shadow 0.16s",
                        position: "relative"
                      }}
                      onMouseDown={() => handleSuggestionClick(anime)}
                      tabIndex={0}
                      onKeyDown={(e) =>
                        (e.key === "Enter" || e.key === " ") &&
                        handleSuggestionClick(anime)
                      }
                      aria-label={`Ir para detalhes de ${anime.title}`}
                    >
                      <img
                        src={anime.images?.jpg?.image_url || "/fallback-image.jpg"}
                        alt={anime.title}
                        width={44}
                        height={62}
                        style={{
                          borderRadius: 8,
                          objectFit: "cover",
                          boxShadow: "0 2px 8px #0007",
                          background: "#23272f",
                          flexShrink: 0,
                          border: "1.5px solid #23272f"
                        }}
                      />
                      <span
                        style={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: 16,
                          flex: 1,
                          textShadow: "0 1px 4px #000a",
                          letterSpacing: 0.01,
                          lineHeight: 1.18,
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis"
                        }}
                      >
                        {anime.title}
                      </span>
                      <span
                        style={{
                          background: "#ffb300",
                          color: "#181818",
                          fontWeight: 700,
                          fontSize: 15,
                          borderRadius: 8,
                          padding: "3px 10px",
                          marginLeft: 6,
                          minWidth: 38,
                          textAlign: "center",
                          boxShadow: "0 1px 4px #0003",
                          letterSpacing: 0.01,
                          display: "inline-block"
                        }}
                      >
                        {anime.score ?? "N/A"}
                      </span>
                    </li>
                  ))
                )}
              </ul>
            )}
          </form>
          <button className="search-btn" onClick={toggleSearch}>
            <img
              src={cancelarLogo}
              alt="Fechar caixa de pesquisa"
              width={24}
              height={24}
            />
          </button>
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
              style={{ cursor: "pointer" }}
              onClick={() => {
                setUserMenuActive(false);
                navigate("/");
              }}
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 8,
                      }}
                    >
                      {`Olá, ${user?.username || "Usuário"}!`}
                      <button
                        className="menu-item-2"
                        style={{
                          background: "#e53935",
                          color: "#fff",
                          borderRadius: 8,
                          fontWeight: "bold",
                          padding: "7px 18px",
                          textAlign: "center",
                          marginLeft: 10,
                          textDecoration: "none",
                          fontSize: "1.05rem",
                          boxShadow: "0 2px 8px #0002",
                          letterSpacing: 0.1,
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          logout();
                          setUserMenuActive(false);
                          navigate("/");
                        }}
                        title="Sair da conta"
                        aria-label="Sair da conta"
                      >
                        Sair
                      </button>
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
                </div>
                <div style={{ width: "100%", marginTop: 10 }}>
                  <Link
                    to="/perfil"
                    className="menu-item-2"
                    style={{
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
                      display: "block",
                      top: 20,
                    }}
                    onClick={() => handleUserMenuItemClick("perfil")}
                  >
                    <span
                      role="img"
                      aria-label="perfil"
                      style={{ marginRight: 6 }}
                    >
                      👤
                    </span>
                    Meu Perfil
                  </Link>
                  <Link
                    to="/configuracoes"
                    className="menu-item-2"
                    style={{
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
                      display: "block",
                      position: "relative",
                      top: 20,
                    }}
                    onClick={() => handleUserMenuItemClick("configuracoes")}
                  >
                    <span
                      role="img"
                      aria-label="configurações"
                      style={{ marginRight: 6 }}
                    >
                      ⚙️
                    </span>
                    Configurações
                  </Link>
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
                  <span role="img" aria-label="estrela">
                    ⭐
                  </span>{" "}
                  Obrigado por usar o AnimeFlix!
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
      <style>{`
        .search-suggestions-list {
          backdrop-filter: blur(2px);
        }
        .search-suggestion-item {
          border-left: 3.5px solid transparent;
        }
        .search-suggestion-item:hover,
        .search-suggestion-item:focus {
          background: #23272f;
          border-left: 3.5px solid #ffb300;
          box-shadow: 0 2px 12px #0007;
        }
        .search-suggestion-item:active {
          background: #181818;
        }
        @keyframes fadeInMenu {
          from { opacity: 0; transform: translateY(12px);}
          to   { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </>
  );
}
