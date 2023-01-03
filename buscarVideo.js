import { conectaApi } from "conectaApi.js";

async function buscarVideo(evento) {
    evento.preventDefalt();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa) 

    console.log(busca);
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))