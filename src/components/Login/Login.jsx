import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import { ClipLoader } from "react-spinners";
import './Login.css';
import { Alert } from "@mui/material";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Estado del spinner
  const [showAlert, setShowAlert] = useState(false); // Estado para mostrar el alert

  const token = authService.getCurrentUser();
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authService.login(email, username, password); // Usa el método "login" de authService
      if(token){

        setShowAlert(true); // Muestra el alert después de hacer login exitoso
        setTimeout(() => {
          navigate("/home"); // Redirige a la página de dashboard
        }, 2000); // Espera 2 segundos antes de redirigir para que el Alert sea visible

      }
     
    } catch (err) {
      setError(err.message); // Guarda el mensaje de error en el estado
    } finally {
      setLoading(false); // Detiene el spinner
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Project Manager</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
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
          <div className="form-group">
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
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>

        {/* Mostrar el Alert si hay un error */}
        {error && (
          <Alert severity="error" style={{ marginTop: "15px" }}>
            {error}
          </Alert>
        )}

        {/* Spinner mientras carga */}
        {loading && (
          <div className="flex justify-center mt-4">
            <ClipLoader color="#3498db" loading={loading} size={50} />
          </div>
        )}

        {/* Mostrar el Alert cuando el login sea exitoso */}
        {showAlert && (
          <Alert severity="success" style={{ marginTop: "25px" }}>
            ¡Inicio de sesión exitoso! Redirigiendo...
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Login;
