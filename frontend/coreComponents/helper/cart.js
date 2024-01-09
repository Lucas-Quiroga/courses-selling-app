import http from "./http";
//MERCADO PAGO
export const createOrder = async (data, userData) => {
  try {
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
    };

    // Realiza la solicitud para crear la preferencia
    const response = await http.post("api/create-order", { body });
    const responseUserDataSave = await http.post("api/user-save", userData);
    return response.data;
  } catch (error) {
    console.error("Create order error:", error);
    throw error;
  }
};
