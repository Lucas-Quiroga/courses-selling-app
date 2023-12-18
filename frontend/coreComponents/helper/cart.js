import http from "./http";
import { getSession } from "next-auth/react";

// Agregar curso al carrito
export const addToCart = async (courseId) => {
  try {
    const session = await getSession();
    // console.log(session);
    if (session) {
      // Realizar operaciones necesarias en función de la sesión de usuario de google
      const response = await http.post(`api/cart/checkout/google/${courseId}`, {
        data: {
          email: session.user.email,
        },
      });
      return response.data;
    } else {
      // Si es un usuario normal que me haga la peticion con el token
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
    }
  } catch (error) {
    console.error("Add to cart error:", error);
    throw error;
  }
};

// Obtener carrito del usuario
export const getCart = async () => {
  try {
    const session = await getSession();
    if (session) {
      // Realizar operaciones necesarias en función de la sesión de usuario de google
      const response = await http.get(
        `api/cart/google/checkout?email=${encodeURIComponent(
          session.user.email
        )}`
      );
      return response.data;
    } else {
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
    }
  } catch (error) {
    console.error("Get cart error:", error);
    throw error;
  }
};

// Eliminar curso del carrito
export const removeFromCart = async (courseId) => {
  try {
    const session = await getSession();

    if (session) {
      // Realiza una solicitud HTTP DELETE para eliminar un curso del carrito del usuario de Google
      const response = await http.delete(
        `api/cart/checkout/google/${courseId}?email=${encodeURIComponent(
          session.user.email
        )}`
      );
      return response.data;
    } else {
      // Si es un usuario normal, eliminar el curso con el token
      const token = localStorage.getItem("userJwt");

      if (!token) {
        throw new Error("No se encontró un token de usuario");
      }
      const cleanToken = token.replace(/['"]+/g, "");
      // Realiza una solicitud HTTP DELETE para eliminar un curso del carrito del usuario
      const response = await http.delete(`api/cart/checkout/${courseId}`, {
        headers: {
          Authorization: `Bearer ${cleanToken}`, // Token JWT válido
        },
      });

      return response.data;
    }
  } catch (error) {
    console.error("Remove from cart error:", error);
    throw error;
  }
};

//MERCADO PAGO

export const createOrder = async (data, userData) => {
  try {
    // Aquí puedes procesar la información de los cursos y enviarla a MercadoPago
    // Ten en cuenta que el formato de los datos puede variar según la API de MercadoPago actualizada

    // Ejemplo de cómo puedes estructurar el cuerpo para MercadoPago
    const body = {
      items: [
        {
          title: data.name,
          unit_price: data.price,
          currency_id: "ARS",
          quantity: 1,
        },
      ],
      payer: {
        phone: {
          number: userData.phone,
        },
        email: userData.email,
        name: userData.name,
        surname: userData.surname,
      },
      back_urls: {
        success: "http://localhost:3002/success",
        failure: "http://localhost:3002/failure",
        pending: "http://localhost:3002/pending",
      },
      notification_url: "https://11ac-179-37-57-82.ngrok.io/api/webhook",
    };

    // Realiza la solicitud para crear la preferencia
    const response = await http.post("api/create-order", { body });

    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Create order error:", error);
    throw error;
  }
};

// export const receiveWebhookUserData = async (user) => {
//   try {
//     // Realiza la solicitud para crear la preferencia
//     const response = await http.post("api/webhook", {
//       data: user,
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Create order error:", error);
//     throw error;
//   }
// };
