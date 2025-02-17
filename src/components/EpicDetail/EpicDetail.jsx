import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import styles from './styles.module.css'

function EpicDetail(){

const { projectId } = useParams()
const { epicId } = useParams()

console.log("PROJECT ID: ", projectId)
console.log("EPIC ID: ", epicId)

const [epics, setEpics] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api'

useEffect(() => {
    
  const token = localStorage.getItem('authToken');

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/epics/${epicId}`, {
        headers: {
          auth: token,
        }
      });
      setEpics(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Hubo un error al obtener el detalle de la épica');
      setLoading(false);
    }
  };

  fetchProjects();
}, []); // Se ejecuta solo una vez cuando el componente se monta

if (loading) {
  return <div>Cargando épica...</div>;
}

if (error) {
  return <div>{error}</div>;
}

return (
  <div className='contenedor'>
  
    <Navbar title={epics.name}/>

    <div className={styles.epicContainer}>    
    <h1 className={styles.epicHeader}>DETALLE DE LA ÉPICA</h1>
    <div className={styles.epicContent}>
    <p ><strong className={styles.epicContentField}>Nombre del proyecto:</strong> {epics.name}</p>
    <p ><strong className={styles.epicContentField}>Ícono:</strong> {epics.icon}</p>
    <p ><strong className={styles.epicContentField}>ID de la épica:</strong> {epics._id}</p>
    <p ><strong className={styles.epicContentField}>Id del proyecto:</strong> {epics.project}</p>
    </div>
    </div>

    <div className={styles.epicContainer}>
    <Link to={`/my-projects/${projectId}/${epicId}/stories`}><h1 className={styles.storyBttn}>Ver Historias</h1></Link>

    </div>

  </div>
);
}

export default EpicDetail