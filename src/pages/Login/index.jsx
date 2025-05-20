import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validateEmail, validatePassword, sanitizeInput } from "../../utils/validationUtils"; 
import "./Login.scss";

const ErrorMessage = ({ message }) => (
  <p className="error-message" aria-live="polite">
    {message}
  </p>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

const PasswordInput = ({
  password,
  setPassword,
  passwordVisible,
  togglePasswordVisibility,
}) => (
  <div className="password-container">
    <input
      type={passwordVisible ? "text" : "password"}
      id="password"
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button
      type="button"
      className="toggle-password"
      onClick={togglePasswordVisibility}
      aria-label={passwordVisible ? "Esconder senha" : "Mostrar senha"}
    >
      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
);

PasswordInput.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  passwordVisible: PropTypes.bool.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
};

const LoginButton = ({ isBlocked, isLoading }) => (
  <button
    type="submit"
    className="login-button"
    disabled={isBlocked || isLoading}
  >
    {isBlocked ? (
      "Bloqueado..."
    ) : isLoading ? (
      <span className="spinner"></span>
    ) : (
      "Entrar"
    )}
  </button>
);

LoginButton.propTypes = {
  isBlocked: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [blockTime, setBlockTime] = useState(0);

  const ERROR_MESSAGES = {
    emailInvalid: "Email inválido.",
    passwordInvalid: "Credenciais inválidas. Tente novamente.",
    tooManyAttempts: "Muitas tentativas de login. Tente novamente mais tarde.",
  };

  useEffect(() => {
    if (isBlocked && blockTime > 0) {
      const timer = setInterval(() => setBlockTime((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [isBlocked, blockTime]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isBlocked || isLoading) return;

    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPassword = sanitizeInput(password);

    const emailError = validateEmail(sanitizedEmail);
    const passwordError = validatePassword(sanitizedPassword);

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      setIsLoading(true);
      const isAuthenticated = await fakeApiLogin(sanitizedEmail, sanitizedPassword);
      setIsLoading(false);

      if (isAuthenticated) {
        console.log("Login bem-sucedido:", { email: sanitizedEmail, password: sanitizedPassword });
        setLoginAttempts(0);
        setEmail("");
        setPassword("");
      } else {
        const attempts = loginAttempts + 1;
        setLoginAttempts(attempts);
        if (attempts >= 3) {
          setIsBlocked(true);
          setBlockTime(30); 
          setTimeout(() => setIsBlocked(false), 30000);
        }
        setErrors({ email: "", password: ERROR_MESSAGES.passwordInvalid });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const fakeApiLogin = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(email === "user@example.com" && password === "Password123!");
      }, 1000);
    });
  };

  return (
    <div className="login-container" aria-live="polite">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <ErrorMessage message={errors.email} />}
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <PasswordInput
            password={password}
            setPassword={setPassword}
            passwordVisible={passwordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
          />
          {errors.password && <ErrorMessage message={errors.password} />}
        </div>
        <LoginButton isBlocked={isBlocked} isLoading={isLoading} />
        {isBlocked && blockTime > 0 && (
          <p className="block-message">
            Tente novamente em {blockTime} segundos.
          </p>
        )}
      </form>
      <p className="signup-link">
        Não tem uma conta? <Link to="/signup">Criar conta</Link>
      </p>
    </div>
  );
}
