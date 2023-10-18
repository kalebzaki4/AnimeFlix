import DetalhesAnimes from '../../Components/DetalhesAnime/index'
import Anime from "../../assets/images/slider-control.jpg"
import Avaliacao from "../../assets/images/star.png"
import "../../Components/ListaDeAnimes/ListaDeAnimes.css"
import "../../App.css"
import "../../Components/ListaDeAnimes/ListaDeAnimes.css"
import { useEffect } from 'react'

export default function PaginaDetalhes() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <article className="container-inative-3">
        <div className="movie-detail">
          <div className="backdrop-image" style={{ backgroundImage: `url('../../assets/images/slider-banner.jpg')` }}></div>
          <figure className="poster-box movie-poster">
            <img src={Anime} alt="Detalhes do anime" className="img-cover" />
          </figure>

          <div className="detail-box">

            <div className="detail-content">
              <h1 className="heading">One Piece</h1>

              <div className="meta-list">

                <div className="meta-item">
                  <img src={Avaliacao} alt="avaliacão do anime" width={20} height={20} />

                  <span className="span">8.4</span>
                </div>

                <div className="separator"></div>

                <div className="meta-item">1.075 eps</div>

                <div className="separator"></div>

                <div className="meta-item">1997</div>

                <div className="meta-item card-badge">PG-13</div>

              </div>

              <p className="genre">Anime, Ação, Aventura</p>

              <p className="overview">
                Monkey D. Luffy é um jovem que sempre sonhou com uma vida de liberdade. Ele sai do vilarejo onde vive para uma jornada perigosa em busca do lendário tesouro One Piece!
              </p>
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
      <DetalhesAnimes />
    </>
  )
}