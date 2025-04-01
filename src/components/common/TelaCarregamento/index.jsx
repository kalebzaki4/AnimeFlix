import React, { useEffect, useState } from 'react';
import './TelaCarregamento.scss';

export default function TelaCarregamento() {
  const [mostrarCarregamento, setMostrarCarregamento] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setMostrarCarregamento(false);
    }, 3000); // Tempo de exibição aumentado para 1000ms (1 segundo)

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
