import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProjectList.css'

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0)

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

    <div className="my-projects-container">
    <div className="my-projects-grid">
      {projects.length > 0 ? (
        projects.map((project, index) => (
          
          <div className="project-card" key={project._id}> 
            
            <div className="project-header">
              <span className="project-icon">{project.icon}</span>
              <Link to={`/my-projects/${project._id}`}><h2 className='project-name'>{project.name}</h2></Link>
            </div>
            <p className="project-description">{project.description}</p>
            <p><strong>ID del dueño:</strong> {project.owner}</p>
            <p><strong>ID del proyecto </strong> {project._id}</p>
            <h3>Miembros:</h3>
            {project.members.length > 0 ? (
              <ul className="members-list">
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
  )

}
export default ProjectList
