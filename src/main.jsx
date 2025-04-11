import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext";

window.addEventListener("error", (event) => {
  console.error("Erro capturado:", event.message);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Rejeição não tratada:", event.reason);
});

const ErrorBoundary = ({ children }) => {
  try {
    return children;
  } catch (error) {
    console.error("Erro crítico de renderização:", error);
    return <div>Ocorreu um erro inesperado. Por favor, recarregue a página.</div>;
  }
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);