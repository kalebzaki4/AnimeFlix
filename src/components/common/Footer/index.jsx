import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Animeflix</h1>
        
        <h2>Contato</h2>
        
        <address>
          <a className="footer__btn" href="mailto:contato@animeflix.com">Envie-nos um e-mail</a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Explorar</h2>

          <ul className="nav__ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/services">Serviços</Link></li>
            <li><Link to="/team">Equipe</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </li>
        
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Mídia</h2>

          <ul className="nav__ul nav__ul--extra">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Vídeos</a></li>
            <li><a href="#">Podcasts</a></li>
            <li><a href="#">Galeria</a></li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>

          <ul className="nav__ul">
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Mapa do Site</a></li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; {new Date().getFullYear()} Animeflix. Todos os direitos reservados.</p>
        <div className="legal__links">
          <span>Feito com <span className="heart">♥</span> para fãs de anime</span>
        </div>
      </div>

      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
    </footer>
  );
}
