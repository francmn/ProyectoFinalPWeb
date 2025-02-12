import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import './Logout.css'
import Alert from '@mui/material/Alert';
import { AiOutlineUser } from "react-icons/ai";

const Logout = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  

  const handleLogout = () => {
    authService.logout();
    setShowAlert(true); // Muestra el alert después de hacer logout
    setTimeout(() => {
      navigate("/login"); // Redirige a la página de login después de un pequeño retraso
    }, 2000); // Espera 2 segundos antes de redirigir para que el Alert sea visible
  };

  return (
    <div>
      {showAlert && (
        <Alert severity="success" variant="filled" onClose={() => setShowAlert(false)}>
          Has cerrado sesión con éxito.
        </Alert>
      )}
      <div className="logout-button" onClick={handleLogout}>
      Cerrar sesión
      </div>
    </div>
  );
};

export default Logout;
