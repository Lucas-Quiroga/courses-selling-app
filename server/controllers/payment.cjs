const mercadopago = require("mercadopago");
const Payment = require("../models/payment");
const payerOrderSchema = require("../models/payerCreateOrder");

exports.createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: process.env.MERCADOPAGO_TOKEN,
  });

  // Obtén la información del curso desde el cuerpo de la solicitud
  const course = req.body.body.items[0]; // Tomar el primer curso
  const payerOrder = req.body.body.payer;
  const result = await mercadopago.preferences.create({
    items: [
      {
        title: course.title,
        unit_price: course.unit_price,
        currency_id: course.currency_id,
        quantity: course.quantity,
      },
    ],
    payer: {
      phone: {
        number: Number(payerOrder.phone.number),
      },
      email: payerOrder.email,
      name: payerOrder.name,
      surname: payerOrder.surname,
    },
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3002/api/failure",
      pending: "http://localhost:3002/api/pending",
    },
    auto_return: "approved",
    notification_url:
      "https://e816-2802-8010-8b05-9e00-dcbe-a618-1eb4-e36e.ngrok-free.app/api/webhook",
  });

  // console.log(JSON.stringify(result.body, null, 2));

  res.send(result.body);
};

exports.receiveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log("soy la data del payment", data);
      //store in database
      const newPayment = new Payment({
        paymentId: data.body.id,
        payer: {
          id: data.body.payer.id.toString(),
          name: data.body.payer.first_name,
          surname: data.body.payer.last_name,
          email: data.body.payer.email,
          phone: data.body.payer.phone.number,
        },
        transactionAmount: data.body.transaction_amount,
        currencyId: data.body.currency_id,
        status: data.body.status,
        statusDetail: data.body.status_detail,
        paymentMethodId: data.body.payment_method_id,
        dateApproved: new Date(data.body.date_approved),
        dateCreated: new Date(data.body.date_created),
      });

      // // // Guardar en la base de datos
      await newPayment.save();
      console.log("Payment saved successfully");
    }
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message });
  }
};

exports.saveDataUser = async (req, res) => {
  try {
    const { name, surname, email, phone } = req.body;

    // Crear un nuevo usuario con los datos proporcionados
    const newPayer = new payerOrderSchema({ name, surname, email, phone });

    // Guardar el nuevo usuario en la base de datos
    await newPayer.save();

    // Devolver una respuesta exitosa con el token
    return res
      .status(200)
      .json({ message: "Información registrado con éxito" });
  } catch (error) {
    console.error("Error en el registro de usuario:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
