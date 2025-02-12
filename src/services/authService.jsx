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

      // Si la API devuelve un token de autenticación, lo guardamos en localStorage
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token)
        localStorage.setItem("username", response.data.user.username)
        localStorage.setItem("name", response.data.user.name.first)
        localStorage.setItem("surname", response.data.user.name.last)

    

      }

      // Retorna toda la respuesta de la API (normalmente contiene el token y otros datos del usuario)
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Error al iniciar sesión");
    }
  },

  logout: () => {
  
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
  },


  getUsername: () => {
    return localStorage.getItem("username"); 
  },

  
  getCurrentUser: () => {
    // Recupera el token almacenado en localStorage
    return localStorage.getItem("authToken");
  },

  isAuthenticated: () => {
  
    return !!localStorage.getItem("authToken");
  },

  getCurrentName: () => {
    return localStorage.getItem("name");
  },
  getCurrentSurname: () => {
    return localStorage.getItem("surname");
  }

};


export default authService;
