import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css"
import LoadingComponent from "../LoadingComponent/LoadingComponent";

export default function PopUpForm({storyId}) {


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [isOpen, setIsOpen] = useState(false);

    const API_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api'
       
    
    const [formData, setFormData] = useState({
          name: "",
          description: "",
          story: `${storyId}`,
          created: new Date().toISOString().slice(0, 10),
          dueDate: "",
          done: false,
        });
      
    const handleChange = (e) => {
          
        const { name, value, type, checked } = e.target;
          setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
          });
        };

    
    const token = localStorage.getItem('authToken');
        
    
  const handleSubmit = async () => {

    console.log("DATOS:", formData)
    
    setLoading(true);
    
    const token = localStorage.getItem("authToken")

    setIsOpen(false);


    try {
      const response = await axios.post(`${API_URL}/tasks`, formData, {
        headers: {
          auth: token
        }
      });
      console.log("Respuesta del servidor:", response.data);
      alert("Datos actualizados con éxito");
      window.location.reload();
    } catch (error) {
      console.error("Error al actualizar:", error);
      alert("Error al actualizar los datos");
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
    <div className={styles.container}>
      <button onClick={() => setIsOpen(true)} className={styles.btnPrimary}>
        Agregar Tarea
      </button>

      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Nombre *</label>
                <input
                  type="text"
                  name="name"
                  required="true"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Descripción</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Fecha de creación</label>
                <input
                  type="date"
                  name="created"
                  value={formData.created}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Fecha límite</label>
                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="checkbox"
                  id="done"
                  name="done"
                  checked={formData.done}
                  onChange={handleChange}
                />
                <label htmlFor="done">Realizada</label>
              </div>
              <div className="button-group">
                <button type="submit" className={styles.btnSuccess}>
                  Enviar
                </button>
                <button type="button" onClick={() => setIsOpen(false)} className={styles.btnSecondary}>
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}