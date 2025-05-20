import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    this.setState({ error, errorInfo: info });
    // Log para produção (pode ser enviado para um serviço externo)
    if (
      typeof import.meta !== "undefined" &&
      import.meta.env &&
      !(import.meta.env.MODE === "development" || import.meta.env.DEV === true)
    ) {
      // eslint-disable-next-line no-console
      console.error("Erro crítico de renderização:", error, info);
    }
  }
  render() {
    if (this.state.hasError) {
      const isDev =
        typeof import.meta !== "undefined" &&
        import.meta.env &&
        (import.meta.env.MODE === "development" || import.meta.env.DEV === true);
      if (isDev && this.state.error) {
        return (
          <div style={{ color: "#fff", background: "#b71c1c", padding: 24 }}>
            <h2>Ocorreu um erro inesperado.</h2>
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      return (
        <div style={{ color: "#fff", background: "#b71c1c", padding: 24 }}>
          <h2>Ocorreu um erro inesperado.</h2>
          <p>Por favor, recarregue a página ou tente novamente mais tarde.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};

// Fallback visual global para erros JS fora do React
function showGlobalError(message) {
  const el = document.createElement("div");
  el.style = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:#b71c1c;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:1.5rem;";
  el.innerHTML = `<h2>Erro crítico</h2><p>${message}</p>`;
  document.body.appendChild(el);
}

window.addEventListener("error", (event) => {
  console.error("Erro capturado:", event.message);
  showGlobalError("Ocorreu um erro inesperado no aplicativo.");
});
window.addEventListener("unhandledrejection", (event) => {
  console.error("Rejeição não tratada:", event.reason);
  showGlobalError("Ocorreu um erro inesperado de promessa.");
});

const rootEl = document.getElementById("root");
if (rootEl) {
  try {
    ReactDOM.createRoot(rootEl).render(
      <React.StrictMode>
        <ErrorBoundary>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (err) {
    showGlobalError("Falha ao iniciar o React: " + (err?.message || "Erro desconhecido"));
  }
} else {
  alert("Elemento root não encontrado. Não foi possível iniciar o aplicativo.");
}