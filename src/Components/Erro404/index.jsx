import React from 'react';
import "./Erro404.css"

const Erro404 = () => {
    return (
        <div className="error-page">
            <h1 className="error-title">Erro 404 - Página não encontrada</h1>
            <p className="error-message">Desculpe, a página que você está procurando não existe.</p>
            <p className="error-message">Volte para a <a href="/" className="error-link">página inicial</a> do nosso site de animes.</p>
            <img src="https://animetvonline.cx/wp-content/themes/animestream_new/assets/images/404.png" alt="GIF de erro" width={200} className="error-gif" />
        </div>
    );
}

export default Erro404;
