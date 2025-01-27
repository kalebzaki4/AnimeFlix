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
        const [famososResponse, lancamentosResponse] = await Promise.all([
          axios.get("https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=25"),
          axios.get("https://api.jikan.moe/v4/seasons/now?limit=25")
        ]);

        setAnimesFamosos(famososResponse.data.data);
        setLancamentos(lancamentosResponse.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime data:", error);
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