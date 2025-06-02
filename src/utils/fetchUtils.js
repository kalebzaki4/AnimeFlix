import axios from "axios";

// Cache simples em memória para imagens do Kitsu (sessão atual)
const kitsuImageCache = {};

/**
 * Busca imagem alternativa no Kitsu para um anime pelo mal_id, com cache.
 * @param {number} malId
 * @returns {Promise<string|null>}
 */
export async function fetchKitsuImage(malId) {
  if (!malId) return null;
  if (kitsuImageCache[malId]) return kitsuImageCache[malId];
  try {
    const resp = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[malId]=${malId}`
    );
    const data = resp.data.data?.[0];
    const img =
      data?.attributes?.posterImage?.original ||
      data?.attributes?.posterImage?.large ||
      data?.attributes?.posterImage?.medium ||
      null;
    if (img) kitsuImageCache[malId] = img;
    return img;
  } catch {
    kitsuImageCache[malId] = null;
    return null;
  }
}

/**
 * Busca imagens alternativas para uma lista de animes, evitando requisições duplicadas.
 * @param {Array} animes
 * @returns {Promise<Object>} { mal_id: url }
 */
export async function fetchMissingImages(animes) {
  const missing = animes.filter(
    (anime) =>
      anime?.mal_id &&
      !anime.images?.jpg?.large_image_url &&
      !kitsuImageCache[anime.mal_id]
  );
  if (missing.length === 0) return {};
  const results = await Promise.all(
    missing.map(async (anime) => ({
      mal_id: anime.mal_id,
      img: await fetchKitsuImage(anime.mal_id),
    }))
  );
  const altImages = {};
  results.forEach(({ mal_id, img }) => {
    if (img) altImages[mal_id] = img;
  });
  return altImages;
}
