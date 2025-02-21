import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './tasksList.css'
import { Link, useParams } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import { IoAdd } from "react-icons/io5";
import PopUpForm from '../PopUpForm/PopUpForm';
import DeletePopUp from '../DeletePopUp/DeletePopUp';


const tasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api'

  const { storyId } = useParams()
  const { projectId } = useParams()
  const { epicId } = useParams()

  useEffect(() => {
    
    const token = localStorage.getItem('authToken');

    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/stories/${storyId}/tasks`, {
          headers: {
            auth: token,
          }
        });
        setTasks(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Hubo un error al obtener las tareas');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  if (loading) {
    return <div><LoadingPage name={"tareas"}></LoadingPage></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log("TAREAS", tasks)

  return (
    <div className='contenedor'>
    <div className="my-tasks-container">
    
      <div className="my-tasks-grid">


      
      <div className='tasks-card-add'> <PopUpForm storyId={storyId}></PopUpForm></div>
        {tasks.map((task) => (
          <div key={task._id} className="tasks-card">
            <div className="tasks-header">
              {task.done ? <FaCheck/> : "" }<h2 className="tasks-name">{task.name}</h2>
            </div>
            <p className="tasks-description">{task.description}</p>
            <div className="tasks-details">
              <p>
                <strong>Story:</strong> {task.story}
              </p>
            </div>
            <DeletePopUp taskId={task._id}></DeletePopUp>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default tasksList;
