import axios from "axios";

//http://localhost:3002/
const http = axios.create({
  baseURL: "https://courses-selling-app-api.onrender.com/",
  timeout: 1000, // Aumenté el tiempo de espera a 10 segundos (ms)
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

// Manejo de errores global para las solicitudes HTTP
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Error de respuesta del servidor (por ejemplo, error HTTP 4xx o 5xx)
      console.error(
        "Error de respuesta:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // La solicitud se envió pero no se recibió una respuesta (puede ser un problema de red)
      console.error("Error de red:", error.request);
    } else {
      // Otros errores
      console.error("Error:", error.message);
    }

    // Puedes re-lanzar el error para manejarlo en la capa superior si es necesario
    return Promise.reject(error);
  }
);

export default http;
