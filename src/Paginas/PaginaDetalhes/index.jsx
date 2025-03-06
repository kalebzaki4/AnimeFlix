import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bookmark, BookmarkPlus } from "lucide-react"; // Ícones
import "./PaginaDetalhes.css";
import TelaCarregamento from "../../Components/TelaCarregamento"; // Componente de loading

const PaginaDetalhes = () => {
  const { animeId } = useParams(); // Obtém o ID do anime da URL
  const [animeDetails, setAnimeDetails] = useState(null);
  const [isFullSynopsis, setIsFullSynopsis] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    fetchAnimeDetails(animeId); // Chama a API para obter os detalhes
  }, [animeId]); // Executa quando o animeId mudar

  // Função que chama a API para buscar detalhes do anime
  const fetchAnimeDetails = async (id) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
      if (!response.ok) {
        throw new Error('Anime não encontrado!');
      }
      const data = await response.json();
      setAnimeDetails(data.data);
    } catch (error) {
      console.error("Erro ao carregar os detalhes do anime:", error);
      setAnimeDetails(null); // Caso haja erro, o estado fica null
    }
  };

  // Função para alternar a exibição da sinopse
  const toggleSynopsis = () => {
    if (isFullSynopsis) {
      // Quando o "Ler menos" for clicado, rola para o topo
      window.scrollTo(0, 0); // Rola para o topo da página
    }
    setIsFullSynopsis(!isFullSynopsis); // Alterna entre mostrar ou não a sinopse completa
  };

  // Função para salvar o anime nos favoritos
  const handleSaveAnime = () => {
    setIsSaved(!isSaved);
    alert(isSaved ? "Anime removido dos favoritos!" : "Anime salvo para mais tarde!");
  };

  // Exibe a tela de carregamento enquanto os detalhes não são carregados
  if (!animeDetails) {
    return <TelaCarregamento />;
  }

  // Exibe uma versão resumida da sinopse
  const shortSynopsis = animeDetails.synopsis
    ? animeDetails.synopsis.slice(0, 300) + "..."
    : "";

  return (
    <div className="detalhes">
      {/* Se houver trailer, exibe o iframe com o vídeo */}
      {animeDetails.trailer?.embed_url ? (
        <div className="detalhes-trailer">
          <iframe
            src={animeDetails.trailer.embed_url}
            title="Trailer"
            allowFullScreen
            className="anime-trailer"
          />
        </div>
      ) : (
        <div className="detalhes-trailer-placeholder">
          <p>Trailer não disponível</p>
        </div>
      )}

      {/* Título e botão de salvar */}
      <div className="detalhes-titulo">
        <h1 className="Title">{animeDetails.title}</h1>
        <button className="save-button" onClick={handleSaveAnime}>
          {isSaved ? <Bookmark /> : <BookmarkPlus />}
        </button>
      </div>

      {/* Status do anime */}
      <p className="P-status">
        <strong>Status:</strong> {animeDetails.status || "Informação não disponível"}
      </p>

      {/* Exibição da sinopse */}
      <div className="detalhes-sinopse">
        <p>{isFullSynopsis ? animeDetails.synopsis : shortSynopsis}</p>
        <button className="ler-mais" onClick={toggleSynopsis}>
          {isFullSynopsis ? "Ler menos" : "Ler mais"}
        </button>
      </div>

      {/* Exibição dos episódios, caso existam */}
      <div className="proximo-episodio">
        <h2>EPISÓDIOS:</h2>
        {animeDetails.episodes && animeDetails.episodes.length > 0 ? (
          <div className="episodios-container">
            {animeDetails.episodes.map((episodio) => (
              <div key={episodio.mal_id} className="episodio-card">
                <img
                  src={episodio.image_url || "https://via.placeholder.com/150"}
                  alt={episodio.title}
                  className="episodio-imagem"
                />
                <div className="episodio-info">
                  <h3>{episodio.title}</h3>
                  <p>{episodio.synopsis ? episodio.synopsis.slice(0, 100) + "..." : "Sem sinopse disponível"}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Não há episódios disponíveis.</p>
        )}
      </div>
    </div>
  );
};

export default PaginaDetalhes;
