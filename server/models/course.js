const moongose = require("mongoose");

const courseSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: String,
    required: true,
    trim: true,
  },
  modules: [],
  thumbnail: {
    type: String,
  },
});

module.exports = moongose.model("Course", courseSchema);
