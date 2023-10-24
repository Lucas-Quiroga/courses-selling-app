import http from "./http";

// Registro de usuario
export const signup = async (user) => {
  try {
    console.log("User data:", user);
    // Realiza una solicitud HTTP POST para registrar un nuevo usuario
    const response = await http.post("api/user/signup", user);
    console.log("Signup response:", response);
    return response;
  } catch (error) {
    console.error("Signup error:", error);
    throw error; // Puedes re-lanzar el error para manejarlo en la capa superior si es necesario
  }
};

// Inicio de sesión de usuario
export const signin = async (user) => {
  console.log(user);
  try {
    console.log("User data:", user);
    // Realiza una solicitud HTTP POST para iniciar sesión
    const response = await http.post("api/user/signin", user);
    console.log(response);
    // Llama a la función 'authenticate' para manejar la autenticación del usuario
    authenticate(response.data.token);
    window.location.reload(); // Recarga la página después de iniciar sesión
    console.log("Signin response:", response);
    return response;
  } catch (error) {
    console.error("Signin error:", error);
    throw error; // Puedes re-lanzar el error para manejarlo en la capa superior si es necesario
  }
};

// Función para autenticar al usuario y almacenar el token JWT en el almacenamiento local
export const authenticate = (data, next = () => {}) => {
  if (typeof window !== "undefined") {
    // Convierte los datos del usuario a formato JSON y almacena el token en el almacenamiento local
    const userJson = JSON.stringify(data);
    localStorage.setItem("userJwt", userJson);
    next(); // Ejecuta la función 'next' proporcionada (puede ser una función de redireccionamiento, por ejemplo)
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    // Si no estamos en un entorno de navegador, retornamos false.
    return false;
  }
  const userJwt = localStorage.getItem("userJwt");
  // Verificamos si hay un token almacenado en el localStorage.
  if (userJwt) {
    // Si hay un token, retornamos el token.
    return userJwt;
  } else {
    // Si no hay un token, retornamos false.
    return false;
  }
};
