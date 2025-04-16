import React, { useState, useEffect } from "react";
import axios from "axios";
import ListaDeAnimesHorizontal from "../../components/animes/ListaDeAnimesHorizontal";
import TelaCarregamento from "../../components/common/TelaCarregamento";
import "./Populares.scss";

const Populares = () => {
  const [loading, setLoading] = useState(true);
  const [popularAnimes, setPopularAnimes] = useState(() => {
    try {
      const cachedData = sessionStorage.getItem("popularAnimes");
      return cachedData ? JSON.parse(cachedData) : [];
    } catch {
      return [];
    }
  });

  const fetchPopularAnimes = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.jikan.moe/v4/top/anime", {
        params: { type: "tv", limit: 50, sort: "bypopularity" },
      });
      const data = response.data.data || [];
      setPopularAnimes(data);
      sessionStorage.setItem("popularAnimes", JSON.stringify(data));
    } catch (error) {
      console.error("Erro ao buscar animes populares:", error);
      setPopularAnimes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (popularAnimes.length === 0) {
      fetchPopularAnimes();
    }
  }, []);

  if (loading) {
    return <TelaCarregamento />;
  }

  return (
    <div className="populares-container">
      <h1 className="populares-title">Animes Populares</h1>
      {popularAnimes.length > 0 ? (
        <ListaDeAnimesHorizontal
          title="Mais Populares"
          description="Os animes mais populares de todos os tempos"
          animes={popularAnimes}
          loadMoreAnimes={() => {}} // Pass an empty function to avoid errors
        />
      ) : (
        <p className="populares-empty">Nenhum anime popular encontrado.</p>
      )}
    </div>
  );
};

export default Populares;
