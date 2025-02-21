import React from 'react'
import axios from 'axios'
import styles from './styles.module.css'
import { useState } from 'react'
import LoadingComponent from "../LoadingComponent/LoadingComponent";

function DeletePopUp({taskId}) {

    const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api'

    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [error, setError] = useState(null)


    const handleSubmit = async () => {

        
        setLoading(true);
        
        const token = localStorage.getItem("authToken")
    
        setIsOpen(false);

        console.log("TASK ID: ",taskId)
    
    
        try {
          const response = await axios.delete(`${API_URL}/tasks/${taskId}`, {
            headers: {
              auth: token
            }
          });
          console.log("Respuesta del servidor:", response.data);
          alert("Se ha eliminado la tarea");
          window.location.reload();
        } catch (error) {
          console.error("Error al elimanar:", error);
          alert("Error al eliminar la tarea");
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
    <div>
        <button onClick={() => setIsOpen(true)} className={styles.btnPrimary}>
             Eliminar
         </button>
      {isOpen && (
                <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                 <h1 className={styles.title}>¿Desea eliminar esta tarea?</h1>

                    <div className={styles.bttnGroup}>
                    <button type="submit" className={styles.btnSuccess} onClick={handleSubmit}>
                      Si
                    </button>
                    <button type="button" onClick={() => setIsOpen(false)} className={styles.btnSecondary}>
                      Cerrar
                    </button>
                     </div>
                  </div>

                </div>
                )}
        </div>

  )
}

export default DeletePopUp