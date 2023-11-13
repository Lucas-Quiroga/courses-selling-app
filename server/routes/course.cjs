const express = require("express");
const router = express.Router();
const {
  courses,
  course,
  purchasesCourse,
  createCourse,
  updateCourse,
} = require("../controllers/course.cjs");
const {
  authenticateJwtUser,
  authenticateJwtAdmin,
} = require("../controllers/auth.cjs");

// Rutas públicas
router.get("/user/courses", courses);
router.get("/user/course/:courseId", course);
router.post("/user/purchased", authenticateJwtUser, purchasesCourse);

// Rutas protegidas para administradores
router.post("/admin/create", authenticateJwtAdmin, createCourse);
router.put("/admin/update/:courseId", authenticateJwtAdmin, updateCourse);
// router.delete("/admin/delete/:courseId", authenticateJwtAdmin, deleteCourse);

module.exports = router;
