import React from 'react';
import EstrelasImg from '../../assets/images/star.png';
import './Estrelas.css'; // Se precisar de estilos adicionais para as estrelas

const Estrelas = ({ avaliacao }) => {
  const renderEstrelas = () => {
    const estrelas = [];
    const inteiras = Math.floor(avaliacao);
    const fracionadas = avaliacao - inteiras;

    // Renderiza estrelas inteiras
    for (let i = 0; i < inteiras; i++) {
      estrelas.push(<img key={i} src={EstrelasImg} alt="Estrela" className="estrela" />);
    }

    // Renderiza estrela fracionada, se houver
    if (fracionadas >= 0.5) {
      estrelas.push(<img key="fracionada" src={EstrelasImg} alt="Estrela Fracionada" className="estrela fracionada" />);
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
