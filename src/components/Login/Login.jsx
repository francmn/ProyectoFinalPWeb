import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { ClipLoader } from "react-spinners";
import styles from "./styles.module.css";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Estado del spinner

  const token = authService.getCurrentUser();
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authService.login(email, username, password); // Usa el método "login" de authService
      if(token){
          navigate("/home"); // Redirige a la página de dashboard
      }
     
    } catch (err) {
      setError(err.message); // Guarda el mensaje de error en el estado
    } finally {
      setLoading(false); // Detiene el spinner
    }
  };
 

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Project Manager</h2>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder=""
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              placeholder=""
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.loginButton} disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
  
        {/* Spinner mientras carga */}
        {loading && (
          <div className={styles.spinnerContainer}>
            <ClipLoader color="#3498db" loading={loading} size={50} />
          </div>
        )}
  
      </div>
    </div>
  );
}

export default Login;
