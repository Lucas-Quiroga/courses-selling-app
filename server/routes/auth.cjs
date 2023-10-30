const express = require("express");
const router = express.Router();
const {
  signin,
  signup,
  adminSignin,
  adminSignup,
  authenticateSecret,
} = require("../controllers/auth.cjs");

router.post("/user/signup", signup);
router.post("/user/signin", signin);
router.post("/admin/signup", authenticateSecret, adminSignup);
router.post("/admin/signin", adminSignin);

module.exports = router;
