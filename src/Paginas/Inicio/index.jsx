// Inicio.js
import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner/index";
import ListaDeAnimesHorizontal from "../../Components/ListaDeAnimesHorizontal/index";
import LoadingScreen from "../../Components/TelaCarregamento"; // Certifique-se de ajustar o caminho
import '../../message.css'; // Certifique-se de que o CSS do componente está sendo importado

export default function Inicio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento de dados
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // O tempo do carregamento pode ser ajustado

    // Limpeza do timer quando o componente for desmontado
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Banner />  
      <ListaDeAnimesHorizontal 
        title="Mais Famosos" 
        description="Fique por dentro de todos os lançamentos"
      />
      <ListaDeAnimesHorizontal 
        title="Lançamentos" 
        description="Veja os animes mais recentes"
      />
    </>
  );
}
