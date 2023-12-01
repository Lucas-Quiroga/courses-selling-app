const Admin = require("../models/admin");
const User = require("../models/user");
const Courses = require("../models/course");

exports.courses = async (req, res) => {
  const courses = await Courses.find();
  res.json({ courses });
};

//detalle del curso individual
exports.course = async (req, res) => {
  // console.log("desde el servidor", req.params.courseId);
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
  const { name, description, price, modules, thumbnail } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({
      error: "Por favor, completa todos los campos requeridos.",
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

// Función para actualizar el curso
exports.updateCourse = async (req, res) => {
  const courseId = req.params.courseId;
  const updatedCourseData = req.body;

  if (!courseId || !updatedCourseData) {
    return res.status(400).json({
      error:
        "Por favor, proporciona el courseId y los datos actualizados del curso.",
    });
  }

  try {
    const existingCourse = await Courses.findById(courseId);

    if (!existingCourse) {
      return res.status(404).json({ error: "Curso no encontrado" });
    }

    // Actualiza los campos del curso con los nuevos datos
    existingCourse.name = updatedCourseData.name || existingCourse.name;
    existingCourse.description =
      updatedCourseData.description || existingCourse.description;
    existingCourse.price = updatedCourseData.price || existingCourse.price;
    existingCourse.modules =
      updatedCourseData.modules || existingCourse.modules;
    existingCourse.thumbnail =
      updatedCourseData.thumbnail || existingCourse.thumbnail;

    // Guarda los cambios en la base de datos
    await existingCourse.save();

    res.json({ message: "Curso actualizado exitosamente" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para eliminar un curso
exports.deleteCourse = async (req, res) => {
  const courseId = req.params.courseId;

  try {
    // Verifica si el curso existe y lo elimina
    const courseDelete = await Courses.findByIdAndDelete(courseId);

    if (!courseDelete) {
      return res.status(404).json({ error: "Curso no encontrado" });
    }

    // Elimina el curso de la base de datos
    res.json({ message: "Curso eliminado exitosamente", courseDelete });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
