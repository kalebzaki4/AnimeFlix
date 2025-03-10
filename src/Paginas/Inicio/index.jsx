import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../../Components/Banner/index";
import ListaDeAnimesHorizontal from "../../Components/ListaDeAnimesHorizontal/index";
import TelaCarregamento from "../../Components/TelaCarregamento";
import '../../message.css';

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

        // Usando a API Jikan para buscar lançamentos atuais
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

  if (loading) {
    return <TelaCarregamento />;
  }

  return (
    <>
      <Banner animes={animesFamosos} />
      <ListaDeAnimesHorizontal
        title="Mais Famosos"
        description="Os animes mais populares do momento"
        animes={animesFamosos}
      />
      <ListaDeAnimesHorizontal
        title="Lançamentos"
        description="Os animes mais recentes da temporada"
        animes={lancamentos}
      />
    </>
  );
};
