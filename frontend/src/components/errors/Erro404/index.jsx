import React from 'react';
import "./Erro404.scss"
import ImgErro from "../../../assets/images/Erro.png";

const Erro404 = () => {
    return (
        <div className="error-page">
            <h1 className="error-title">Erro 404 - Página não encontrada</h1>
            <p className="error-message">Desculpe, a página que você está procurando não existe.</p>
            <p className="error-message">Volte para a <a href="/" className="error-link">página inicial</a> do nosso site de animes.</p>
            <img src={ImgErro} alt="IMG de erro" width={150} className="error-img" />
        </div>
    );
}

export default Erro404;
