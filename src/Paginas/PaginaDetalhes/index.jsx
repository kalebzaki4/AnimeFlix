import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bookmark, BookmarkPlus } from "lucide-react"; // Ícones
import "./PaginaDetalhes.css";
import TelaCarregamento from "../../Components/TelaCarregamento"; 

const PaginaDetalhes = () => {
  const { animeId } = useParams(); 
  const [animeDetails, setAnimeDetails] = useState(null);
  const [isFullSynopsis, setIsFullSynopsis] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAnimeDetails(animeId); 
  }, [animeId]); // Executa quando o animeId mudar

  
  const fetchAnimeDetails = async (id) => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      if (!baseUrl) {
        throw new Error("A URL da API não está configurada.");
      }

      const response = await fetch(`${baseUrl}/anime/${id}`);
      if (!response.ok) {
        throw new Error('Anime não encontrado!');
      }
      const data = await response.json();
      setAnimeDetails(data.data);
    } catch (error) {
      console.error("Erro ao carregar os detalhes do anime:", error);
      setError("Ocorreu um erro ao carregar os detalhes do anime. Tente novamente mais tarde.");
      setAnimeDetails(null); 
    }
  };

  
  const toggleSynopsis = () => {
    if (isFullSynopsis) {
      window.scrollTo(0, 0); 
    }
    setIsFullSynopsis(!isFullSynopsis); 
  };

  const handleSaveAnime = () => {
    setIsSaved(!isSaved);
    alert(isSaved ? "Anime removido dos favoritos!" : "Anime salvo para mais tarde!");
  };

  if (!animeDetails && !error) {
    return <TelaCarregamento />;
  }

  // Exibe mensagem de erro
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const shortSynopsis = animeDetails.synopsis
    ? animeDetails.synopsis.slice(0, 300) + "..."
    : "";

  return (
    <div className="detalhes">
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

      <p className="P-status">
        <strong>Status:</strong> {animeDetails.status || "Informação não disponível"}
      </p>

      <div className="detalhes-sinopse">
        <p>{isFullSynopsis ? animeDetails.synopsis : shortSynopsis}</p>
        <button className="ler-mais" onClick={toggleSynopsis}>
          {isFullSynopsis ? "Ler menos" : "Ler mais"}
        </button>
      </div>

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
