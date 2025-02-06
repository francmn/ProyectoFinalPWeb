import React from "react";
import { useNavigate } from "react-router-dom";
import authService from "./authService";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    alert("Sesión cerrada");
    navigate("/login"); // Redirige a la página de login
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
