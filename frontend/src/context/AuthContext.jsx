import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

// Contexto global de autenticação
const AuthContext = createContext();

// Utilitário seguro para localStorage
const localStorageUtil = {
  get: (key, defaultValue) => {
    try {
      const value = localStorage.getItem(key);
      return value !== null ? JSON.parse(value) : defaultValue;
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

const ALERT_TIMEOUT = 2000;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorageUtil.get("animeflix_user", null)
  );
  const [savedAnimes, setSavedAnimes] = useState(() =>
    localStorageUtil.get("savedAnimes", [])
  );
  const [alert, setAlert] = useState(null);

  // Sincroniza autenticação e animes salvos com localStorage
  useEffect(() => {
    localStorageUtil.set("animeflix_user", user);
  }, [user]);

  useEffect(() => {
    localStorageUtil.set("savedAnimes", savedAnimes);
  }, [savedAnimes]);

  // Sincroniza logout entre abas
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "animeflix_user" && event.newValue === "null") {
        setUser(null);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Login fake (pode ser adaptado para backend)
  const login = ({ email, password, username }) => {
    if (!email || !password) {
      showAlert("Credenciais inválidas.", "error", 3000);
      return;
    }
    const userData = { email, username: username || email.split("@")[0] };
    setUser(userData);
    localStorageUtil.set("animeflix_user", userData);
    showAlert("Login realizado com sucesso!", "success");
  };

  // Logout
  const logout = () => {
    setUser(null);
    setSavedAnimes([]);
    localStorageUtil.set("animeflix_user", null);
    showAlert("Logout realizado.", "info");
  };

  // Salva anime, evitando duplicatas
  const saveAnime = (anime) => {
    if (!anime || !anime.mal_id) {
      showAlert("Anime inválido.", "error", 3000);
      return;
    }
    if (savedAnimes.some((a) => a.mal_id === anime.mal_id)) {
      showAlert("Anime já salvo.", "info");
      return;
    }
    setSavedAnimes((prev) => [...prev, anime]);
    showAlert("Anime salvo!", "success");
  };

  // Remove anime salvo
  const removeAnime = (animeId) => {
    if (!animeId) {
      showAlert("ID do anime inválido.", "error", 3000);
      return;
    }
    setSavedAnimes((prev) => prev.filter((anime) => anime.mal_id !== animeId));
    showAlert("Anime removido com sucesso!", "info");
  };

  // Verifica se anime está salvo
  const isAnimeSaved = (animeId) => savedAnimes.some((anime) => anime.mal_id === animeId);

  // Exibe alertas temporários
  const showAlert = (message, type, timeout = ALERT_TIMEOUT) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), timeout);
  };

  // Limpa alerta manualmente
  const clearAlert = () => setAlert(null);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        logout,
        savedAnimes,
        saveAnime,
        removeAnime,
        isAnimeSaved,
        alert,
        showAlert,
        clearAlert,
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