import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Alert.scss";

export default function Alerta({ mensagem, tipo, aoFechar }) {
  useEffect(() => {
    const temporizador = setTimeout(() => {
      aoFechar();
    }, 5000); 

    return () => clearTimeout(temporizador);
  }, [aoFechar]);

  return (
    <div className={`alert alert-${tipo}`}>
      <span className="alert-message">{mensagem}</span>
      <button className="alert-close" onClick={aoFechar} aria-label="Fechar alerta">
        ×
      </button>
    </div>
  );
}

Alerta.propTypes = {
  mensagem: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(["success", "error", "info", "warning"]).isRequired,
  aoFechar: PropTypes.func.isRequired,
};
