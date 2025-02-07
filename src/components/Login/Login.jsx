import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import authService from "../../services/authService";
import './styles.css'

const Login = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, username, password) // Usa el método "login" de authService
      alert("Inicio de sesión exitoso")
      navigate("/home") // Redirige a la página de dashboard
    } catch (err) {
      setError(err.message)
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
      <h2 className="login-title">Iniciar Sesión</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="form-group">
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          placeholder="Ingresa tu usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className="form-group">
        <label htmlFor="contraseña">Contraseña</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button type="submit" className="login-button">Iniciar Sesión</button>
        
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login