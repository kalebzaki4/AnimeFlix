import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Avaliacao from "../../assets/images/star.png";
import "./PaginaDetalhes.css";
import Animes from "../../Components/ListaDeAnimesHorizontal/index"

const data = [
  {
    "id": 1,
    "titulo": "One Piece",
    "avalicao": "9.4",
    "ano": "1997",
    "imagem": "https://johto.legiaodosherois.com.br/wp-content/uploads/2021/08/legiao_4YmvHICdo9Zu.jpg",
    "genero": "Anime, Ação, Aventura",
    "sinopse": "Monkey D. Luffy é um jovem que sempre sonhou com uma vida de liberdade. Ele sai do vilarejo onde vive para uma jornada perigosa em busca do lendário tesouro One Piece!",
    "episodios": "1.075 eps",
    "banner": "https://i.pinimg.com/564x/66/19/8d/66198d38369a0ad1b1ccb155997ba229.jpg"
  },
  {
    "id": 2,
    "titulo": "Jujutsu Kaisen",
    "avalicao": "7.9",
    "ano": "2020",
    "imagem": "https://a-static.mlcdn.com.br/450x450/manga-jujutsu-kaisen-batalha-de-feiticeiros-panini/poupalivros/5471p/db3bb650c9f067ca15249855d4b67d49.jpg",
    "genero": "Anime, Ação, Aventura, Sobrenatural",
    "sinopse": "Yuji Itadori, um estudante com poderes amaldiçoados, luta contra maldições e monstros amaldiçoados para salvar o mundo da aniquilação.",
    "episodios": "24 eps",
    "banner": "https://i.pinimg.com/564x/09/75/37/097537787839190d974f9e6c6d0bef43.jpg"
  },
  {
    "id": 3,
    "titulo": "Dragon Ball Super",
    "avalicao": "9.7",
    "ano": "2017",
    "imagem": "https://leitor.kamisama.com.br/wp-content/uploads/2021/10/dragon-ball-super-capa-volume-12.jpg",
    "genero": "Anime, Ação, Aventura, Comédia",
    "sinopse": "Goku e seus amigos enfrentam deuses e poderosos oponentes em batalhas épicas para proteger o universo.",
    "episodios": "131 eps",
    "banner": "https://i.pinimg.com/564x/d6/31/a4/d631a4ead57c784d5dcd57f50dfcf6b3.jpg"
  },
  {
    "id": 4,
    "titulo": "Demon Slayer",
    "avalicao": "7.7",
    "ano": "2016",
    "imagem": "https://cdn.awsli.com.br/2500x2500/770/770210/produto/167630750832c0b3993.jpg",
    "genero": "Anime, Ação, Sobrenatural",
    "sinopse": "Tanjiro Kamado se torna um caçador de demônios para vingar sua família e salvar sua irmã Nezuko, que se transformou em um demônio.",
    "episodios": "26 eps",
    "banner": "https://i.pinimg.com/736x/7b/e1/d5/7be1d570ab9c1544f5ad21dd5a65c608.jpg"
  },
  {
    "id": 5,
    "titulo": "Dr. Stone",
    "avalicao": "7.5",
    "ano": "2017",
    "imagem": "https://cdn.kobo.com/book-images/f4ceb0f0-5a51-4099-8903-58ebe65f3c28/1200/1200/False/dr-stone-vol-11.jpg",
    "genero": "Anime, Aventura, Ficção Científica",
    "sinopse": "Senku Ishigami utiliza ciência para reconstruir a civilização após a humanidade ser transformada em pedra por uma misteriosa luz.",
    "episodios": "24 eps",
    "banner": "https://i.pinimg.com/originals/24/1b/1a/241b1a28c1287f50bae6510b5583367b.jpg"
  },
  {
    "id": 6,
    "titulo": "Blue Lock",
    "avalicao": "8.0",
    "ano": "2022",
    "imagem": "https://m.media-amazon.com/images/I/81XsRW62W5L._AC_UF1000,1000_QL80_.jpg",
    "genero": "Anime, Esportes",
    "sinopse": "Uma competição para encontrar e treinar o melhor atacante de futebol do Japão é realizada, e Isagi Youichi é um dos participantes.",
    "episodios": "Ainda em andamento",
    "banner": "https://i.pinimg.com/originals/f9/c7/98/f9c798c5273efbc52ab5cee0d225e25e.jpg"
  },
  {
    "id": 7,
    "titulo": "My Hero Academia",
    "avalicao": "7.6",
    "ano": "2014",
    "imagem": "https://m.media-amazon.com/images/I/71bELfIWTDL._SY466_.jpg",
    "genero": "Anime, Ação, Escolar",
    "sinopse": "Em um mundo onde a maioria possui superpoderes, Izuku Midoriya luta para se tornar um herói e enfrenta ameaças poderosas.",
    "episodios": "Em andamento",
    "banner": "https://i.pinimg.com/originals/e6/41/df/e641df548260449209478e154a1f5c25.jpg"
  },
  {
    "id": 8,
    "titulo": "Attack on Titan",
    "avalicao": "9.3",
    "ano": "2013",
    "imagem": "https://i.pinimg.com/564x/53/15/6f/53156f58750523f004b27b008c896599.jpg",
    "genero": "Anime, Ação, Drama, Fantasia",
    "sinopse": "A humanidade luta contra gigantes humanoides conhecidos como Titãs para sobreviver e desvendar os segredos de sua existência.",
    "episodios": "75 eps",
    "banner": "https://i.pinimg.com/originals/a6/32/9f/a6329fe1f27b7dc420baa9b1e099ecec.png"
  },
  {
    "id": 9,
    "titulo": "Naruto",
    "avalicao": "8.8",
    "ano": "2002",
    "imagem": "https://i.pinimg.com/236x/06/da/21/06da21107cfbf5e7ce860920446bab30.jpg",
    "genero": "Anime, Ação, Aventura",
    "sinopse": "Naruto Uzumaki busca se tornar o Hokage da Vila da Folha, enquanto enfrenta desafios e inimigos poderosos.",
    "episodios": "220 eps",
    "banner": "https://i.pinimg.com/originals/50/5f/e2/505fe234462ffd1bb779f26cd8251db2.jpg"
  },
  {
    "id": 10,
    "titulo": "Death Note",
    "avalicao": "9.0",
    "ano": "2006",
    "imagem": "https://i.pinimg.com/originals/35/02/3e/35023eb752d4d26d9032356b31d23077.jpg",
    "genero": "Anime, Mistério, Psicológico",
    "sinopse": "Um estudante encontra um caderno que permite a ele matar qualquer pessoa cujo nome ele escreva nele, desencadeando um jogo de gato e rato com um detetive brilhante.",
    "episodios": "37 eps",
    "banner": "https://i.pinimg.com/originals/47/14/97/471497bea7c230e039a57ee43aa6fbae.jpg"
  },
  {
    "id": 11,
    "titulo": "Fullmetal Alchemist: Brotherhood",
    "avalicao": "9.2",
    "ano": "2009",
    "imagem": "https://upload.wikimedia.org/wikipedia/pt/9/9f/Fullmetal_Alchemist.jpg",
    "genero": "Anime, Ação, Aventura",
    "sinopse": "Dois irmãos usam a alquimia em busca da Pedra Filosofal para recuperar seus corpos após um desastre alquímico.",
    "episodios": "64 eps",
    "banner": "https://i.pinimg.com/originals/3f/da/b5/3fdab5c223a4088ec4305aa5bb4fb7b1.jpg"
  },
  {
    "id": 12,
    "titulo": "One Punch Man",
    "avalicao": "8.7",
    "ano": "2015",
    "imagem": "https://i.pinimg.com/originals/3e/bc/86/3ebc86011b616220930bca76e4779f7d.jpg",
    "genero": "Anime, Ação, Comédia",
    "sinopse": "Saitama é um herói tão poderoso que derrota todos os inimigos com um único soco, levando-o a buscar um desafio real.",
    "episodios": "24 eps",
    "banner": "https://i.pinimg.com/originals/c4/cf/7d/c4cf7dc3ed717b8b847fbf761d3607c3.jpg"
  },
];

const PaginaDetalhes = () => {

  const { id } = useParams();
  const anime = data.find((item) => item.id === parseInt(id));

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (!anime) {
    return <h1>Anime não encontrado</h1>;
  }

  const animeBackgroundStyle = {
    backgroundImage: `url(${anime.banner})`,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <article className="container-inative-3">
        <div className="movie-detail">
          <figure className="poster-box movie-poster">
            <div className="anime-background" style={animeBackgroundStyle}></div>
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
              <h3 className="title-large">Todos os Trailers:</h3>
            </div>
            <div className="slider-list">
              <div className="slider-inner">
                <div className="video-card"></div>
                <div className="video-card"></div>
                <div className="video-card"></div>
                <div className="video-card"></div>
              </div>
            </div>
            <div className="slider-list">
              <div className="slider-inner2">
                <Animes/>
              </div>
            </div>
          </div>
        </div>
      </article>

    </>
  );
}

export default PaginaDetalhes;
