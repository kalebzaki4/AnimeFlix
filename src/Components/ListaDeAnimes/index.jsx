import Estrelas from "../../assets/images/star.png"
import "./ListaDeAnimes.css"
import "../Banner/Banner.css"
import { Link } from "react-router-dom"

const data = [
    {
        "id": 1,
        "titulo": "One Piece",
        "avalicao": "9.4",
        "ano": "1997",
        "imagem": "https://johto.legiaodosherois.com.br/wp-content/uploads/2021/08/legiao_4YmvHICdo9Zu.jpg"
    },
    {
        "id": 2,
        "titulo": "Jujutsu Kaisen",
        "avalicao": "7.9",
        "ano": "2020",
        "imagem": "https://a-static.mlcdn.com.br/450x450/manga-jujutsu-kaisen-batalha-de-feiticeiros-panini/poupalivros/5471p/db3bb650c9f067ca15249855d4b67d49.jpg"
    },
    {
        "id": 3,
        "titulo": "Dragon Ball Super",
        "avalicao": "9.7",
        "ano": "2017",
        "imagem": "https://leitor.kamisama.com.br/wp-content/uploads/2021/10/dragon-ball-super-capa-volume-12.jpg"
    },
    {
        "id": 4,
        "titulo": "Demon Slayer",
        "avalicao": "7.7",
        "ano": "2016 ",
        "imagem": "https://cdn.awsli.com.br/2500x2500/770/770210/produto/167630750832c0b3993.jpg"
    },
    {
        "id": 5,
        "titulo": "Dr.STONE",
        "avalicao": "7.5",
        "ano": "2017",
        "imagem": "https://cdn.kobo.com/book-images/f4ceb0f0-5a51-4099-8903-58ebe65f3c28/1200/1200/False/dr-stone-vol-11.jpg"
    },
    {
        "id": 6,
        "titulo": "Blue Lock",
        "avalicao": "8.0",
        "ano": "2022",
        "imagem": "https://m.media-amazon.com/images/I/81XsRW62W5L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "id": 7,
        "titulo": "My Hero Academia",
        "avalicao": "7.6",
        "ano": "2014",
        "imagem": "https://m.media-amazon.com/images/I/71bELfIWTDL._SY466_.jpg"
    },
];


export default function Animes() {
    return (

        <article className="container-inative">
            <section className="movie-list" aria-label="upcoming movie">

                <div className="title-wrapper">
                    <h2 className="title-large">Mais Famosos</h2>
                </div>

                <div className="slider-list">
                    <div className="slider-inner">
                        {data.map((anime) => (
                            <div className="movie-card" key={anime.id}>
                                <figure className="poster-box card-banner">
                                    <img src={anime.imagem} alt={anime.titulo} className="img-cover" />
                                </figure>
                                <h4 className="title">{anime.titulo}</h4>
                                <div className="meta-list">
                                    <div className="meta-item">
                                        <img src={Estrelas} width={20} height={20} loading="lazy" alt="Avaliacao" />
                                        <span className="span">{anime.avalicao}</span>
                                    </div>
                                    <div className="card-badge">{anime.ano}</div>
                                </div>
                                <Link to="/Detalhes" className="card-btn" title="Detalhes"></Link>
                            </div>
                        ))}

                    </div>
                </div>

            </section>
        </article>

    )
} 