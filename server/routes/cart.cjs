const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cart.cjs");
const { authenticateJwtUser } = require("../controllers/auth.cjs");

// Ruta para agregar un curso al carrito
router.post("/cart/checkout/:courseId", authenticateJwtUser, addToCart);

// Ruta para obtener el carrito del usuario
router.get("/cart/checkout", authenticateJwtUser, getCart);

// Ruta para eliminar un item del carrito del usuario
router.delete("/cart/checkout/:courseId", authenticateJwtUser, removeFromCart);

module.exports = router;
