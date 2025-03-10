import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Menu.css";
import logo from "../../assets/images/logo-animeflix.png";
import logoPesquisa from "../../assets/images/search.png";
import cancelarLogo from "../../assets/images/close.png";
import menuLateral from "../../assets/images/menu.png";
import cancelarMenuLateral from "../../assets/images/menu-close.png";
import userIcon from "../../assets/images/user.svg";

export default function Menu() {
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState("home");
  const [genresOpen, setGenresOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [recommendedAnimes, setRecommendedAnimes] = useState([]);
  const [selectedRecommendationIndex, setSelectedRecommendationIndex] = useState(0); // Novo estado para selecionar a recomendação
  const overlayRef = useRef(null);
  const userOverlayRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    { name: "home", label: "Home" },
    { name: "popular", label: "Populares" },
    { name: "novidades", label: "Novidades" },
    { name: "az", label: "A-Z" },
    { name: "simulcasts", label: "Simulcasts" },
    { name: "calendario", label: "Calendário de Lançamentos" },
    { name: "videoclipes", label: "Videoclipes & Shows" }
  ];

  const handleSearchChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.length > 2) {
      try {
        // Usando a variável de ambiente VITE_API_BASE_URL para a URL da API
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/anime?q=${term}`);
        setRecommendedAnimes(response.data.data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    } else {
      setRecommendedAnimes([]);
    }
  };

  const handleRecommendationClick = () => {
    setRecommendedAnimes([]); // Limpa as recomendações
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

  const toggleGenres = () => {
    setGenresOpen((prev) => !prev);
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

  // Função para navegação com as setas do teclado
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
        setRecommendedAnimes([]); // Limpar as recomendações após a navegação
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [recommendedAnimes, selectedRecommendationIndex]);

  return (
    <>
      <header className="header">
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
                  className={`recommendation-item ${index === selectedRecommendationIndex ? "selected" : ""
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
        <button className="overlay-close" onClick={closeOverlay}>
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
        <div className={`menu-overlay ${menuActive ? "active" : ""}`}>
          <div className="menu-section">
            <span className="navegar-span">NAVEGAR</span>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={`/${item.name}`}
                className={`menu-item ${selectedItem === item.name ? "selected" : ""
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
        <button className="overlay-close" onClick={closeUserOverlay}>
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
            <button>
              <Link
                to="/perfil"
                className="menu-item-2"
                onClick={() => handleUserMenuItemClick("perfil")}
              >
                Criar Conta
              </Link>
              <Link
                to="/perfil"
                className="menu-item-3"
                onClick={() => handleUserMenuItemClick("perfil")}
              >
                Criando uma conta você terá benefícios!
              </Link>
            </button>
            <button>
              <Link
                to="/favoritos"
                className="menu-item-2"
                onClick={() => handleUserMenuItemClick("favoritos")}
              >
                Login
              </Link>
              <Link
                to="/perfil"
                className="menu-item-3"
                onClick={() => handleUserMenuItemClick("perfil")}
              >
                Criando uma conta você terá benefícios!
              </Link>
            </button>
            <button>
              <Link
                to="/configuracoes"
                className="menu-item-2"
                onClick={() => handleUserMenuItemClick("configuracoes")}
              >
                Cartão de Presente
              </Link>
              <Link
                to="/perfil"
                className="menu-item-3"
                onClick={() => handleUserMenuItemClick("perfil")}
              >
                Já é membro? Entre Aqui!
              </Link>
            </button>
            <button>
              <Link
                to="/configuracoes"
                className="menu-item-2"
                onClick={() => handleUserMenuItemClick("configuracoes")}
              >
                Configurações
              </Link>
              <Link
                to="/perfil"
                className="menu-item-3"
                onClick={() => handleUserMenuItemClick("perfil")}
              >
                Tem um cartão de Presente? Resgate Aqui!
              </Link>
            </button>
            <button className="menu-item-button" onClick={() => handleUserMenuItemClick("configuracoes")}>
              Teste Gratuito por 7 dias!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
