import React from "react";
import Banner from "../../Components/Banner/index";
import ListaDeAnimesHorizontal from "../../Components/ListaDeAnimesHorizontal/index";

export default function Inicio() {
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
