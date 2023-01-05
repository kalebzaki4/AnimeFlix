async function listaVideos() {
    const conexao = await fetch ("http://localhost:3000/animes")
    const conexaConvertida = await conexao.json()
    
    return conexaConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/animes?q=${termoDeBusca}`)
    const conexaConvertida = conexao.json()

    return conexaConvertida
}

export const conectaApi = {
    listaVideos,
    buscaVideo
}