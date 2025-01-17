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
  const overlayRef = useRef(null);
  const userOverlayRef = useRef(null);
  const navigate = useNavigate();

  // Função para buscar animes com base no termo de pesquisa
  const handleSearchChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.length > 2) {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${term}`);
        setRecommendedAnimes(response.data.data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    } else {
      setRecommendedAnimes([]);
    }
  };

  // Função para submeter a pesquisa
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`/search?q=${searchTerm}`);
      setSearchActive(false);
    }
  };

  // Função para alternar a visibilidade da caixa de pesquisa
  const toggleSearch = () => {
    setSearchActive((prevSearchActive) => !prevSearchActive);
    setSearchTerm("");
    setRecommendedAnimes([]);
  };

  // Função para alternar o menu lateral
  const toggleMenu = () => {
    setMenuActive((prevMenuActive) => !prevMenuActive);
  };

  // Função para alternar o menu do usuário
  const toggleUserMenu = () => {
    setUserMenuActive((prevUserMenuActive) => !prevUserMenuActive);
  };

  // Função para fechar o overlay do menu lateral
  const closeOverlay = () => {
    setMenuActive(false);
  };

  // Função para fechar o overlay do menu do usuário
  const closeUserOverlay = () => {
    setUserMenuActive(false);
  };

  // Função para lidar com o clique em um item do menu
  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setMenuActive(false);
  };

  // Função para lidar com o clique em um item do menu do usuário
  const handleUserMenuItemClick = (item) => {
    setSelectedItem(item);
    setUserMenuActive(false);
  };

  // Função para lidar com o clique no logo
  const handleLogoClick = () => {
    setSelectedItem("home");
    setMenuActive(false);
    setUserMenuActive(false);
    navigate("/");
  };

  // Função para alternar a visibilidade dos gêneros
  const toggleGenres = () => {
    setGenresOpen((prev) => !prev);
  };

  // Efeito para fechar o overlay ao clicar fora
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

  // Efeito para desabilitar o scroll do body quando o menu está aberto
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

  return (
      <>
        <header className="header">
          {/* Botão do menu lateral */}
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

          {/* Logo */}
          <button
              className={`logo ${selectedItem === "home" ? "selected" : ""}`}
              onClick={handleLogoClick}
          >
            <img src={logo} alt="Logo do Animeflix" width={140} height={32} />
          </button>

          {/* Botão de pesquisa */}
          <button className="search-btn" onClick={toggleSearch}>
            <img
                src={logoPesquisa}
                alt="Abrir caixa de pesquisa"
                width={24}
                height={24}
            />
          </button>

          {/* Caixa de pesquisa */}
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
            {/* Lista de recomendações */}
            {recommendedAnimes.length > 0 && (
                <div className="recommendations">
                  {recommendedAnimes.map((anime) => (
                      <Link
                          key={anime.mal_id}
                          to={`/Detalhes/${anime.mal_id}`}
                          className="recommendation-item"
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

          {/* Botão do menu do usuário */}
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

        {/* Overlay do menu lateral */}
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
              <Link
                  to="/popular"
                  className="menu-item"
                  onClick={() => handleMenuItemClick("popular")}
              >
                Populares
              </Link>
              <Link
                  to="/novidades"
                  className="menu-item"
                  onClick={() => handleMenuItemClick("novidades")}
              >
                Novidades
              </Link>
              <Link
                  to="/az"
                  className="menu-item"
                  onClick={() => handleMenuItemClick("az")}
              >
                A-Z
              </Link>
              <Link
                  to="/simulcasts"
                  className="menu-item"
                  onClick={() => handleMenuItemClick("simulcasts")}
              >
                Simulcasts da Temporada
              </Link>
              <Link
                  to="/calendario"
                  className="menu-item"
                  onClick={() => handleMenuItemClick("calendario")}
              >
                Calendário de Lançamentos
              </Link>
              <Link
                  to="/videoclipes"
                  className="menu-item"
                  onClick={() => handleMenuItemClick("videoclipes")}
              >
                Videoclipes & Shows
              </Link>
              <div className="menu-item">
                <button className="dropdown-toggle" onClick={toggleGenres}>
                  Gêneros
                </button>
                <div className={`dropdown-content ${genresOpen ? "active" : ""}`}>
                  <Link
                      to="/acao"
                      className="dropdown-item"
                      onClick={() => handleMenuItemClick("acao")}
                  >
                    Ação
                  </Link>
                  <Link
                      to="/comedia"
                      className="dropdown-item"
                      onClick={() => handleMenuItemClick("comedia")}
                  >
                    Comédia
                  </Link>
                  <Link
                      to="/drama"
                      className="dropdown-item"
                      onClick={() => handleMenuItemClick("drama")}
                  >
                    Drama
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-section">
              <Link
                  to="/jogos"
                  className="menu-item"
                  onClick={() => handleMenuItemClick("jogos")}
              >
                Jogos
              </Link>
              <div className="menu-item">
                <button className="dropdown-toggle">Notícias</button>
                <div className="dropdown-content">
                  <Link
                      to="/ultimas"
                      className="dropdown-item"
                      onClick={() => handleMenuItemClick("ultimas")}
                  >
                    Últimas Notícias
                  </Link>
                  <Link
                      to="/mais-lidas"
                      className="dropdown-item"
                      onClick={() => handleMenuItemClick("mais-lidas")}
                  >
                    Mais Lidas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay do menu do usuário */}
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
