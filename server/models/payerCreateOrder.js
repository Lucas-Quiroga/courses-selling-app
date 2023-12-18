const moongose = require("mongoose");

const payerOrderSchema = new moongose.Schema({
  payerFromCreateOrder: {
    name: String,
    surname: String,
    email: String,
    phone: Number,
  },
});

module.exports = moongose.model("PayerOrder", payerOrderSchema);
