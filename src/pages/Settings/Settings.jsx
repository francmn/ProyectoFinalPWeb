import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './Settings.css'
import Logout from '../../components/Logout/Logout';


const Settings = () => {

  const username = localStorage.getItem("username");
  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname")


  return (
    <>    
    <Navbar title="CONFIGURACIÓN"/>
    <div className='titulo'>Datos del usuario</div>
    <div className='datos'>
    <h1>Nombre: {name}</h1>
    <h1>Apellido: {surname}</h1>
    <h1>Usuario: {username}</h1>
    <div className='logout-btn'>
    <Logout></Logout>
    </div>
    </div>
    
    
    </>
  );
};

export default Settings;