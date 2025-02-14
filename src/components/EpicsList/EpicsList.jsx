import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './EpicsList.css'
import { Link } from 'react-router-dom';

const EpicsList = () => {
  const [epics, setEpics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api'

  const { projectId } = useParams();


  console.log("Project ID:", projectId)

  useEffect(() => {
    
    const token = localStorage.getItem('authToken');

    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/projects/${projectId}/epics`, {
          headers: {
            auth: token,
          }
        });
        setEpics(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Hubo un error al obtener los proyectos');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  if (loading) {
    return <div>Cargando épicas...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log("Epicas", epics)

  return (

    <div className="my-epics-container">
    <div className="my-epics-grid">
          {epics.length > 0 ? (
            epics.map((epic) => (
                
              <div className="epics-card"> 
              
             <div className='my-epics-title'>  <Link to={`/my-projects/${projectId}/${epic._id}`}><p><strong></strong> {epic.icon}{epic.name}</p></Link></div>
               
              <p className="epics-description">{epic.description}</p>
                
              <p className='epics-project'><strong>ID del proyecto: </strong>{epic.project}</p>
                
              </div>
            ))
          ) : (
            <p>No se encontraron épicas</p>
            
          )}
          </div>
        </div>
      );
};


export default EpicsList;
