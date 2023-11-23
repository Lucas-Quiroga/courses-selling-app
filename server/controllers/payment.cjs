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

  // Obtén la información de los cursos desde el cuerpo de la solicitud
  const courses = req.body.body.items;

  // Crea el objeto de la orden con la información de los cursos
  const body = {
    items: courses.map((course) => ({
      title: course.title,
      unit_price: course.unit_price,
      currency_id: course.currency_id,
      quantity: course.quantity,
    })),
    back_urls: {
      success: "http://localhost:3002/success",
      failure: "http://localhost:3002/failure",
      pending: "http://localhost:3002/pending",
    },
    notification_url: "https://11ac-179-37-57-82.ngrok.io/api/webhook",
  };

  // // Crea el objeto de la orden
  // const body = {
  //   items: [
  //     {
  //       title: "notebook",
  //       unit_price: 500,
  //       currency_id: "ARS",
  //       quantity: 1,
  //     },
  //   ],
  //   back_urls: {
  //     success: "http://localhost:3002/success",
  //     failure: "http://localhost:3002/failure",
  //     pending: "http://localhost:3002/pending",
  //   },
  //   notification_url: "https://11ac-179-37-57-82.ngrok.io/api/webhook",
  // };

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

exports.receiveWebhook = async (req, res) => {
  const { MercadoPagoConfig, MerchantOrder, Payment } = mercadopago;
  const notification = req.query;

  // Inicializa el objeto de configuración del cliente
  const client = new MercadoPagoConfig({
    accessToken:
      "TEST-21157999888645-112216-8258facdcc5f307f6172d2707eb030e7-1417957197",
    options: { timeout: 5000, idempotencyKey: "abc" },
  });

  try {
    if (notification.topic === "merchant_order") {
      // Inicializa el objeto de orden de comerciante
      const merchantOrder = new MerchantOrder(client);

      // Obtiene los detalles de la orden de comerciante
      const data = await merchantOrder.get({ id: notification.id });

      console.log(data);

      res.sendStatus(204);
    } else if (notification.type === "payment") {
      // Inicializa el objeto de pago
      const payment = new Payment(client);

      // Obtiene los detalles del pago
      const data = await payment.get({ id: notification["data.id"] });

      console.log(data);

      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
