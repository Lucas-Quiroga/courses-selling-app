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

//MERCADO PAGO

export const createOrder = async (courses) => {
  try {
    // Aquí puedes procesar la información de los cursos y enviarla a MercadoPago
    // Ten en cuenta que el formato de los datos puede variar según la API de MercadoPago actualizada

    // Ejemplo de cómo puedes estructurar el cuerpo para MercadoPago
    const body = {
      items: courses.map((course) => ({
        title: course.name,
        unit_price: course.price,
        currency_id: "ARS",
        quantity: 1,
      })),
      back_urls: {
        success: "http://localhost:3002/success",
        failure: "http://localhost:3002/failure",
        pending: "http://localhost:3002/pending",
      },
      notification_url: "https://11ac-179-37-57-82.ngrok.io/api/webhook",
    };

    // Realiza la solicitud para crear la preferencia
    const response = await http.post("api/create-order", { body });

    return response.data;
  } catch (error) {
    console.error("Create order error:", error);
    throw error;
  }
};
