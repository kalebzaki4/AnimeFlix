import axios from "axios";

export async function getAnimes() {
  try {
    const [famososResponse, lancamentosResponse] = await Promise.all([
      axios.get("https://api.jikan.moe/v4/top/anime", {
        params: { type: "tv", limit: 25, sort: "bypopularity" },
      }),
      axios.get("https://api.jikan.moe/v4/seasons/now", {
        params: { limit: 25 },
      }),
    ]);
    const famososData = famososResponse.data.data
      .filter(anime => anime.images?.jpg?.image_url)
      .map(anime => ({
        ...anime,
        score: parseFloat(anime.score) || 0,
      }));
    const lancamentosData = lancamentosResponse.data.data
      .filter(anime => anime.images?.jpg?.image_url)
      .map(anime => ({
        ...anime,
        score: parseFloat(anime.score) || 0,
      }));
    return { famososData, lancamentosData };
  } catch (error) {
    console.error("Erro ao buscar animes:", error);
    throw error;
  }
}

export async function getCuriosidade() {
  try {
    const res = await fetch("https://uselessfacts.jsph.pl/random.json?language=pt");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar curiosidade:", error);
    return { text: null };
  }
}
