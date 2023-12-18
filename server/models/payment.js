const moongose = require("mongoose");

const paymentSchema = new moongose.Schema({
  paymentId: {
    type: Number,
    unique: true,
  },
  payer: {
    id: {
      type: String,
      required: true,
    },
    name: String,
    surname: String,
    email: String,
    phone: String, // Cambiado a String para manejar números que comienzan con cero
  },
  transactionAmount: Number,
  currencyId: String,
  status: String,
  statusDetail: String,
  paymentMethodId: String,
  dateApproved: Date,
  dateCreated: Date,
});

module.exports = moongose.model("Payment", paymentSchema);

// id: Identificador único del pago.

// Información de la Orden:
// order.id: ID de la orden asociada al pago.
// order.type: Tipo de la orden (puede ser útil para distinguir entre diferentes tipos de órdenes).

// Información del Comprador (Payer):
// payer.id: ID del comprador.
// payer.name: Nombre del comprador.
// payer.surname: Apellido del comprador.
// payer.email: Correo electrónico del comprador.
// payer.phone: Numero del comprador.

// Información del Pago:
// transaction_amount: Monto total de la transacción.
// currency_id: Moneda utilizada.
// status: Estado del pago (puede ser "approved", "pending", etc.).
// status_detail: Detalle del estado del pago.
// payment_method_id: ID del método de pago utilizado.

// Información de Fecha y Hora:
// date_approved: Fecha y hora de aprobación del pago.
// date_created: Fecha y hora de creación del pago.
