import http from "./http";

export const sendEmail = async (data) => {
  try {
    const response = await http.post("api/emails", data);
    return response?.data || {};
  } catch (error) {
    res.status(500).json({
      error: "Error al enviar el correo electrónico",
      details: error?.response?.data,
    });
  }
};
