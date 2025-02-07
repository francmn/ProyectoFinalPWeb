import axios from "axios";
import authService from "./authService";

const API_URL = "https://lamansysfaketaskmanagerapi.onrender.com/api";

export const fetchProjects = async () => {
    
    const token = authService.getCurrentUser();

    if (!token) {
      throw new Error("Usuario no autenticado. El token no está disponible.");
    }
  try {
    const response = await axios.get(`${API_URL}/projects`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los proyectos:", error.response?.data || error.message);
    throw error;
  }
};
