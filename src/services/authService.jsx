import axios from "axios";

const API_URL = "https://lamansysfaketaskmanagerapi.onrender.com/api"

const authService = {
  // Método para iniciar sesión
  login: async (email, username, password) => {
    try {
      // Realiza una solicitud POST a la API para autenticar al usuario
      const response = await axios.post(`${API_URL}/login`, {
        email,
        username,
        password, // El cuerpo de la solicitud contiene el email y la contraseña
      });

      // Si la API devuelve un token de autenticación, lo guardamos en sessionStorage
      if (response.data.token) {
        sessionStorage.setItem("authToken", response.data.token);
      }

      // Retorna toda la respuesta de la API (normalmente contiene el token y otros datos del usuario)
      return response.data;
    } catch (error) {
      // Si la solicitud falla, lanzamos un error con el mensaje que provee la API o un mensaje genérico
      throw new Error(error.response?.data?.message || "Error al iniciar sesión");
    }
  },

  // Método para cerrar sesión
  logout: () => {
    // Borra el token de sessionStorage
    sessionStorage.removeItem("authToken");
  },

  // Método para obtener el token del usuario actual
  getCurrentUser: () => {
    // Recupera el token almacenado en sessionStorage
    return sessionStorage.getItem("authToken");
  },

  // Método para verificar si el usuario está autenticado
  isAuthenticated: () => {
    // Retorna `true` si hay un token en sessionStorage, de lo contrario, retorna `false`
    return !!sessionStorage.getItem("authToken");
  },
};

export default authService;
