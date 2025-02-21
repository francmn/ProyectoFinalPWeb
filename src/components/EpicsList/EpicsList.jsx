import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';

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
    return <div><LoadingPage name={"épicas"}></LoadingPage></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log("Epicas", epics)

  return (
   <div className="contenedor">
    <div className={styles.myEpicsContainer}>
    <div className={styles.myEpicsGrid}>
          {epics.length > 0 ? (
            epics.map((epic) => (
                
              <div className={styles.epicsCard}> 
              
              <Link to={`/my-projects/${projectId}/${epic._id}`}><div className={styles.myEpicsTitle}>   {epic.icon}{epic.name}</div></Link>
               
              <p className={styles.epicsDescription}>{epic.description}</p>
                
              <p className={styles.epicsProject}><strong>ID del proyecto: </strong>{epic.project}</p>
                
              </div>
            ))
          ) : (
            <p>No se encontraron épicas</p>
            
          )}
          </div>
        </div>
        </div>
      );
};


export default EpicsList;
