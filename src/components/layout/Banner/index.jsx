import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Banner.scss";
import play from "../../../assets/images/play_circle.png";

function getSafeImage(anime, type = "large") {
  if (!anime?.images?.jpg) return "/fallback-image.jpg";
  const imgs = anime.images.jpg || {};
  if (type === "large") return imgs.large_image_url || imgs.image_url || "/fallback-image.jpg";
  return imgs.image_url || imgs.large_image_url || "/fallback-image.jpg";
}

export default function Banner({ animes = [] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState("right");
  const [shuffled, setShuffled] = useState([]);
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (!Array.isArray(animes) || animes.length === 0) return setShuffled([]);
    const arr = [...animes];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // unique titles
    const seen = new Set();
    const unique = arr.filter(a => {
      if (seen.has(a.title)) return false; seen.add(a.title); return true;
    });
    setShuffled(unique);
    setIndex(0);
  }, [animes]);

  // Auto advance
  useEffect(() => {
    if (shuffled.length <= 1 || paused) return;
    const t = setInterval(() => {
      setDir("right");
      setIndex(i => (i === shuffled.length - 1 ? 0 : i + 1));
    }, 6000);
    return () => clearInterval(t);
  }, [shuffled.length, paused]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') { setDir('left'); setIndex(i => (i === 0 ? shuffled.length - 1 : i - 1)); }
      if (e.key === 'ArrowRight') { setDir('right'); setIndex(i => (i === shuffled.length - 1 ? 0 : i + 1)); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shuffled.length]);

  const goTo = useCallback((to) => {
    if (to === index) return;
    setDir(to < index ? 'left' : 'right');
    setIndex(to);
  }, [index]);

  // Touch handlers for swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove = (e) => { if (!touchStartX.current) return; const dx = e.touches[0].clientX - touchStartX.current; if (Math.abs(dx) > 20) e.preventDefault(); };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = (e.changedTouches[0].clientX - touchStartX.current);
    if (dx > 60) { setDir('left'); setIndex(i => (i === 0 ? shuffled.length - 1 : i - 1)); }
    else if (dx < -60) { setDir('right'); setIndex(i => (i === shuffled.length - 1 ? 0 : i + 1)); }
    touchStartX.current = null;
  };

  const visible = useMemo(() => {
    // keep current, prev and next rendered for performance
    const set = new Set();
    if (!shuffled.length) return set;
    set.add(index);
    if (index > 0) set.add(index - 1); else set.add(shuffled.length - 1);
    if (index < shuffled.length - 1) set.add(index + 1); else set.add(0);
    return set;
  }, [index, shuffled.length]);

  if (!shuffled.length) return null;

  const current = shuffled[index];

  return (
    <article className="banner-wrapper">
      <section
        className="banner"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={sliderRef}
        aria-roledescription="carousel"
        aria-label="Animes em destaque"
      >
        {/* Background image with focus & progressive enhancements */}
        <div className="banner-bg" aria-hidden>
          <img src={getSafeImage(current, 'large')} alt="" className="banner-bg-img" loading="eager" onError={(e)=> e.target.src='/fallback-image.jpg'} decoding="async"/>
          <div className="banner-gradient" />
        </div>

        {/* Content card - glass style */}
        <div className="banner-content">
          <div className="info">
            <h2 className="title">{current.title}</h2>
            <div className="meta">
              <span className="year">{current.year ?? '—'}</span>
              <span className="score">{current.score ?? '—'}</span>
              <span className="eps">Episódios: {current.episodes ?? 'N/A'}</span>
            </div>
            <p className="synopsis">{current.synopsis}</p>
            <div className="actions">
              <Link to={`/Detalhes/${current.mal_id}`} className="btn-play" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
                <img src={play} alt="" width={20} height={20} aria-hidden /> Assistir
              </Link>
              <button className="btn-info" onClick={() => alert('Abrir trailer / modal - implemente conforme necessidade')}>Mais info</button>
            </div>
          </div>

          {/* Poster carousel overlay (centrado em mobile) */}
          <div className="poster-strip" aria-hidden>
            {shuffled.map((a, i) => (
              <button
                key={a.mal_id}
                className={`poster ${i === index ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Ver ${a.title}`}
                tabIndex={0}
              >
                <img src={getSafeImage(a, 'thumb')} alt={a.title} loading={i === index ? 'eager' : 'lazy'} onError={(e)=> e.target.src='/fallback-image.jpg'} decoding="async"/>
              </button>
            ))}
          </div>
        </div>

        {/* Progressive slide elements for animations (keeps DOM light) */}
        <div className={`slide-anim slide-${dir}`} aria-hidden>
          {Array.from(visible).map(i => (
            <img key={shuffled[i].mal_id} src={getSafeImage(shuffled[i], 'large')} alt="" className={`slide-img ${i === index ? 'current' : ''}`} loading="lazy"/>
          ))}
        </div>

        {/* Vertical control (desktop) and dots (mobile) */}
        <div className="controls">
          <div className="dots" role="tablist">
            {shuffled.map((_, i) => (
              <button key={i} className={`dot ${i === index ? 'on' : ''}`} onClick={() => goTo(i)} aria-label={`Slide ${i+1}`}></button>
            ))}
          </div>
        </div>

      </section>
    </article>
  );
}

Banner.propTypes = {
  animes: PropTypes.array.isRequired,
};