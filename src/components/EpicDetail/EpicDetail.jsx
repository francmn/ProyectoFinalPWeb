import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import './EpicDetail.css'

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
  <div>
  
    <Navbar title={epics.name}/>

    <div className='epic-detail-container'>    
    <h1 className='epic-detail-header'>DETALLE DE LA ÉPICA</h1>
    <div className='epic-detail-content'>
    <h2 ><strong className='epic-detail-content field'>Nombre del proyecto:</strong> {epics.name}</h2>
    <p ><strong className='epic-detail-content field'>Ícono:</strong> {epics.icon}</p>
    <p ><strong className='epic-detail-content field'>ID de la épica:</strong> {epics._id}</p>
    <p ><strong className='epic-detail-content field'>Id del proyecto:</strong> {epics.project}</p>
    </div>
    </div>

    <div className='epic-detail-container'>
    <Link to={`/my-projects/${projectId}/${epicId}/stories`}><h1 className='story-bttn'>Ver Historias</h1></Link>

    </div>

  </div>
);
}

export default EpicDetail