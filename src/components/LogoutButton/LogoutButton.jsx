import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService";
import styles from './styles.module.css'

const Logout = () => {
 
  const navigate = useNavigate();
  
  const handleLogout = () => {
    
      authService.logout();
      navigate("/login")

  };

  return (
          
      <div className={styles.logoutButton} onClick={handleLogout}>
      Cerrar sesión
      </div>
    
  );
};

export default Logout;
