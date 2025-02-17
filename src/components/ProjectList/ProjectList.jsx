import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import BackButton from '../BackButton/BackButton';
import Navbar from '../Navbar/Navbar';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api'

  useEffect(() => {
    
    const token = localStorage.getItem('authToken');

    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/projects`, {
          headers: {
            auth: token,
          }
        });
        setProjects(response.data.data);
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

    <>
      <Navbar title="MIS PROYECTOS"/>
    <div className={styles.myProjectsContainer}>
    
    <div className={styles.myProjectsGrid}>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          
          <div className={styles.projectCard} key={project._id}> 
            
            <div className={styles.projectHeader}>
              <span className={styles.projectIcon}>{project.icon}</span>
              <Link to={`/my-projects/${project._id}`}><h2 className={styles.projectName}>{project.name}</h2></Link>
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            <p><strong>ID del dueño:</strong> {project.owner}</p>
            <p><strong>ID del proyecto </strong> {project._id}</p>
            <h3>Miembros:</h3>
            {project.members.length > 0 ? (
              <ul className={styles.memberList}>
                {project.members.map((member, index) => (
                  <li key={index}>{member}</li> 
                ))}
              </ul>
            ) : (
              <p>No se encontraron miembros.</p>
            )}

            
            
          </div>
          
        ))
        
      ) : (
        <p>No projects found</p>
        
      )}
      </div>
    </div>
    </>
  )

}
export default ProjectList
