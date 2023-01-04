import { conectaApi } from "conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<li class="video__item">
    <div class="movie-card">

        <a href="${url}">
            <figure class="card-banner">
                <img src="${imagem}" alt="">
            </figure>
        </a>

        <div class="title-wrapper">
            <a href="${url}">
                <h3 class="card-title">${titulo}</h3>
            </a>

            <time datetime="1997">${descricao}</time>
        </div>

        <div class="card-meta">
            <div class="badge badge-outline">HD</div>

            <div class="duration">
                <ion-icon name="time-outline"></ion-icon>

                <time datetime="PT137M">NA</time>
            </div>

            <div class="rating">
                <ion-icon name="star"></ion-icon>

                <data></data>
            </div>

        </div>


    </div>
</li>`

    return video;
}

async function listaVideos() {
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
}

listaVideos();