const moongose = require("mongoose");

const userSchema = new moongose.Schema({
  googleId: {
    type: String,
    trim: true,
  },
  isGoogleUser: {
    type: Boolean,
    default: false,
  },
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
  image: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: function () {
      return !this.isGoogleUser;
    },
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
