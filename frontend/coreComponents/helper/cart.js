import http from "./http";

// Agregar curso al carrito
export const addToCart = async (courseId) => {
  try {
    const token = localStorage.getItem("userJwt");

    if (!token) {
      throw new Error("No se encontró un token de usuario");
    }
    const cleanToken = token.replace(/['"]+/g, "");
    // Realiza una solicitud HTTP POST para agregar un curso al carrito
    const response = await http.post(
      `api/cart/checkout/${courseId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${cleanToken}`, // Token JWT válido
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Add to cart error:", error);
    throw error;
  }
};

// Obtener carrito del usuario
export const getCart = async () => {
  try {
    const token = localStorage.getItem("userJwt");

    if (!token) {
      throw new Error("No se encontró un token de usuario");
    }
    const cleanToken = token.replace(/['"]+/g, "");
    // Realiza una solicitud HTTP GET para obtener el carrito del usuario
    const response = await http.get("api/cart/checkout", {
      headers: {
        Authorization: `Bearer ${cleanToken}`, // Token JWT válido
      },
    });

    return response.data;
  } catch (error) {
    console.error("Get cart error:", error);
    throw error;
  }
};

// Eliminar curso del carrito
export const removeFromCart = async (courseId) => {
  try {
    const token = localStorage.getItem("userJwt");

    if (!token) {
      throw new Error("No se encontró un token de usuario");
    }
    const cleanToken = token.replace(/['"]+/g, "");
    // Realiza una solicitud HTTP DELETE para eliminar un curso del carrito
    const response = await http.delete(`api/cart/checkout/${courseId}`, {
      headers: {
        Authorization: `Bearer ${cleanToken}`, // Token JWT válido
      },
    });

    return response.data;
  } catch (error) {
    console.error("Remove from cart error:", error);
    throw error;
  }
};
