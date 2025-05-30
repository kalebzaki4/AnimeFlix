import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { validateUsername, validatePassword } from "../../utils/validationUtils";
import { FaUserEdit, FaEnvelope, FaLock, FaTrashAlt } from "react-icons/fa";
import "./Configuracoes.scss";

export default function Configuracoes() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState(user?.username || "");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState({ username: "", password: "", newPassword: "", confirmNewPassword: "" });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Responsividade
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", onResize);

    // Fechar modal de exclusão e mensagens com ESC
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowDeleteConfirm(false);
        setMessage(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // Animação de feedback para botões
  const [btnAnim, setBtnAnim] = useState({ perfil: false, senha: false, danger: false });

  // Validação de perfil
  const handleProfileSave = (e) => {
    e.preventDefault();
    const usernameError = validateUsername(username);
    setErrors((prev) => ({ ...prev, username: usernameError }));
    if (usernameError) {
      setMessage({ type: "error", text: usernameError });
      return;
    }
    setBtnAnim(a => ({ ...a, perfil: true }));
    setTimeout(() => setBtnAnim(a => ({ ...a, perfil: false })), 600);
    setMessage({ type: "success", text: "Nome de usuário atualizado!" });
  };

  // Validação de senha
  const handlePasswordChange = (e) => {
    e.preventDefault();
    let hasError = false;
    let passwordError = "", newPasswordError = "", confirmNewPasswordError = "";

    if (!password || !newPassword || !confirmNewPassword) {
      setMessage({ type: "error", text: "Preencha todos os campos de senha." });
      return;
    }
    newPasswordError = validatePassword(newPassword);
    if (newPassword !== confirmNewPassword) {
      confirmNewPasswordError = "As novas senhas não coincidem.";
      hasError = true;
    }
    if (newPasswordError) hasError = true;

    setErrors((prev) => ({
      ...prev,
      password: passwordError,
      newPassword: newPasswordError,
      confirmNewPassword: confirmNewPasswordError,
    }));

    if (hasError) {
      setMessage({ type: "error", text: newPasswordError || confirmNewPasswordError });
      return;
    }
    setBtnAnim(a => ({ ...a, senha: true }));
    setTimeout(() => setBtnAnim(a => ({ ...a, senha: false })), 600);
    setPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setMessage({ type: "success", text: "Senha alterada com sucesso!" });
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDeleteAccount = () => {
    setShowDeleteConfirm(false);
    setBtnAnim(a => ({ ...a, danger: true }));
    setTimeout(() => setBtnAnim(a => ({ ...a, danger: false })), 600);
    logout();
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  // Animação de entrada
  const [show, setShow] = useState(false);
  React.useEffect(() => {
    setTimeout(() => setShow(true), 80);
  }, []);

  return (
    <div
      className={`page-fadein configuracoes-container animated-fadein${show ? " show" : ""}`}
      style={{
        background: "#181818",
        maxWidth: isMobile ? "100vw" : 520,
        padding: isMobile ? "4vw 0 18px 0" : "32px 22px 32px 22px",
        borderRadius: isMobile ? 0 : 16,
        boxShadow: isMobile ? "none" : "0 2px 16px #0005",
        color: "#fff",
        minHeight: "100vh"
      }}
    >
      <h1
        className="configuracoes-title"
        style={{
          fontSize: isMobile ? "1.25rem" : "2.2rem",
          gap: isMobile ? 4 : 8,
          padding: isMobile ? "0 8px" : 0,
          color: "#ffb300",
          textShadow: "0 2px 8px #000a"
        }}
      >
        <FaUserEdit style={{ marginRight: isMobile ? 6 : 10, color: "#ffb300", verticalAlign: "middle" }} />
        Configurações da Conta
      </h1>
      <p
        className="configuracoes-desc"
        style={{
          fontSize: isMobile ? "1rem" : "1.08rem",
          marginBottom: isMobile ? 10 : 18,
          marginTop: 2,
          padding: isMobile ? "0 8px" : 0,
          color: "#bbb"
        }}
      >
        Personalize sua experiência, altere dados e gerencie sua conta AnimeFlix.
      </p>
      {message && (
        <div
          className={`configuracoes-message ${message.type} animated-pop`}
          style={{
            fontSize: isMobile ? "0.97rem" : "1.05rem",
            padding: isMobile ? "8px 8px" : "10px 16px",
            background: message.type === "success" ? "#23272f" : "#2a1818",
            color: "#ffb300",
            border: "1px solid #444"
          }}
          tabIndex={0}
          aria-live="polite"
          role={message.type === "error" ? "alert" : "status"}
        >
          {message.text}
          <button
            onClick={() => setMessage(null)}
            className="close-msg-btn"
            aria-label="Fechar mensagem"
            tabIndex={0}
            autoFocus
            style={{ color: "#ffb300" }}
          >×</button>
        </div>
      )}

      <section
        className="configuracoes-section animated-slidein"
        style={{
          marginBottom: isMobile ? 14 : 28,
          padding: isMobile ? "10px 2vw 12px 2vw" : "16px 0 18px 0",
          borderRadius: isMobile ? 10 : 14,
          background: "#23272f",
          boxShadow: "0 1.5px 12px #0002"
        }}
      >
        <h2 style={{
          fontSize: isMobile ? "1rem" : "1.18rem",
          gap: isMobile ? 2 : 4,
          color: "#ffb300",
          display: "flex",
          alignItems: "center"
        }}>
          <FaUserEdit style={{ marginRight: 8, color: "#ffb300" }} /> Perfil
        </h2>
        <form onSubmit={handleProfileSave} className="configuracoes-form" autoComplete="off">
          <label style={isMobile ? { fontSize: "0.98rem" } : {}} htmlFor="username-input">
            Nome de usuário:
            <div className="input-icon-wrapper">
              <input
                id="username-input"
                type="text"
                value={username}
                minLength={3}
                maxLength={8}
                pattern="^[a-zA-Z0-9_]{3,8}$"
                onChange={e => setUsername(e.target.value.slice(0, 8))}
                required
                autoComplete="off"
                className={errors.username ? "input-error" : ""}
                spellCheck={false}
                placeholder="Seu nome de usuário"
                style={{
                  fontWeight: 500,
                  letterSpacing: 0.02,
                  fontSize: isMobile ? "1rem" : undefined,
                  padding: isMobile ? "8px 10px" : undefined,
                  width: "100%",
                  outline: errors.username ? "2px solid #e53935" : undefined,
                }}
                aria-invalid={!!errors.username}
                aria-describedby="username-hint"
                tabIndex={0}
              />
              <FaUserEdit className="input-icon" />
            </div>
            <span id="username-hint" className="field-hint" style={isMobile ? { fontSize: "0.9rem" } : { }}>
              Entre 3 e 8 caracteres, apenas letras, números ou _
            </span>
            {errors.username && <span className="field-error">{errors.username}</span>}
          </label>
          <label style={isMobile ? { fontSize: "0.98rem" } : {}} htmlFor="email-input">
            Email:
            <div className="input-icon-wrapper">
              <input
                id="email-input"
                type="email"
                value={user?.email || ""}
                readOnly
                disabled
                style={{
                  background: "#23272f",
                  color: "#bbb",
                  cursor: "not-allowed",
                  fontWeight: 500,
                  fontSize: isMobile ? "1rem" : undefined,
                  padding: isMobile ? "8px 10px" : undefined,
                  width: "100%",
                }}
                placeholder="Seu email"
                tabIndex={-1}
                aria-readonly="true"
              />
              <FaEnvelope className="input-icon" />
            </div>
            <span className="field-hint" style={isMobile ? { fontSize: "0.9rem" } : { }}>
              Seu email não pode ser alterado.
            </span>
          </label>
          <button
            type="submit"
            className={`configuracoes-btn${btnAnim.perfil ? " btn-animate" : ""}`}
            tabIndex={0}
            style={{
              marginTop: isMobile ? 10 : 18,
              fontSize: isMobile ? "1rem" : "1.09rem",
              width: "100%",
              padding: isMobile ? "10px 0" : undefined,
              outline: "none"
            }}
            aria-label="Salvar nome de usuário"
          >
            Salvar Nome
          </button>
        </form>
      </section>

      <section
        className="configuracoes-section animated-slidein delay-1"
        style={{
          marginBottom: isMobile ? 14 : 28,
          padding: isMobile ? "10px 2vw 12px 2vw" : "16px 0 18px 0",
          borderRadius: isMobile ? 10 : 14,
          background: "#23272f",
          boxShadow: "0 1.5px 12px #0002"
        }}
      >
        <h2 style={{
          fontSize: isMobile ? "1rem" : "1.18rem",
          gap: isMobile ? 2 : 4,
          color: "#ffb300",
          display: "flex",
          alignItems: "center"
        }}>
          <FaLock style={{ marginRight: 8, color: "#ffb300" }} /> Alterar Senha
        </h2>
        <form onSubmit={handlePasswordChange} className="configuracoes-form" autoComplete="off">
          <label style={isMobile ? { fontSize: "0.98rem" } : {}} htmlFor="senha-atual">
            Senha atual:
            <div className="input-icon-wrapper">
              <input
                id="senha-atual"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className={errors.password ? "input-error" : ""}
                placeholder="Digite sua senha atual"
                style={{
                  fontSize: isMobile ? "1rem" : undefined,
                  padding: isMobile ? "8px 10px" : undefined,
                  width: "100%",
                  outline: errors.password ? "2px solid #e53935" : undefined,
                }}
                aria-invalid={!!errors.password}
                tabIndex={0}
              />
              <FaLock className="input-icon" />
            </div>
          </label>
          <label style={isMobile ? { fontSize: "0.98rem" } : {}} htmlFor="nova-senha">
            Nova senha:
            <div className="input-icon-wrapper">
              <input
                id="nova-senha"
                type="password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                autoComplete="new-password"
                required
                className={errors.newPassword ? "input-error" : ""}
                placeholder="Nova senha segura"
                style={{
                  fontSize: isMobile ? "1rem" : undefined,
                  padding: isMobile ? "8px 10px" : undefined,
                  width: "100%",
                  outline: errors.newPassword ? "2px solid #e53935" : undefined,
                }}
                aria-invalid={!!errors.newPassword}
                aria-describedby="senha-hint"
                tabIndex={0}
              />
              <FaLock className="input-icon" />
            </div>
            <span id="senha-hint" className="field-hint" style={isMobile ? { fontSize: "0.9rem" } : { }}>
              Mínimo 8 caracteres, incluindo maiúsculas, minúsculas, número e símbolo.
            </span>
            {errors.newPassword && <span className="field-error">{errors.newPassword}</span>}
          </label>
          <label style={isMobile ? { fontSize: "0.98rem" } : {}} htmlFor="confirmar-nova-senha">
            Confirmar nova senha:
            <div className="input-icon-wrapper">
              <input
                id="confirmar-nova-senha"
                type="password"
                value={confirmNewPassword}
                onChange={e => setConfirmNewPassword(e.target.value)}
                autoComplete="new-password"
                required
                className={errors.confirmNewPassword ? "input-error" : ""}
                placeholder="Repita a nova senha"
                style={{
                  fontSize: isMobile ? "1rem" : undefined,
                  padding: isMobile ? "8px 10px" : undefined,
                  width: "100%",
                  outline: errors.confirmNewPassword ? "2px solid #e53935" : undefined,
                }}
                aria-invalid={!!errors.confirmNewPassword}
                tabIndex={0}
              />
              <FaLock className="input-icon" />
            </div>
            {errors.confirmNewPassword && <span className="field-error">{errors.confirmNewPassword}</span>}
          </label>
          <button
            type="submit"
            className={`configuracoes-btn${btnAnim.senha ? " btn-animate" : ""}`}
            tabIndex={0}
            style={{
              marginTop: isMobile ? 10 : 18,
              fontSize: isMobile ? "1rem" : "1.09rem",
              width: "100%",
              padding: isMobile ? "10px 0" : undefined,
              outline: "none"
            }}
            aria-label="Alterar senha"
          >
            Alterar Senha
          </button>
        </form>
      </section>

      <section
        className="configuracoes-section danger-zone animated-slidein delay-3"
        style={{
          ...(isMobile
            ? {
                marginBottom: 10,
                padding: "10px 2vw 12px 2vw",
                borderRadius: 10,
                position: "relative",
                paddingBottom: 60,
              }
            : {
                marginBottom: 0,
                padding: "18px 0 18px 0",
                borderRadius: 14,
              }),
          background: "linear-gradient(90deg, #2a1818 80%, #e5393522 100%)",
          borderTop: "2.5px solid #e53935",
          boxShadow: "0 2px 18px #e5393533"
        }}
      >
        <div className="danger-header" style={isMobile ? { gap: 10 } : {}}>
          <div className="danger-icon" style={isMobile ? { width: 44, height: 44, minWidth: 44, minHeight: 44 } : {}}>
            <FaTrashAlt size={isMobile ? 28 : 38} color="#e53935" />
          </div>
          <div>
            <h2 style={{
              color: "#e53935",
              margin: 0,
              fontWeight: 800,
              fontSize: isMobile ? "1.05rem" : "1.25rem"
            }}>
              Zona de Perigo
            </h2>
            <div className="danger-desc" style={{ fontSize: isMobile ? "0.97rem" : "1.01rem", color: "#fff" }}>
              <span style={{ color: "#ffb300", fontWeight: 500 }}>
                Excluir sua conta é <b>irreversível</b>.<br />
              </span>
              Todos os seus dados serão removidos permanentemente.
            </div>
          </div>
        </div>
        <button
          className={`configuracoes-btn danger${btnAnim.danger ? " btn-animate-danger" : ""}`}
          onClick={handleDeleteAccount}
          tabIndex={0}
          style={{
            marginTop: isMobile ? 10 : 18,
            fontSize: isMobile ? "1rem" : "1.09rem",
            fontWeight: 700,
            letterSpacing: 0.1,
            display: "flex",
            alignItems: "center",
            gap: 8,
            justifyContent: "center",
            boxShadow: "0 2px 12px #e5393533",
            width: "100%",
            padding: isMobile ? "10px 0" : undefined,
            position: isMobile ? "absolute" : undefined,
            bottom: isMobile ? 10 : undefined,
            left: isMobile ? 0 : undefined,
            background: "linear-gradient(90deg, #b71c1c 60%, #e53935 100%)",
            color: "#fff"
          }}
          aria-label="Excluir conta"
        >
          <FaTrashAlt style={{ marginRight: 6, verticalAlign: "middle" }} />
          Excluir Conta
        </button>
        {showDeleteConfirm && (
          <div className="delete-confirm-modal animated-fadein show" tabIndex={0} aria-modal="true" role="dialog">
            <div className="delete-confirm-content animated-pop" style={isMobile ? { padding: "12px 4px 10px 4px", fontSize: "0.95rem" } : {}}>
              <p style={{ fontWeight: 600, color: "#ffb300", fontSize: isMobile ? "1rem" : "1.08rem" }}>
                Tem certeza que deseja <span style={{ color: "#e53935" }}>excluir sua conta</span>?<br />
                Esta ação é <b>irreversível</b> e todos os seus dados serão apagados.
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 12, justifyContent: "center", flexDirection: isMobile ? "column" : "row" }}>
                <button className="configuracoes-btn danger" style={{
                  fontSize: isMobile ? "1rem" : "1.08rem",
                  padding: isMobile ? "10px 0" : "12px 0",
                  background: "#e53935",
                  color: "#fff"
                }} onClick={confirmDeleteAccount} autoFocus>Sim, excluir</button>
                <button className="configuracoes-btn" style={{
                  fontSize: isMobile ? "1rem" : "1.08rem",
                  padding: isMobile ? "10px 0" : "12px 0",
                  background: "#23272f",
                  color: "#ffb300"
                }} onClick={() => setShowDeleteConfirm(false)}>Cancelar</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
