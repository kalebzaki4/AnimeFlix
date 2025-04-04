import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [savedAnimes, setSavedAnimes] = useState([]);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setSavedAnimes([]);
  };

  const saveAnime = (anime) => {
    if (isAuthenticated) {
      setSavedAnimes((prev) => [...prev, anime]);
    } else {
      alert("Você precisa estar logado para salvar animes.");
    }
  };

  const removeAnime = (animeId) => {
    setSavedAnimes((prev) => prev.filter((anime) => anime.mal_id !== animeId));
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

export const useAuth = () => useContext(AuthContext);