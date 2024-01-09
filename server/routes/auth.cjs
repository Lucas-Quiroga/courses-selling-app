const express = require("express");
const router = express.Router();
const {
  adminSignin,
  adminSignup,
  authenticateSecret,
} = require("../controllers/auth.cjs");

//Ruta para registra al admin
router.post("/admin/signup", authenticateSecret, adminSignup);
//Ruta para ingresar al admin
router.post("/admin/signin", adminSignin);

module.exports = router;
