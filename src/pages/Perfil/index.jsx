import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Perfil.scss";
import axios from "axios";

// Função utilitária para garantir imagem SEMPRE
export function getAnimeImage(anime) {
  // Se for string (antigo ou url direta)
  if (typeof anime === "string") {
    if (anime.match(/\.(jpg|jpeg|png|webp|gif)$/i)) return anime;
    try {
      const obj = JSON.parse(anime);
      return getAnimeImage(obj);
    } catch {
      return "/fallback-image.jpg";
    }
  }
  // Se for array (caso bizarro)
  if (Array.isArray(anime) && anime.length > 0) return getAnimeImage(anime[0]);
  // Se for objeto com imagens Jikan
  if (anime?.images?.jpg?.large_image_url) return anime.images.jpg.large_image_url;
  if (anime?.images?.jpg?.image_url) return anime.images.jpg.image_url;
  // Se for objeto com campo images string
  if (typeof anime?.images === "string" && anime.images.match(/\.(jpg|jpeg|png|webp|gif)$/i)) return anime.images;
  // Outros campos comuns
  if (anime?.image_url) return anime.image_url;
  if (anime?.large_image_url) return anime.large_image_url;
  if (anime?.poster) return anime.poster;
  if (anime?.coverImage) return anime.coverImage;
  // Se for objeto com url direta
  if (typeof anime?.url === "string" && anime.url.match(/\.(jpg|jpeg|png|webp|gif)$/i)) return anime.url;
  // Se for objeto com campo "src"
  if (typeof anime?.src === "string" && anime.src.match(/\.(jpg|jpeg|png|webp|gif)$/i)) return anime.src;
  // Se for objeto com campo "thumbnail"
  if (typeof anime?.thumbnail === "string" && anime.thumbnail.match(/\.(jpg|jpeg|png|webp|gif)$/i)) return anime.thumbnail;
  // Se for objeto com campo "posterImage"
  if (typeof anime?.posterImage === "string" && anime.posterImage.match(/\.(jpg|jpeg|png|webp|gif)$/i)) return anime.posterImage;
  // Se for objeto com campo "original" aninhado
  if (anime?.posterImage?.original) return anime.posterImage.original;
  // Se for objeto com campo "medium" aninhado
  if (anime?.posterImage?.medium) return anime.posterImage.medium;
  // Se for objeto com campo "url" aninhado
  if (anime?.posterImage?.url) return anime.posterImage.url;
  // Se for objeto com campo "attributes" (Kitsu)
  if (anime?.attributes?.posterImage?.original) return anime.attributes.posterImage.original;
  if (anime?.attributes?.posterImage?.large) return anime.attributes.posterImage.large;
  if (anime?.attributes?.posterImage?.medium) return anime.attributes.posterImage.medium;
  // Fallback
  return "/fallback-image.jpg";
}

export default function Perfil() {
  const { user, savedAnimes, removeAnime } = useAuth();
  const navigate = useNavigate();

  // Estado para imagens buscadas dinamicamente
  const [imgCache, setImgCache] = useState({});
  // Estado para ids em remoção
  const [removingIds, setRemovingIds] = useState([]);

  useEffect(() => {
    // Para cada anime salvo sem imagem, busca na API Jikan
    async function fetchMissingImages() {
      const missing = savedAnimes.filter(anime => {
        const img = getAnimeImage(anime);
        return (
          (!img || img === "/fallback-image.jpg") &&
          anime?.mal_id &&
          !imgCache[anime.mal_id]
        );
      });
      if (missing.length === 0) return;
      const promises = missing.map(async anime => {
        try {
          const resp = await axios.get(`https://api.jikan.moe/v4/anime/${anime.mal_id}`);
          const img =
            resp.data?.data?.images?.jpg?.large_image_url ||
            resp.data?.data?.images?.jpg?.image_url ||
            "/fallback-image.jpg";
          return { mal_id: anime.mal_id, img };
        } catch {
          return { mal_id: anime.mal_id, img: "/fallback-image.jpg" };
        }
      });
      const results = await Promise.all(promises);
      setImgCache(prev => {
        const next = { ...prev };
        results.forEach(({ mal_id, img }) => {
          next[mal_id] = img;
        });
        return next;
      });
    }
    fetchMissingImages();
    // eslint-disable-next-line
  }, [savedAnimes]);

  // Handler com animação de remoção
  const handleRemoveAnime = (malId) => {
    setRemovingIds((prev) => [...prev, malId]);
    setTimeout(() => {
      removeAnime(malId);
      setRemovingIds((prev) => prev.filter(id => id !== malId));
    }, 400); // tempo igual ao da animação CSS
  };

  return (
    <div className="perfil-container">
      <h1 className="perfil-title">Meu Perfil</h1>
      <div className="perfil-info">
        <div>
          <strong>Usuário:</strong> {user?.username || user?.email || "Desconhecido"}
        </div>
        <div>
          <strong>Email:</strong> {user?.email || "Desconhecido"}
        </div>
      </div>
      <h2 className="perfil-subtitle">Animes Salvos</h2>
      {savedAnimes.length === 0 ? (
        <div className="perfil-empty">Nenhum anime salvo.</div>
      ) : (
        <div className="perfil-animes-list">
          {savedAnimes.map((anime, idx) => {
            const malId = anime?.mal_id || anime?.id || anime?.malId || idx;
            const title = anime?.title || anime?.canonicalTitle || "Sem título";
            let imgSrc = getAnimeImage(anime);
            if ((!imgSrc || imgSrc === "/fallback-image.jpg") && imgCache[malId]) {
              imgSrc = imgCache[malId];
            }
            const isRemoving = removingIds.includes(malId);
            return (
              <div
                className={`perfil-anime-card${isRemoving ? " removendo" : ""}`}
                key={malId + "-" + title}
                tabIndex={0}
                role="button"
                onClick={() => navigate(`/Detalhes/${malId}`)}
                onKeyDown={e => (e.key === "Enter" || e.key === " ") && navigate(`/Detalhes/${malId}`)}
                aria-label={`Ver detalhes de ${title}`}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={imgSrc}
                  alt={title}
                  className="perfil-anime-img"
                  onError={e => { e.target.src = "/fallback-image.jpg"; }}
                />
                <div className="perfil-anime-info">
                  <h3>{title}</h3>
                  <button
                    className="perfil-remove-btn"
                    onClick={e => {
                      e.stopPropagation();
                      if (!isRemoving) handleRemoveAnime(malId);
                    }}
                    title="Remover anime salvo"
                    disabled={isRemoving}
                  >
                    Remover
                  </button>
                  <Link
                    to={`/Detalhes/${malId}`}
                    className="perfil-details-link"
                    onClick={e => e.stopPropagation()}
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
