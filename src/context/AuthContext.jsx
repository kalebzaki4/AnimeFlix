import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const localStorageUtil = {
  get: (key, defaultValue) => {
    try {
      return JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch {
      console.warn(`Erro ao acessar ${key} no localStorage.`);
      return defaultValue;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Erro ao salvar ${key} no localStorage:`, error.message);
    }
  },
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorageUtil.get("isAuthenticated", false)
  );
  const [savedAnimes, setSavedAnimes] = useState(() =>
    localStorageUtil.get("savedAnimes", [])
  );
  const [alert, setAlert] = useState(null); // Add alert state

  useEffect(() => {
    localStorageUtil.set("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorageUtil.set("savedAnimes", savedAnimes);
  }, [savedAnimes]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "isAuthenticated" && event.newValue === "false") {
        setIsAuthenticated(false);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = (credentials) => {
    if (!credentials?.email || !credentials?.password) {
      console.error("Credenciais inválidas.");
      return;
    }
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setSavedAnimes([]);
  };

  const saveAnime = (anime) => {
    console.debug("Tentando salvar o anime:", anime); // Debug log
    if (!isAuthenticated) {
      console.error("Você precisa estar logado para salvar animes.");
      return;
    }
    if (!anime || !anime.mal_id || typeof anime.mal_id !== "number") {
      console.error("Anime inválido. Certifique-se de que o objeto contém um 'mal_id' válido.");
      return;
    }
    if (isAnimeSaved(anime.mal_id)) {
      console.warn("Anime já está salvo.");
      return;
    }
    const animeToSave = {
      mal_id: anime.mal_id,
      title: anime.title,
      images: anime.images || { jpg: { image_url: "/fallback-image.jpg" } },
      score: anime.score || "N/A",
      year: anime.year || "Desconhecido",
    };
    setSavedAnimes((prev) => [...prev, animeToSave]); // Adiciona o anime ao estado global
    setAlert({ message: "Anime salvo com sucesso!", type: "success" });
    setTimeout(() => setAlert(null), 3000);
  };

  const removeAnime = (animeId) => {
    if (!animeId) {
      console.error("ID do anime inválido.");
      return;
    }
    setSavedAnimes((prev) => prev.filter((anime) => anime.mal_id !== animeId));
    setAlert({ message: "Anime removido com sucesso!", type: "info" }); // Trigger popup alert
    setTimeout(() => setAlert(null), 3000); // Auto-hide after 3 seconds
  };

  const isAnimeSaved = (animeId) => savedAnimes.some((anime) => anime.mal_id === animeId);

  const clearAlert = () => setAlert(null); // Function to clear alert

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        savedAnimes,
        saveAnime,
        removeAnime,
        isAnimeSaved,
        alert, // Expose alert state
        clearAlert, // Expose clearAlert function
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);