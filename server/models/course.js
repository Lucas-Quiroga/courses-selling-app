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
    type: Number,
    required: true,
    trim: true,
  },
  thumbnail: {
    type: String,
  },
  duration: {
    type: String,
    required: true,
    trim: true,
  },
  videos: {
    type: Number,
    required: true,
    trim: true,
  },
  level: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = moongose.model("Course", courseSchema);
