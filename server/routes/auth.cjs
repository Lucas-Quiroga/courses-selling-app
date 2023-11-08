const express = require("express");
const router = express.Router();
const {
  signin,
  signup,
  adminSignin,
  adminSignup,
  authenticateSecret,
  authenticateJwtUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/auth.cjs");

router.post("/user/signup", signup);
router.post("/user/signin", signin);

// Ruta para recuperar el perfil del usuario y actualizar
router.get("/user/profile", authenticateJwtUser, getUserProfile);
router.put("/user/profile", authenticateJwtUser, updateUserProfile);

router.post("/admin/signup", authenticateSecret, adminSignup);
router.post("/admin/signin", adminSignin);

module.exports = router;
