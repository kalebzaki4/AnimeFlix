import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../../components/layout/Banner";
import ListaDeAnimesHorizontal from "../../components/animes/ListaDeAnimesHorizontal";
import TelaCarregamento from "../../components/common/TelaCarregamento";
import '../../styles/message.css';

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [animesFamosos, setAnimesFamosos] = useState([]);
  const [lancamentos, setLancamentos] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const famososResponse = await axios.get("https://api.jikan.moe/v4/top/anime", {
          params: {
            type: "tv",
            limit: 25, 
            sort: "bypopularity" 
          }
        });

        const lancamentosResponse = await axios.get("https://api.jikan.moe/v4/seasons/now", {
          params: {
            limit: 25
          }
        });

        setAnimesFamosos(famososResponse.data.data);
        setLancamentos(lancamentosResponse.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados de animes:", error);
        setLoading(false);
      }
    };

    fetchAnimes();
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <TelaCarregamento />;
  }

  return (
    <>
      <Banner animes={animesFamosos} onClick={handleClick} />
      <ListaDeAnimesHorizontal
        title="Mais Famosos"
        description="Os animes mais populares do momento"
        animes={animesFamosos}
        onClick={handleClick}
      />
      <ListaDeAnimesHorizontal
        title="Lançamentos"
        description="Os animes mais recentes da temporada"
        animes={lancamentos}
        onClick={handleClick}
      />
    </>
  );
}
