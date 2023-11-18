const moongose = require("mongoose");

const userSchema = new moongose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNo: {
    type: String,
  },
  purchasedCourses: [
    {
      type: moongose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  cart: [
    {
      course: {
        type: moongose.Schema.Types.ObjectId,
        ref: "Course",
      },
    },
  ],
});

module.exports = moongose.model("User", userSchema);
