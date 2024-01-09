const express = require("express");
const router = express.Router();
const {
  courses,
  course,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/course.cjs");
const { authenticateJwtAdmin } = require("../controllers/auth.cjs");

// Rutas públicas
router.get("/user/courses", courses);
router.get("/user/course/:courseId", course);

// Rutas protegidas para administradores
router.post("/admin/create", authenticateJwtAdmin, createCourse);
router.put("/admin/update/:courseId", authenticateJwtAdmin, updateCourse);
router.delete("/admin/delete/:courseId", authenticateJwtAdmin, deleteCourse);

module.exports = router;
