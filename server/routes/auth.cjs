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
  deleteUser,
  signinWithGoogle,
} = require("../controllers/auth.cjs");

router.post("/user/signup", signup);
router.post("/user/signin", signin);

// Ruta para recuperar el perfil del usuario
router.get("/user/profile", authenticateJwtUser, getUserProfile);
//Ruta para actualizar el usuario
router.put("/user/profile", authenticateJwtUser, updateUserProfile);
//Ruta para eliminar la cuenta del usuario
router.delete("/user/delete", authenticateJwtUser, deleteUser);

//Ruta para registra al admin
router.post("/admin/signup", authenticateSecret, adminSignup);
//Ruta para ingresar al admin
router.post("/admin/signin", adminSignin);

// Nueva ruta para manejar la información del usuario de Google
router.post("/user/saveGoogleUser", signinWithGoogle);

module.exports = router;
