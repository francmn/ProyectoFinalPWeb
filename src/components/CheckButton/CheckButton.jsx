import styles from './styles.module.css'
import { useState } from 'react'
import axios from 'axios'
import LoadingComponent from '../LoadingComponent/LoadingComponent'

import React from 'react'

function CheckButton({taskId}) {

    const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api'
 

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const data = {done: true}

    const handleChange = async ( ) => {


        
        setLoading(true);
        
        const token = localStorage.getItem("authToken")
    
        try {
          const response = await axios.patch(`${API_URL}/tasks/${taskId}`, data, {
            headers: {
              auth: token
            }  
            
          });
          console.log("Respuesta del servidor:", response.data);
          alert("Se ha actualizado la tarea");
          window.location.reload();
        } catch (err) {
          setError(err)
          console.error("Error al actualizar", err);
          alert("Error al actualizar la tarea");
        } finally {
          setLoading(false);
        }
      };
    if (loading) {
        return <div><LoadingComponent/></div>;
      }
    
     if (error) {
        return <div>{error}</div>;
      }
    return (
    <button className={styles.btnPrimary} onClick={handleChange}>Realizada</button>
  )
}

export default CheckButton