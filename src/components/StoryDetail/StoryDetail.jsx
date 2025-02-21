import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import './StoryDetail.css'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import TasksList from '../TasksList/TasksList';

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
    return <div><LoadingPage name={"historia"}></LoadingPage></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='contenedor'>
      <Navbar title={story.name} />

      <div className='story-detail-container'>
      <div className='story-detail-card'>
        <h1 className='story-detail-header'>DETALLE DE LA HISTORIA</h1>
        <div className='story-detail-content'>
          <p className='story-detail-content field'><strong>Nombre de la historia: </strong>{story.name}</p>
          <p className='story-detail-content field'><strong>ID de la historia:</strong> {story._id}</p>
          <p className='story-detail-content field'><strong>Status:</strong> {story.status}</p>
          <p className='story-detail-content field'><strong>Puntos:</strong> {story.points}</p>
        </div>
      </div>
      </div>

      <div>
      <h1 className='tasksList'>LISTA DE TAREAS </h1>
      <TasksList/>
      
      </div>
    </div>
  );
}

export default StoryDetail;
