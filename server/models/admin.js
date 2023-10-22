const moongose = require("mongoose");

const adminSchema = new moongose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = moongose.model("Admin", adminSchema);
