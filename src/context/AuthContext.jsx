import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return JSON.parse(localStorage.getItem("isAuthenticated")) || false;
  });
  const [savedAnimes, setSavedAnimes] = useState(() => {
    return JSON.parse(localStorage.getItem("savedAnimes")) || [];
  });

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem("savedAnimes", JSON.stringify(savedAnimes));
  }, [savedAnimes]);

  const login = (credentials) => {
    try {
      if (!credentials || !credentials.email || !credentials.password) {
        throw new Error("Credenciais inválidas.");
      }
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
    }
  };

  const logout = () => {
    try {
      setIsAuthenticated(false);
      setSavedAnimes([]);
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message);
    }
  };

  const saveAnime = (anime) => {
    try {
      if (!isAuthenticated) {
        throw new Error("Você precisa estar logado para salvar animes.");
      }
      if (!anime || !anime.mal_id) {
        throw new Error("Anime inválido.");
      }
      setSavedAnimes((prev) => [...prev, anime]);
    } catch (error) {
      console.error("Erro ao salvar anime:", error.message);
    }
  };

  const removeAnime = (animeId) => {
    try {
      if (!animeId) {
        throw new Error("ID do anime inválido.");
      }
      setSavedAnimes((prev) => prev.filter((anime) => anime.mal_id !== animeId));
    } catch (error) {
      console.error("Erro ao remover anime:", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, savedAnimes, saveAnime, removeAnime }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};