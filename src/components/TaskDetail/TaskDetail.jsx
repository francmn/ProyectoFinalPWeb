import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import './TaskDetail.css'
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

function TasksDetail() {

  const { storyId } = useParams();
  const { taskId } = useParams();

  console.log("TASK ID: ", taskId);

  const [tasks, settasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api';

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    const fetchtasks = async () => {
      try {
        const response = await axios.get(`${API_URL}/stories/${taskId}`, {
          headers: {
            auth: token,
          }
        });
        settasks(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Hubo un error al obtener el detalle de la historia');
        setLoading(false);
      }
    };

    fetchtasks();
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  if (loading) {
    return <div>Cargando tareas...</div>;
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

      <div className='tasks-detail-container'>
      <div className='tasks-detail-card'>
        </div>
      </div>
    </div>
  );
}

export default TasksDetail;
