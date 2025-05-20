import React, { useState } from "react";
import "./Videoclipes.scss";
import { useAuth } from "../../context/AuthContext";

// Valor inicial dos vídeos
const INITIAL_VIDEOS = [
  {
    title: "LiSA - Gurenge (Demon Slayer OP)",
    url: "https://www.youtube.com/embed/pmanD_s7G3U",
    type: "Videoclipe",
  },
  {
    title: "RADWIMPS - Sparkle (Your Name OST)",
    url: "https://www.youtube.com/embed/PDSkFeMVNFs",
    type: "Videoclipe",
  },
  {
    title: "Attack on Titan - AoT Final Concert",
    url: "https://www.youtube.com/embed/8OkpRK2_gVs",
    type: "Show",
  },
  {
    title: "Yoko Takahashi - A Cruel Angel's Thesis (Live)",
    url: "https://www.youtube.com/embed/0kFhPVAhV_o",
    type: "Show",
  },
];

export default function Videoclipes() {
  const { isAuthenticated, alert, clearAlert, showAlert } = useAuth();
  const [videos, setVideos] = useState(INITIAL_VIDEOS);
  const [videoError, setVideoError] = useState({});
  const [videoLoading, setVideoLoading] = useState({});
  const [form, setForm] = useState({ title: "", url: "", type: "Videoclipe" });
  const [showForm, setShowForm] = useState(false);

  const handleIframeError = (idx) => {
    setVideoError((prev) => ({ ...prev, [idx]: true }));
    setVideoLoading((prev) => ({ ...prev, [idx]: false }));
  };

  const handleIframeLoad = (idx) => {
    setVideoLoading((prev) => ({ ...prev, [idx]: false }));
  };

  // Adiciona novo vídeo dinamicamente (apenas autenticado)
  const handleAddVideo = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      showAlert("Faça login para adicionar videoclipes.", "warning");
      return;
    }
    if (!form.title.trim() || !form.url.trim()) return;
    setVideos((prev) => [
      ...prev,
      {
        title: form.title.trim(),
        url: form.url.trim(),
        type: form.type,
      },
    ]);
    setForm({ title: "", url: "", type: "Videoclipe" });
    setShowForm(false);
    showAlert("Videoclipe adicionado!", "success");
  };

  // Remove vídeo dinamicamente (apenas autenticado)
  const handleRemoveVideo = (idx) => {
    if (!isAuthenticated) {
      showAlert("Faça login para remover videoclipes.", "warning");
      return;
    }
    setVideos((prev) => prev.filter((_, i) => i !== idx));
    setVideoError((prev) => {
      const copy = { ...prev };
      delete copy[idx];
      return copy;
    });
    setVideoLoading((prev) => {
      const copy = { ...prev };
      delete copy[idx];
      return copy;
    });
    showAlert("Videoclipe removido!", "info");
  };

  return (
    <div className="videoclipes-container">
      <h1 className="videoclipes-title" tabIndex={0}>Videoclipes & Shows</h1>
      <p className="videoclipes-desc">
        Assista, adicione ou remova videoclipes de aberturas, encerramentos e shows de animes famosos!
      </p>
      {alert && (
        <div className={`popup-alert popup-${alert.type}`} style={{ marginBottom: 16 }}>
          {alert.message}
          <button onClick={clearAlert} style={{ marginLeft: 12, background: "none", color: "#fff", border: "none", cursor: "pointer" }}>×</button>
        </div>
      )}
      <button
        className="videoclipes-add-btn"
        onClick={() => {
          if (!isAuthenticated) {
            showAlert("Faça login para adicionar videoclipes.", "warning");
            return;
          }
          setShowForm((v) => !v);
        }}
        style={{
          marginBottom: 18,
          background: "#ffb300",
          color: "#181818",
          border: "none",
          borderRadius: 8,
          padding: "8px 18px",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem",
        }}
        disabled={!isAuthenticated}
        title={isAuthenticated ? "" : "Faça login para adicionar"}
      >
        {showForm ? "Cancelar" : "Adicionar Videoclipe"}
      </button>
      {!isAuthenticated && (
        <div style={{ color: "#ffb300", marginBottom: 18, fontWeight: "bold" }}>
          Faça login para adicionar ou remover videoclipes.
        </div>
      )}
      {showForm && isAuthenticated && (
        <form
          className="videoclipes-form"
          onSubmit={handleAddVideo}
          style={{
            background: "#23272f",
            borderRadius: 12,
            padding: 16,
            marginBottom: 24,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            maxWidth: 400,
            width: "100%",
          }}
        >
          <input
            type="text"
            placeholder="Título do vídeo"
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            required
            style={{ padding: 8, borderRadius: 6, border: "1px solid #444" }}
          />
          <input
            type="url"
            placeholder="URL do vídeo (YouTube embed)"
            value={form.url}
            onChange={e => setForm(f => ({ ...f, url: e.target.value }))}
            required
            style={{ padding: 8, borderRadius: 6, border: "1px solid #444" }}
          />
          <select
            value={form.type}
            onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
            style={{ padding: 8, borderRadius: 6, border: "1px solid #444" }}
          >
            <option value="Videoclipe">Videoclipe</option>
            <option value="Show">Show</option>
          </select>
          <button
            type="submit"
            style={{
              background: "#e50914",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 18px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
              marginTop: 6,
            }}
          >
            Adicionar
          </button>
        </form>
      )}
      <div className="videoclipes-grid">
        {videos.length === 0 && (
          <div style={{ color: "#fff", fontSize: "1.2rem", textAlign: "center", gridColumn: "1/-1" }}>
            Nenhum videoclipe cadastrado.
          </div>
        )}
        {videos.map((video, idx) => (
          <div className="videoclipes-card" key={idx}>
            <div className="videoclipes-video-wrapper" aria-label={`Vídeo: ${video.title}`}>
              {videoLoading[idx] && (
                <div className="videoclipes-loading" aria-live="polite">
                  Carregando vídeo...
                </div>
              )}
              {!videoError[idx] ? (
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  tabIndex={0}
                  aria-label={video.title}
                  onError={() => handleIframeError(idx)}
                  onLoad={() => handleIframeLoad(idx)}
                  style={{ background: "#111", minHeight: 180 }}
                />
              ) : (
                <div className="videoclipes-fallback" role="alert">
                  <p>
                    Não foi possível carregar o vídeo.<br />
                    <a
                      href={video.url.replace("/embed/", "/watch?v=")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Clique aqui para assistir no YouTube
                    </a>
                  </p>
                </div>
              )}
            </div>
            <div className="videoclipes-info">
              <h3 tabIndex={0}>{video.title}</h3>
              <span className="videoclipes-type">{video.type}</span>
            </div>
            <button
              className="videoclipes-remove-btn"
              onClick={() => handleRemoveVideo(idx)}
              aria-label={`Remover vídeo ${video.title}`}
              style={{
                marginTop: 8,
                background: "#b71c1c",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "6px 14px",
                fontWeight: "bold",
                cursor: isAuthenticated ? "pointer" : "not-allowed",
                fontSize: "0.95rem",
                width: "100%",
                transition: "background 0.2s",
                opacity: isAuthenticated ? 1 : 0.6,
              }}
              disabled={!isAuthenticated}
              title={isAuthenticated ? "" : "Faça login para remover"}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
