import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import './ProjectDetail.css'

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
  <div>
  
    <div className='project-title'><Navbar title={projects.data.name}/></div>

    <div className='project-detail-container'>    
    <h1 className='project-detail-header'>DETALLES DEL PROYECTO</h1>
    <div className='project-detail-content'>
    <h2><strong className='project-detail-content field'>Nombre del proyecto:</strong> {projects.data.name}</h2>
    <p><strong className='project-detail-content field'>Ícono:</strong> {projects.data.icon}</p>
    <p><strong className='project-detail-content field'>Descripción:</strong> {projects.data.description}</p>
    <p><strong className='project-detail-content field'>ID del Proyecto:</strong> {projects.data._id}</p>
    <p><strong className='project-detail-content field'>Propietario:</strong> {projects.data.owner}</p>
    </div>
    </div>

    <div className='project-detail-container'>
    <div ><Link to={`/my-projects/${projectId}/epics`}><h1 className='epic-bttn'>Ver Épicas</h1></Link></div>

    </div>

  </div>
);
}

export default ProjectDetail