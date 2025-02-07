import axios from "axios";

const API_URL = "https://lamansysfaketaskmanagerapi.onrender.com/api"

const authService = {

  login: async (email, username, password) => {
    try {
   
      const response = await axios.post(`${API_URL}/login`, {
        email,
        username,
        password,
      });

      // Si la API devuelve un token de autenticación, lo guardamos en sessionStorage
      if (response.data.token) {
        sessionStorage.setItem("authToken", response.data.token);
      }

      // Retorna toda la respuesta de la API (normalmente contiene el token y otros datos del usuario)
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error al iniciar sesión");
    }
  },

  logout: () => {
  
    sessionStorage.removeItem("authToken");
  },

  
  getCurrentUser: () => {
    // Recupera el token almacenado en sessionStorage
    return sessionStorage.getItem("authToken");
  },

  isAuthenticated: () => {
  
    return !!sessionStorage.getItem("authToken");
  },
  
};


export default authService;
