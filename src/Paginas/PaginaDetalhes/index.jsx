import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bookmark, BookmarkPlus } from "lucide-react"; // Import dos ícones
import "./PaginaDetalhes.css";
import TelaCarregamento from "../../Components/TelaCarregamento";

const PaginaDetalhes = () => {
  const { animeId } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);
  const [isFullSynopsis, setIsFullSynopsis] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAnimeDetails(animeId);
  }, [animeId]);

  const fetchAnimeDetails = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await response.json();
    setAnimeDetails(data.data);
  };

  const toggleSynopsis = () => {
    setIsFullSynopsis(!isFullSynopsis);
  };

  const handleSaveAnime = () => {
    setIsSaved(!isSaved);
    alert(isSaved ? "Anime removido dos favoritos!" : "Anime salvo para mais tarde!");
  };

  if (!animeDetails) {
    return <TelaCarregamento />;
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
          />
        </div>
      ) : (
        <div className="detalhes-trailer-placeholder">
          <p>Trailer não disponível</p>
        </div>
      )}

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
      </div>
    </div>
  );
};

export default PaginaDetalhes;
