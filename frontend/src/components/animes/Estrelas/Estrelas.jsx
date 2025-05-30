import React from 'react';
import PropTypes from 'prop-types';  
import EstrelasImg from '../../../assets/images/star.png';  
import './Estrelas.scss';

const Estrelas = ({ avaliacao }) => {
  const renderEstrelas = () => {
    const estrelas = [];
    const maxEstrelas = 5;

    const avaliacaoConvertida = avaliacao / 2;
    const inteiras = Math.floor(avaliacaoConvertida);
    const fracionadas = avaliacaoConvertida - inteiras;


    for (let i = 0; i < inteiras && i < maxEstrelas; i++) {
      estrelas.push(<img key={i} src={EstrelasImg} alt="Estrela" className="estrela" />);
    }


    if (fracionadas >= 0.5 && inteiras < maxEstrelas) {
      estrelas.push(<img key="fracionada" src={EstrelasImg} alt="Estrela Fracionada" className="estrela fracionada" />);
    }


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

Estrelas.propTypes = {
  avaliacao: PropTypes.number.isRequired,  
};

export default Estrelas;
