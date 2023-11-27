import http from "./http";

// Registro de usuario
export const signup = async (user) => {
  try {
    // console.log("User data:", user);
    // Realiza una solicitud HTTP POST para registrar un nuevo usuario
    const response = await http.post("api/user/signup", user);
    // console.log("Signup response:", response);
    return response;
  } catch (error) {
    console.error("Signup error:", error);
    throw error; // Puedes re-lanzar el error para manejarlo en la capa superior si es necesario
  }
};

// Inicio de sesión de usuario
export const signin = async (user) => {
  // console.log(user);
  try {
    // console.log("User data:", user);
    // Realiza una solicitud HTTP POST para iniciar sesión
    const response = await http.post("api/user/signin", user, {
      withCredentials: "include",
    });
    // console.log(response);
    // Llama a la función 'authenticate' para manejar la autenticación del usuario
    authenticate(response.data.token);
    // window.location.reload(); // Recarga la página después de iniciar sesión
    // console.log("Signin response:", response);
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

// // Función para autenticar al usuario y almacenar el token JWT en el almacenamiento local
// export const authenticate = (user, token, next = () => {}) => {
//   if (typeof window !== "undefined") {
//     // Convierte los datos del usuario a formato JSON y almacena el token en el almacenamiento local
//     const userJson = JSON.stringify(user);
//     localStorage.setItem("userJwt", userJson);
//     localStorage.setItem("userJwtToken", token);
//     next(); // Ejecuta la función 'next' proporcionada (puede ser una función de redireccionamiento, por ejemplo)
//   }
// };

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    // Si no estamos en un entorno de navegador, retornamos false.
    return false;
  }
  const userJwt = localStorage.getItem("userJwt");
  // Verificamos si hay un token almacenado en el localStorage.
  if (userJwt) {
    // Si hay un token, retornamos el token.
    // return userJwt;

    // o True
    return true;
  } else {
    // Si no hay un token, retornamos false.
    return false;
  }
};

// Recuperar datos del usuario
export const getUserProfile = async (token) => {
  const cleanToken = token.replace(/['"]+/g, "");
  try {
    // Realiza una solicitud HTTP GET para obtener los datos del perfil del usuario
    const response = await http.get("api/user/profile", {
      headers: {
        Authorization: `Bearer ${cleanToken}`, //token JWT válido
      },
    });

    return response.data; // Devuelve los datos del perfil del usuario
  } catch (error) {
    console.error("User profile error:", error);
    throw error;
  }
};

//Modificar datos del usuario
export const updateProfileUser = async (token, newData) => {
  const cleanToken = token.replace(/['"]+/g, "");
  try {
    const updateResponse = await http.put("api/user/profile", newData, {
      headers: {
        Authorization: `Bearer ${cleanToken}`, // Token JWT válido
      },
    });

    return updateResponse.data;
  } catch (error) {
    console.error("User profile error:", error);
    throw error;
  }
};

// Eliminar cuenta de usuario
export const deleteAccount = async () => {
  try {
    const token = localStorage.getItem("userJwt");

    if (!token) {
      throw new Error("No se encontró un token de usuario");
    }

    const cleanToken = token.replace(/['"]+/g, "");

    // Realiza una solicitud HTTP DELETE para eliminar la cuenta
    const response = await http.delete("api/user/delete", {
      headers: {
        Authorization: `Bearer ${cleanToken}`, // Token JWT válido
      },
    });

    // Elimina el token de usuario del almacenamiento local después de la eliminación de cuenta
    localStorage.removeItem("userJwt");

    return response.data;
  } catch (error) {
    console.error("Delete account error:", error);
    throw error;
  }
};

// Registro de administrador:
export const adminSignup = async (admin) => {
  try {
    const response = await http.post("api/admin/signup", admin);
    return response;
  } catch (error) {
    // console.log("Admin signup error:", error);
    throw error;
  }
};

// Inicio de sesión de administrador:
export const adminSignin = async (admin, successCallBack) => {
  try {
    const response = await http.post("api/admin/signin", admin);
    adminAuthenticate(response.data, successCallBack);

    return response;
  } catch (error) {
    // console.log("Admin signin error:", error);
    throw error;
  }
};

// Función para autenticar al administrador y almacenar el token JWT en el almacenamiento local
export const adminAuthenticate = (data, successCallback) => {
  if (typeof window !== "undefined") {
    const adminJson = JSON.stringify(data);
    localStorage.setItem("adminJwt", adminJson);
    if (typeof successCallback === "function") {
      successCallback();
    }
  }
};

// Función para verificar si el administrador está autenticado
export const isAdminAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const adminJwt = localStorage.getItem("adminJwt");
  return adminJwt ? true : false;
};

// Inicio de sesión de usuario con Google
export const signinWithGoogle = async ({ googleId, email, name, image }) => {
  try {
    // Realiza una solicitud HTTP POST para iniciar sesión con Google
    const response = await http.post(
      "api/user/saveGoogleUser",
      {
        googleId,
        email,
        name,
        image,
      },
      { withCredentials: "include" }
    );

    // Extrae el token de la respuesta y lo almacena en el almacenamiento local
    const token = response.data.token;
    authenticate({ email: email, role: "user" }, token);

    // Devuelve la respuesta
    return response.data;
  } catch (error) {
    console.error("Signin with Google error:", error);
    throw error;
  }
};
