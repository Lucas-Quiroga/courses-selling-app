const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cart.cjs");
const { authenticateJwtUser } = require("../controllers/auth.cjs");

// Ruta para agregar un curso al carrito de usuario
router.post("/cart/checkout/:courseId", authenticateJwtUser, addToCart);

// Ruta para agregar un curso al carrito de usuario de google
router.post("/cart/checkout/google/:courseId", addToCart);

// Ruta para obtener el carrito del usuario
router.get("/cart/checkout", authenticateJwtUser, getCart);

// Ruta para obtener el carrito del usuario de google
router.get("/cart/google/checkout", getCart);

// Ruta para eliminar un item del carrito del usuario
router.delete("/cart/checkout/:courseId", authenticateJwtUser, removeFromCart);

// Ruta para eliminar un item del carrito del usuario de google
router.delete("/cart/checkout/google/:courseId", removeFromCart);
module.exports = router;
