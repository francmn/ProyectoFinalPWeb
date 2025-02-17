import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import styles from './styles.module.css'

function ProjectDetail(){

const { projectId } = useParams()

const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api'

useEffect(() => {
    
  const token = localStorage.getItem('authToken');

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/projects/${projectId}`, {
        headers: {
          auth: token,
        }
      });
      setProjects(response.data);
      console.log("Response", projects)
      setLoading(false);
    } catch (err) {
      setError('Hubo un error al obtener los proyectos');
      setLoading(false);
    }
  };

  fetchProjects();
}, []); // Se ejecuta solo una vez cuando el componente se monta

if (loading) {
  return <div>Cargando proyectos...</div>;
}

if (error) {
  return <div>{error}</div>;
}

return (
  <div className='contenedor'>
  
    <div className={styles.projectTitle}><Navbar title={projects.data.name}/></div>

    <div className={styles.projectDetailContainer}>    
    <h1 className={styles.projectDetailHeader}>DETALLES DEL PROYECTO</h1>
    <div className={styles.projectDetailContent}>
    <p><strong className={styles.projectDetailContentField}>Nombre del proyecto:</strong> {projects.data.name}</p>
    <p><strong className={styles.projectDetailContentField}>Ícono:</strong> {projects.data.icon}</p>
    <p><strong className={styles.projectDetailContentField}>Descripción:</strong> {projects.data.description}</p>
    <p><strong className={styles.projectDetailContentField}>ID del Proyecto:</strong> {projects.data._id}</p>
    <p><strong className={styles.projectDetailContentField}>Propietario:</strong> {projects.data.owner}</p>
    </div>
    </div>

    <div className={styles.projectDetailContainer}>
    <div ><Link to={`/my-projects/${projectId}/epics`}><h1 className={styles.epicBttn}>Ver Épicas</h1></Link></div>

    </div>

  </div>
);
}

export default ProjectDetail