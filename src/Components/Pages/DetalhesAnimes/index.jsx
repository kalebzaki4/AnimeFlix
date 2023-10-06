import ListaDeAnimes from "../../ListaDeAnimes";
import ImagemDoAnime from "../../../assets/images/slider-control.jpg"

export default function DetalhesAnimes() {
    <ListaDeAnimes/>
    return (
        <div className="movie-detail">
            <div className="backdrop-image" style="background-image: url('../../../assets/images/slider-banner.jpg')"></div>

            <figure className="poster-box movie-poster">
                <img src={ImagemDoAnime} alt="" className="img-cover" />
            </figure>
        </div>
    )
}