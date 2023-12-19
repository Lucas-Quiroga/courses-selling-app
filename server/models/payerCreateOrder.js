const moongose = require("mongoose");

const payerOrderSchema = new moongose.Schema({
  name: String,
  surname: String,
  email: String,
  phone: Number,
});

module.exports = moongose.model("PayerOrder", payerOrderSchema);
