import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Calendario.scss";
import { Link, useNavigate } from "react-router-dom";

const DIAS = [
  { key: "monday", label: "Segunda" },
  { key: "tuesday", label: "Terça" },
  { key: "wednesday", label: "Quarta" },
  { key: "thursday", label: "Quinta" },
  { key: "friday", label: "Sexta" },
  { key: "saturday", label: "Sábado" },
  { key: "sunday", label: "Domingo" },
];

function getTodayKey() {
  const jsDay = new Date().getDay(); // 0 = domingo, 1 = segunda, ...
  return DIAS[jsDay === 0 ? 6 : jsDay - 1].key;
}

const getHighQualityImage = (anime) =>
  anime.images?.jpg?.large_image_url ||
  anime.images?.jpg?.image_url ||
  "/fallback-image.jpg";

export default function Calendario() {
  const [calendario, setCalendario] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(getTodayKey());
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAllCalendar() {
      setLoading(true);
      let page = 1;
      let hasNext = true;
      let allData = {};
      try {
        while (hasNext) {
          const resp = await axios.get("https://api.jikan.moe/v4/schedules", {
            params: { page }
          });
          const data = resp.data.data || {};
          Object.keys(data).forEach((k) => {
            const key = k.toLowerCase();
            if (!allData[key]) allData[key] = [];
            allData[key] = allData[key].concat(data[k]);
          });
          hasNext = resp.data.pagination?.has_next_page;
          page++;
        }
        setCalendario(allData);
      } catch {
        setCalendario({});
      } finally {
        setLoading(false);
      }
    }
    fetchAllCalendar();
  }, []);

  const handleCardClick = (mal_id) => {
    navigate(`/Detalhes/${mal_id}`);
  };

  let animesDoDia = calendario[selectedDay] || [];
  if ((!animesDoDia || animesDoDia.length === 0) && !loading) {
    animesDoDia = [
      ...(calendario["other"] || []),
      ...(calendario["unknown"] || []),
    ];
  }

  return (
    <div className="page-fadein calendario-container">
      <h1 className="calendario-title">Calendário de Lançamentos</h1>
      <div className="calendario-tabs" role="tablist" aria-label="Dias da semana">
        {DIAS.map((dia) => (
          <button
            key={dia.key}
            className={`calendario-tab${selectedDay === dia.key ? " selected" : ""}`}
            onClick={() => setSelectedDay(dia.key)}
            aria-selected={selectedDay === dia.key}
            role="tab"
          >
            {dia.label}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="calendario-loading">
          <div className="calendario-spinner"></div>
          <span style={{marginLeft: 16, color: "var(--cor-texto)"}}>Carregando lançamentos...</span>
        </div>
      ) : (
        <>
          <div className="calendario-grid">
            {animesDoDia.length > 0 ? (
              animesDoDia.map((anime) => (
                <div
                  className="calendario-card"
                  key={anime.mal_id}
                  tabIndex={0}
                  role="button"
                  onClick={() => handleCardClick(anime.mal_id)}
                  onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleCardClick(anime.mal_id)}
                  aria-label={`Ver detalhes de ${anime.title}`}
                >
                  <img
                    src={getHighQualityImage(anime)}
                    alt={anime.title}
                    className="calendario-img"
                    loading="lazy"
                  />
                  <div className="calendario-info">
                    <h3 className="calendario-anime-title">{anime.title}</h3>
                    <div className="calendario-meta">
                      <Estrelas avaliacao={Number(anime.score) || 0} />
                      <span className="calendario-score">{anime.score ?? "N/A"}</span>
                      <span className="calendario-year">{anime.year ?? "?"}</span>
                    </div>
                    <p className="calendario-synopsis">
                      {anime.synopsis
                        ? anime.synopsis.slice(0, 80) + "..."
                        : "Sem sinopse disponível para este anime."}
                    </p>
                    <Link
                      to={`/Detalhes/${anime.mal_id}`}
                      className="calendario-btn"
                      tabIndex={-1}
                      onClick={e => e.stopPropagation()}
                    >
                      Ver Detalhes
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="calendario-empty">
                <p>
                  Nenhum anime agendado para este dia.
                </p>
                <p style={{fontSize: "1rem", color: "var(--cor-texto)"}}>
                  Tente outro dia ou volte mais tarde!
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
