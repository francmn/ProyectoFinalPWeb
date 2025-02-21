import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import './TaskDetail.css'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';

function TasksDetail() {

  const { storyId } = useParams();
  const { taskId } = useParams();

  console.log("TASK ID: ", taskId);

  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api';

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    const fetchtasks = async () => {
      try {
        const response = await axios.get(`${API_URL}/tasks/${taskId}`, {
          headers: {
            auth: token,
          }
        });
        setTasks(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Hubo un error al obtener el detalle de la historia');
        setLoading(false);
      }
    };

    fetchtasks();
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  if (loading) {
    return <div><LoadingPage name={"tarea"}></LoadingPage></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <div>
      <Navbar title={tasks.name} />

      <div className='tasks-detail-container'>
      <div className='tasks-detail-card'>
        <h1 className='tasks-detail-header'>DETALLE DE LA TAREA</h1>
        <div className='tasks-detail-content'>
          <h2 className='tasks-detail-content field'>Nombre de la tarea: {tasks.name}</h2>
          <p className='tasks-detail-content field'><strong>ID de la tarea:</strong> {tasks._id}</p>
          <p className='tasks-detail-content field'><strong>Status:</strong> {tasks.status}</p>
          <p className='tasks-detail-content field'><strong>Puntos:</strong> {tasks.points}</p>
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default TasksDetail;
