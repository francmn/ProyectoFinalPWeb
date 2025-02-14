import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import './StoryDetail.css'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

function StoryDetail() {

  const { projectId} = useParams();
  const { epicId } = useParams();
  const { storyId } = useParams();

  console.log("STORY ID: ", storyId);

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api';

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    const fetchStory = async () => {
      try {
        const response = await axios.get(`${API_URL}/stories/${storyId}`, {
          headers: {
            auth: token,
          }
        });
        setStory(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Hubo un error al obtener el detalle de la historia');
        setLoading(false);
      }
    };

    fetchStory();
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  if (loading) {
    return <div>Cargando historia...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar title={story.name} />

      <div className='story-detail-container'>
      <div className='story-detail-card'>
        <h1 className='story-detail-header'>DETALLE DE LA HISTORIA</h1>
        <div className='story-detail-content'>
          <h2 className='story-detail-content field'>Nombre de la historia: {story.name}</h2>
          <p className='story-detail-content field'><strong>ID de la historia:</strong> {story._id}</p>
          <p className='story-detail-content field'><strong>Status:</strong> {story.status}</p>
          <p className='story-detail-content field'><strong>Puntos:</strong> {story.points}</p>
        </div>
      </div>
      </div>

      <div className='story-detail-container'>
      <div className='story-detail-card'>
        <Link to={`/my-projects/${projectId}/${epicId}/${storyId}/tasks`}><h1 className='story-bttn'>Ver Tareas</h1></Link>
        </div>
      </div>
    </div>
  );
}

export default StoryDetail;
