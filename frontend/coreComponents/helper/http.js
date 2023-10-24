import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3002/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json", // Tipo de contenido de la solicitud
    "Cache-Control": "no-cache", // Control de caché, evita que se almacene en caché la respuesta
  },
});

export default http;
