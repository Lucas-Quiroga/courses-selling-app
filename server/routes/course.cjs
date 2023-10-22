const express = require("express");
const router = express.Router();
const {
  courses,
  course,
  purchasesCourse,
  createCourse,
} = require("../controllers/course.cjs");
const { authenticateJwtUser } = require("../controllers/auth.cjs");

router.get("/user/courses", courses);
router.get("/user/course/:courseId", course);
router.post("/user/purchased", authenticateJwtUser, purchasesCourse);

router.post("/admin/create", authenticateJwtUser, createCourse);

module.exports = router;
