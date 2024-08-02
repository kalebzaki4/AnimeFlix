// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'; // Arquivo CSS para estilos do Footer

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Animeflix</h3>
          <p>Animeflix é a sua plataforma de streaming de animes favorita. Acesse seu conteúdo de anime favorito de qualquer lugar!</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Navegação</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/popular">Populares</Link></li>
            <li><Link to="/novidades">Novidades</Link></li>
            <li><Link to="/az">A-Z</Link></li>
            <li><Link to="/calendario">Calendário</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contato</h3>
          <ul className="footer-links">
            <li><a href="mailto:suporte@animeflix.com">Email: suporte@animeflix.com</a></li>
            <li>Telefone: (11) 99999-9999</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Siga-nos</h3>
          <div className="social-icons">
            {/* Ícones sociais (sem Facebook ou Instagram) */}
            <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path d="M22.46 6c-.77.35-1.59.57-2.46.67a4.31 4.31 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.73 1.05 4.29 4.29 0 0 0-7.3 3.92A12.14 12.14 0 0 1 3.1 4.96a4.28 4.28 0 0 0-.58 2.16c0 1.48.75 2.79 1.89 3.56a4.28 4.28 0 0 1-1.95-.54v.05a4.3 4.3 0 0 0 3.44 4.21 4.28 4.28 0 0 1-1.94.07 4.29 4.29 0 0 0 4 3 8.59 8.59 0 0 1-5.3 1.83c-.34 0-.68-.02-1.02-.06a12.11 12.11 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.73 8.73 0 0 0 22.46 6z"/></svg>
            </a>
            <a href="https://www.youtube.com" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24"><path d="M21.58 7.52c-.25-.96-.98-1.7-1.91-1.95-1.66-.44-8.34-.44-8.34-.44s-6.68 0-8.34.44c-.93.25-1.66.99-1.91 1.95-.43 1.66-.43 5.12-.43 5.12s0 3.46.43 5.12c.25.96.98 1.7 1.91 1.95 1.66.44 8.34.44 8.34.44s6.68 0 8.34-.44c.93-.25 1.66-.99 1.91-1.95.43-1.66.43-5.12.43-5.12s0-3.46-.43-5.12zM9.54 14.91V9.51l4.97 2.7-4.97 2.7z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Animeflix. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
