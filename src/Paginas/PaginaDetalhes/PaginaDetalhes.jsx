import React from 'react';
import { useParams } from 'react-router-dom';

import Avaliacao from "../../assets/images/star.png";
import "./PaginaDetalhes.css";
import "../../Components/ListaDeAnimes/index"

const data = [
  {
      "id": 1,
      "titulo": "One Piece",
      "avalicao": "9.4",
      "ano": "1997",
      "imagem": "https://johto.legiaodosherois.com.br/wp-content/uploads/2021/08/legiao_4YmvHICdo9Zu.jpg",
      "genero": "Anime, Ação, Aventura",
      "sinopse": "Monkey D. Luffy é um jovem que sempre sonhou com uma vida de liberdade. Ele sai do vilarejo onde vive para uma jornada perigosa em busca do lendário tesouro One Piece!",
      "episodios": "1.075 eps"
  },
  {
      "id": 2,
      "titulo": "Jujutsu Kaisen",
      "avalicao": "7.9",
      "ano": "2020",
      "imagem": "https://a-static.mlcdn.com.br/450x450/manga-jujutsu-kaisen-batalha-de-feiticeiros-panini/poupalivros/5471p/db3bb650c9f067ca15249855d4b67d49.jpg",
      "genero": "Anime, Ação, Aventura, Sobrenatural",
      "sinopse": "Yuji Itadori, um estudante com poderes amaldiçoados, luta contra maldições e monstros amaldiçoados para salvar o mundo da aniquilação.",
      "episodios": "24 eps"
  },
  {
      "id": 3,
      "titulo": "Dragon Ball Super",
      "avalicao": "9.7",
      "ano": "2017",
      "imagem": "https://leitor.kamisama.com.br/wp-content/uploads/2021/10/dragon-ball-super-capa-volume-12.jpg",
      "genero": "Anime, Ação, Aventura, Comédia",
      "sinopse": "Goku e seus amigos enfrentam deuses e poderosos oponentes em batalhas épicas para proteger o universo.",
      "episodios": "131 eps"
  },
  {
      "id": 4,
      "titulo": "Demon Slayer",
      "avalicao": "7.7",
      "ano": "2016",
      "imagem": "https://cdn.awsli.com.br/2500x2500/770/770210/produto/167630750832c0b3993.jpg",
      "genero": "Anime, Ação, Sobrenatural",
      "sinopse": "Tanjiro Kamado se torna um caçador de demônios para vingar sua família e salvar sua irmã Nezuko, que se transformou em um demônio.",
      "episodios": "26 eps"
  },
  {
      "id": 5,
      "titulo": "Dr. Stone",
      "avalicao": "7.5",
      "ano": "2017",
      "imagem": "https://cdn.kobo.com/book-images/f4ceb0f0-5a51-4099-8903-58ebe65f3c28/1200/1200/False/dr-stone-vol-11.jpg",
      "genero": "Anime, Aventura, Ficção Científica",
      "sinopse": "Senku Ishigami utiliza ciência para reconstruir a civilização após a humanidade ser transformada em pedra por uma misteriosa luz.",
      "episodios": "24 eps"
  },
  {
      "id": 6,
      "titulo": "Blue Lock",
      "avalicao": "8.0",
      "ano": "2022",
      "imagem": "https://m.media-amazon.com/images/I/81XsRW62W5L._AC_UF1000,1000_QL80_.jpg",
      "genero": "Anime, Esportes",
      "sinopse": "Uma competição para encontrar e treinar o melhor atacante de futebol do Japão é realizada, e Isagi Youichi é um dos participantes.",
      "episodios": "Ainda em andamento"
  },
  {
      "id": 7,
      "titulo": "My Hero Academia",
      "avalicao": "7.6",
      "ano": "2014",
      "imagem": "https://m.media-amazon.com/images/I/71bELfIWTDL._SY466_.jpg",
      "genero": "Anime, Ação, Escolar",
      "sinopse": "Em um mundo onde a maioria possui superpoderes, Izuku Midoriya luta para se tornar um herói e enfrenta ameaças poderosas.",
      "episodios": "Em andamento"
  }
];


const PaginaDetalhes = () => {
  const { id } = useParams();
  const anime = data.find((item) => item.id === parseInt(id));

  if (!anime) {
    return <h1>Anime não encontrado</h1>;
  }

  return (
    <>
      <article className="container-inative-3">
        <div className="movie-detail">
          <figure className="poster-box movie-poster">
            <img src={anime.imagem} alt={`Detalhes de ${anime.titulo}`} className="img-cover" />
          </figure>
          <div className="detail-box">
            <div className="detail-content">
              <h1 className="heading">{anime.titulo}</h1>
              <div className="meta-list">
                <div className="meta-item">
                  <img src={Avaliacao} alt="avaliação do anime" width={20} height={20} />
                  <span className="span">{anime.avalicao}</span>
                </div>
                <div className="separator"></div>
                <div className="meta-item">{anime.episodios}</div>  
                <div className="separator"></div>
                <div className="meta-item">{anime.ano}</div>
                <div className="meta-item card-badge">PG-13</div>
              </div>
              <p className="genre">{anime.genero}</p>
              <p className="overview">{anime.sinopse}</p>
            </div>
            <div className="tilte-wrapper">
              <h3 className="title-large">Todos os Trailers</h3>
            </div>
            <div className="slider-list">
              <div className="slider-inner">
                <div className="video-card"></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default PaginaDetalhes;
