import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../../components/layout/Banner";
import ListaDeAnimesHorizontal from "../../components/animes/ListaDeAnimesHorizontal";
import TelaCarregamento from "../../components/common/TelaCarregamento";
import { useAuth } from "../../context/AuthContext";
import "../../styles/message.scss";

export default function Inicio() {
  const [loading, setLoading] = useState(true);
  const [animesFamosos, setAnimesFamosos] = useState(() => {
    const cachedFamosos = sessionStorage.getItem("animesFamosos");
    return cachedFamosos ? JSON.parse(cachedFamosos) : [];
  });
  const [lancamentos, setLancamentos] = useState(() => {
    const cachedLancamentos = sessionStorage.getItem("lancamentos");
    return cachedLancamentos ? JSON.parse(cachedLancamentos) : [];
  });

  const { isAuthenticated, savedAnimes } = useAuth();

  const fetchAnimes = async () => {
    setLoading(true);
    try {
      const famososResponse = await axios.get(
        "https://api.jikan.moe/v4/top/anime",
        {
          params: {
            type: "tv",
            limit: 25,
            sort: "bypopularity",
          },
        }
      );

      const lancamentosResponse = await axios.get(
        "https://api.jikan.moe/v4/seasons/now",
        {
          params: {
            limit: 25,
          },
        }
      );

      const famososData = famososResponse.data.data.filter(anime => anime.images?.jpg?.image_url).map(anime => ({
        ...anime,
        score: parseFloat(anime.score) || 0,
      }));

      const lancamentosData = lancamentosResponse.data.data.filter(anime => anime.images?.jpg?.image_url).map(anime => ({
        ...anime,
        score: parseFloat(anime.score) || 0,
      }));

      setAnimesFamosos(famososData);
      setLancamentos(lancamentosData);

      sessionStorage.setItem("animesFamosos", JSON.stringify(famososData));
      sessionStorage.setItem("lancamentos", JSON.stringify(lancamentosData));

      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados de animes:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (animesFamosos.length === 0 || lancamentos.length === 0) {
      fetchAnimes();
    } else {
      setLoading(false);
    }
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
        disableLoadingIndicator={true}
        loadMoreAnimes={() => {}}
      />
      <ListaDeAnimesHorizontal
        title="Lançamentos"
        description="Os animes mais recentes da temporada"
        animes={lancamentos}
        onClick={handleClick}
        disableLoadingIndicator={true}
        loadMoreAnimes={() => {}}
      />
      {isAuthenticated && savedAnimes.length > 0 && (
        <ListaDeAnimesHorizontal
          title="Animes Salvos"
          description="Seus animes favoritos salvos"
          animes={savedAnimes}
          onClick={handleClick}
          disableLoadingIndicator={true}
          loadMoreAnimes={() => {}}
        />
      )}
    </>
  );
}
