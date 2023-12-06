const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_KEY);

// Controlador para enviar un correo electrónico de saludo
exports.sendEmail = async (req, res) => {
  try {
    // Obtener datos del cuerpo de la solicitud
    const { from, to, subject, html } = req.body;

    // Asegurarse de que los datos necesarios estén presentes
    if (!from || !to || !subject || !html) {
      return res
        .status(400)
        .json({ error: "Faltan datos del correo electrónico" });
    }

    // Construir los datos del correo electrónico
    const emailData = {
      from,
      to: Array.isArray(to) ? to : [to], // Asegurarse de que 'to' sea un array
      subject,
      html,
    };

    // Enviar el correo electrónico usando Resend
    const data = await resend.emails.send(emailData);

    // Registrar la respuesta en la consola
    console.log(data);

    // Responder con un mensaje de éxito
    res
      .status(200)
      .json({ message: "Correo electrónico enviado con éxito", data });
  } catch (error) {
    // Manejar errores y responder con un mensaje de error
    console.error(error);
    res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
};
