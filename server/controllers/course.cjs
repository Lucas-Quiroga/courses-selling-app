const Admin = require("../models/admin");
const User = require("../models/user");
const Courses = require("../models/course");

exports.courses = async (req, res) => {};

//detalle del cuso individual
exports.course = async (req, res) => {
  try {
    const course = await Courses.findById(req.params.courseId);
    if (course) {
      res.json({ course });
    } else {
      res.status(400).json({ error: "Course not found" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.purchasesCourse = async (req, res) => {
  try {
    const user = User.findOne({ email: req.user.email });
    if (!user) {
      res.status(403).json({ error: "User not found" });
    } else {
      res.json({ purchases: this.purchasesCourse });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.createCourse = async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    res.status(400).json({
      error: "Please include all fields",
    });
  }

  try {
    const course = new Courses(req.body);
    await course.save();

    res.json({ message: "Course created successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
