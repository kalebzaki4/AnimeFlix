import React, { useEffect } from "react";
import PropTypes from "prop-types";

export default function Alerta({ mensagem = "Mensagem não especificada", tipo = "info", aoFechar = () => {} }) {
  useEffect(() => {
    const temporizador = setTimeout(() => {
      aoFechar();
    }, 5000);

    return () => clearTimeout(temporizador);
  }, [aoFechar]);

  if (!mensagem || !tipo) {
    return null; 
  }

  return (
    <div
      className={`alert alert-${tipo}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <span className="alert-message">{mensagem}</span>
      <button
        className="alert-close"
        onClick={aoFechar}
        aria-label="Fechar alerta"
      >
        ×
      </button>
    </div>
  );
}

Alerta.propTypes = {
  mensagem: PropTypes.string,
  tipo: PropTypes.oneOf(["success", "error", "info", "warning"]),
  aoFechar: PropTypes.func,
};

function AlertManager({ alerts, removeAlert }) {
  return (
    <div className="alert-container">
      {alerts.map((alert, index) => (
        <div key={index} className={`alert alert-${alert.type}`}>
          <span className="alert-message">{alert.message}</span>
          <button
            className="alert-close"
            onClick={() => removeAlert(index)}
            aria-label="Fechar alerta"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

AlertManager.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["success", "error", "info", "warning"]).isRequired,
    })
  ).isRequired,
  removeAlert: PropTypes.func.isRequired,
};
