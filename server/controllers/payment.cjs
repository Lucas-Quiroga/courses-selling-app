const mercadopago = require("mercadopago");

exports.createOrder = async (req, res) => {
  const { MercadoPagoConfig, Preference } = mercadopago;

  // Inicializa el objeto de configuración del cliente
  const client = new MercadoPagoConfig({
    accessToken:
      "TEST-21157999888645-112216-8258facdcc5f307f6172d2707eb030e7-1417957197",
    options: { timeout: 5000, idempotencyKey: "abc" },
  });

  // Inicializa el objeto de preferencia
  const preference = new Preference(client);

  // Crea el objeto de la orden
  const body = {
    items: [
      {
        title: "notebook",
        unit_price: 500,
        currency_id: "ARS",
        quantity: 1,
      },
    ],
    back_urls: {
      success: "http://localhost:3002/success",
      failure: "http://localhost:3002/failure",
      pending: "http://localhost:3002/pending",
    },
    notification_url:
      "https://3c72-2802-8010-8b3c-9000-f941-88aa-1c0c-9e61.ngrok.io/webhook",
  };

  // Realiza la solicitud para crear la preferencia
  preference
    .create({ body })
    .then((response) => {
      console.log(JSON.stringify(response, null, 2)); // Imprime el resultado completo
      // Aquí puedes enviar la respuesta al cliente, por ejemplo:
      res.send(response);
    })
    .catch((error) => {
      console.error("Error al crear la preferencia:", error);
      // Maneja el error según sea necesario y envía una respuesta al cliente
      res.status(500).send({ error: "Error interno del servidor" });
    });
};
