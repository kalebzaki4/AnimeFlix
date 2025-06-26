import React, { useState, useId } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sanitizeInput, validateEmail, validatePassword, validateUsername } from "../../utils/validationUtils";
import { useAuth } from "../../context/AuthContext";
import Alert from "../../components/common/Alert";
import "./SignUp.scss";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "", username: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const idEmail = useId();
  const idPassword = useId();
  const idConfirmPassword = useId();
  const idUsername = useId();

  const ERROR_MESSAGES = {
    emailInvalid: "Email inválido.",
    passwordInvalid: "A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.",
    passwordsNotMatch: "As senhas não coincidem.",
    usernameInvalid: "Nome de usuário inválido. Use 3-8 letras, números ou _",
  };

  const validateForm = () => {
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);
    const sanitizedConfirm = sanitizeInput(confirmPassword);
    const sanitizedUsername = sanitizeInput(username);

    const emailError = validateEmail(sanitizedEmail);
    const passwordError = validatePassword(sanitizedPassword);
    const confirmPasswordError = sanitizedPassword === sanitizedConfirm ? "" : ERROR_MESSAGES.passwordsNotMatch;
    const usernameError = sanitizedUsername.length > 8
      ? ERROR_MESSAGES.usernameInvalid
      : validateUsername(sanitizedUsername);

    setErrors({
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
      username: usernameError,
    });
    return !emailError && !passwordError && !confirmPasswordError && !usernameError;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setUsername("");
      setAlert({ message: "Conta criada com sucesso!", type: "success" });
      login({ email, password, username });
      navigate("/");
    }, 1500);
  };

  const togglePasswordVisibility = () => setPasswordVisible((v) => !v);

  const PasswordHint = () => (
    <div style={{
      fontSize: "0.85rem",
      color: "#888",
      marginBottom: 8,
      marginTop: -8,
      textAlign: "left"
    }}>
      Dica: Use letras maiúsculas, minúsculas, números e símbolos.
    </div>
  );

  const handleClear = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
    setErrors({ email: "", password: "", confirmPassword: "", username: "" });
    setAlert(null);
  };

  const formAnimation = {
    animation: "fadeInDown 0.7s",
    '@keyframes fadeInDown': {
      from: { opacity: 0, transform: "translateY(-30px)" },
      to: { opacity: 1, transform: "translateY(0)" }
    }
  };

  return (
    <div className="signup-container">
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <h1 className="signup-title">Criar Conta</h1>
      <form onSubmit={handleSubmit} className="signup-form" autoComplete="off" style={formAnimation}>
        <div className="form-group mobile-full-width">
          <label htmlFor={idUsername}>Nome de Usuário:</label>
          <input
            type="text"
            id={idUsername}
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value.slice(0, 8))}
            required
            autoFocus
            minLength={3}
            maxLength={8}
            pattern="^[a-zA-Z0-9_]{3,8}$"
            placeholder="Seu nome de usuário (até 8 caracteres)"
          />
          {errors.username && <p className="error-message">{errors.username}</p>}
        </div>
        <div className="form-group mobile-full-width">
          <label htmlFor={idEmail}>Email:</label>
          <input
            type="email"
            id={idEmail}
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            inputMode="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group mobile-full-width">
          <label htmlFor={idPassword}>Senha:</label>
          <PasswordHint />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id={idPassword}
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
              aria-label={passwordVisible ? "Esconder senha" : "Mostrar senha"}
              tabIndex={-1}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <div className="form-group mobile-full-width">
          <label htmlFor={idConfirmPassword}>Confirmar Senha:</label>
          <input
            type="password"
            id={idConfirmPassword}
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" className="signup-button mobile-full-width" disabled={isSubmitting}>
            {isSubmitting ? <span className="spinner"></span> : "Criar Conta"}
          </button>
          <button
            type="button"
            className="signup-button mobile-full-width"
            style={{ background: "#888" }}
            onClick={handleClear}
            disabled={isSubmitting}
          >
            Limpar
          </button>
        </div>
      </form>
      <p className="login-link">
        Já tem uma conta? <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
}