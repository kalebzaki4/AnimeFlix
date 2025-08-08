import React from 'react';
import PropTypes from 'prop-types';
import './Estrelas.scss';

const EstrelaSVG = ({ tipo }) => {
  if (tipo === 'cheia') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="estrela">
        <path fill="#FFD700" d="M12 .587l3.668 7.568L24 9.423l-6 5.843L19.335 24 12 19.897 4.665 24 6 15.266 0 9.423l8.332-1.268z"/>
      </svg>
    );
  }
  if (tipo === 'meia') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="estrela">
        <defs>
          <linearGradient id="meia">
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#ccc" />
          </linearGradient>
        </defs>
        <path fill="url(#meia)" d="M12 .587l3.668 7.568L24 9.423l-6 5.843L19.335 24 12 19.897 4.665 24 6 15.266 0 9.423l8.332-1.268z"/>
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="estrela">
      <path fill="#ccc" d="M12 .587l3.668 7.568L24 9.423l-6 5.843L19.335 24 12 19.897 4.665 24 6 15.266 0 9.423l8.332-1.268z"/>
    </svg>
  );
};

const Estrelas = ({ avaliacao }) => {
  const maxEstrelas = 5;
  const estrelas = [];

  const nota = avaliacao / 2;
  const inteiras = Math.floor(nota);
  const fracao = nota - inteiras;

  for (let i = 0; i < maxEstrelas; i++) {
    if (i < inteiras) {
      estrelas.push(<EstrelaSVG key={i} tipo="cheia" />);
    } else if (i === inteiras && fracao >= 0.5) {
      estrelas.push(<EstrelaSVG key={i} tipo="meia" />);
    } else {
      estrelas.push(<EstrelaSVG key={i} tipo="vazia" />);
    }
  }

  return (
    <div className="estrelas-wrapper">
      <div className="estrelas">{estrelas}</div>
      <span className="nota">{avaliacao.toFixed(2)}</span>
    </div>
  );
};

Estrelas.propTypes = {
  avaliacao: PropTypes.number.isRequired,
};

export default Estrelas;
