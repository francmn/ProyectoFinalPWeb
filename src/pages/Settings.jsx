import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Navbar/Navbar'
import LogoutButton from '../components/LogoutButton/LogoutButton';
import Button from '../components/Button/Button';
import ThemeContext from '../services/ThemeContext';
import '../styles.css'



const Settings = () => {

  const username = localStorage.getItem("username");
  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname")

  const { theme } = useContext(ThemeContext)
  
  return (
    <div className='contenedor'>    
    <Navbar title="CONFIGURACIÓN"/>
    <div className="title">Datos del usuario</div>
    <div className="items">
    <h1>Nombre: {name}</h1>
    <h1>Apellido: {surname}</h1>
    <h1>Usuario: {username}</h1>
    <div className='button'>
      <LogoutButton/>
    </div>
    </div>
    <div className="title">
        Cambiar tema a :
        <div className={`App ${theme}`}><div className='button'><Button/></div></div>
    </div>
    </div>
  );
};

export default Settings;