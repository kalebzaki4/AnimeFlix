import React, { useEffect, useState } from 'react';
import './TelaCarregamento.css';

export default function TelaCarregamento() {
  const [mostrarCarregamento, setMostrarCarregamento] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setMostrarCarregamento(false);
    }, 500); // Tempo de exibição reduzido para 500ms

    return () => clearTimeout(temporizador); // Limpa o temporizador quando o componente é desmontado
  }, []);

  if (!mostrarCarregamento) {
    return null; // Não renderiza nada se o carregamento não deve ser mostrado
  }

  return (
    <div className="tela-carregamento">
      <div className="carregando"></div>
    </div>
  );
}
