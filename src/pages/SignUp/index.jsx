import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validateEmail, validatePassword } from "../../utils/validationUtils";
import { useAuth } from "../../context/AuthContext";
import Alert from "../../components/common/Alert";
import "./SignUp.scss";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const ERROR_MESSAGES = {
    emailInvalid: "Email inválido.",
    passwordInvalid: "A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.",
    passwordsNotMatch: "As senhas não coincidem."
  };

  // Validação do formulário
  const validateForm = () => {
    const emailError = validateEmail(email) ? "" : ERROR_MESSAGES.emailInvalid;
    const passwordError = validatePassword(password);
    const confirmPasswordError = password === confirmPassword ? "" : ERROR_MESSAGES.passwordsNotMatch;
    setErrors({ email: emailError, password: passwordError, confirmPassword: confirmPasswordError });
    return !emailError && !passwordError && !confirmPasswordError;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAlert({ message: "Conta criada com sucesso!", type: "success" });
      login({ email, password });
      navigate("/");
    }, 1500);
  };

  const togglePasswordVisibility = () => setPasswordVisible((v) => !v);

  // Dica de senha para mobile
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

  // Limpa todos os campos rapidamente
  const handleClear = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({ email: "", password: "", confirmPassword: "" });
    setAlert(null);
  };

  // Animação de entrada para o formulário
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoFocus
            inputMode="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group mobile-full-width">
          <label htmlFor="password">Senha:</label>
          <PasswordHint />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
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
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmPassword"
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