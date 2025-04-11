import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validateEmail, validatePassword } from "../../utils/validationUtils";
import { useAuth } from "../../context/AuthContext";
import Alert from "../../components/common/Alert"; // Import Alert
import "./SignUp.scss";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState(null); // State for alert
  const { login } = useAuth();
  const navigate = useNavigate();

  const ERROR_MESSAGES = {
    emailInvalid: "Email inválido.",
    passwordInvalid: "A senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.",
    passwordsNotMatch: "As senhas não coincidem."
  };

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
      setAlert({ message: "Conta criada com sucesso!", type: "success" }); // Show success alert
      login({ email, password }); // Automatically log in the user
      navigate("/");
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
      <form onSubmit={handleSubmit} className="signup-form">
        {[{ label: "Email", type: "email", value: email, setter: setEmail, error: errors.email, id: "email" },
          { label: "Senha", type: passwordVisible ? "text" : "password", value: password, setter: setPassword, error: errors.password, id: "password" },
          { label: "Confirmar Senha", type: "password", value: confirmPassword, setter: setConfirmPassword, error: errors.confirmPassword, id: "confirmPassword" }
        ].map(({ label, type, value, setter, error, id }) => (
          <div className="form-group" key={id}>
            <label htmlFor={id}>{label}:</label>
            <div className={id === "password" ? "password-container" : ""}>
              <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={(e) => setter(e.target.value)}
                required
              />
              {id === "password" && (
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                  aria-label={passwordVisible ? "Esconder senha" : "Mostrar senha"}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              )}
            </div>
            {error && <p className="error-message">{error}</p>}
          </div>
        ))}
        <button type="submit" className="signup-button" disabled={isSubmitting}>
          {isSubmitting ? <span className="spinner"></span> : "Criar Conta"}
        </button>
      </form>
      <p className="login-link">
        Já tem uma conta? <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
}