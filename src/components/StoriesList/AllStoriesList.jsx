import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StoriesList.css'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';

const StoriesList = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api'

  const { projectId } = useParams()
  const { epicId } = useParams()


  useEffect(() => {
    
    const token = localStorage.getItem('authToken');

    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/stories`, {
          headers: {
            auth: token,
          }
        });
        setStories(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Hubo un error al obtener las historias');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  if (loading) {
    return <div><LoadingPage name={"historias"}></LoadingPage></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log("Stories", stories)

  return (
    <>
    <div className="my-stories-container">
      <div className="my-stories-grid">
        {stories.map((story) => (
          <div key={story._id} className="story-card">
            <div className="story-header">
              <span className="story-icon">{story.icon}</span>
              <Link to={`/my-projects/${projectId}/${epicId}/${story._id}`}><h2 className="story-name">{story.name}</h2></Link>
            </div>
            <p className="story-description">{story.description}</p>
            <div className="story-details">
              <p>
                <strong>Estatus:</strong> {story.status}
              </p>
              <p>
                <strong>Puntos:</strong> {story.points}
              </p>
              <p>
                <strong>Creado:</strong>{" "}
                {new Date(story.created).toLocaleDateString()}
              </p>
              <p>
                <strong>Asignado a:</strong> {story.assignedTo.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default StoriesList;