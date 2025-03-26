import React from 'react';
import EstrelasImg from '../../../assets/images/star.png';
import './Estrelas.css';

const Estrelas = ({ avaliacao }) => {
  const renderEstrelas = () => {
    const estrelas = [];
    const maxEstrelas = 5;

    // Converte a avaliação de 0-10 para 0-5 estrelas
    const avaliacaoConvertida = avaliacao / 2;
    const inteiras = Math.floor(avaliacaoConvertida);
    const fracionadas = avaliacaoConvertida - inteiras;

    // Renderiza estrelas inteiras
    for (let i = 0; i < inteiras && i < maxEstrelas; i++) {
      estrelas.push(<img key={i} src={EstrelasImg} alt="Estrela" className="estrela" />);
    }

    // Renderiza estrela fracionada, se houver e se o número de estrelas inteiras for menor que 5
    if (fracionadas >= 0.5 && inteiras < maxEstrelas) {
      estrelas.push(<img key="fracionada" src={EstrelasImg} alt="Estrela Fracionada" className="estrela fracionada" />);
    }

    // Adiciona estrelas vazias para completar até 5 estrelas
    for (let i = estrelas.length; i < maxEstrelas; i++) {
      estrelas.push(<img key={`empty-${i}`} src={EstrelasImg} alt="Estrela Vazia" className="estrela empty" />);
    }

    return estrelas;
  };

  return (
    <div className="estrelas">
      {renderEstrelas()}
    </div>
  );
};

export default Estrelas;
