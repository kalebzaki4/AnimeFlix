import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../../Components/Banner/index";
import ListaDeAnimesHorizontal from "../../Components/ListaDeAnimesHorizontal/index";
import TelaCarregamento from "../../Components/TelaCarregamento";
import '../../message.css';

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [lancamentos, setLancamentos] = useState([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/anime");
        const sortedAnimes = response.data.data.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
        const latestReleases = sortedAnimes.slice(0, 10);
        setAnimes(sortedAnimes);
        setLancamentos(latestReleases);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnimes();
  }, []);

  if (loading) {
    return <TelaCarregamento />;
  }

  return (
    <>
      <Banner animes={animes} />
      <ListaDeAnimesHorizontal 
        title="Mais Famosos" 
        description="Fique por dentro de todos os lançamentos"
        animes={animes}
      />
      <ListaDeAnimesHorizontal 
        title="Lançamentos" 
        description="Veja os animes mais recentes"
        animes={lancamentos}
      />
    </>
  );
};