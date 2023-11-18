const User = require("../models/user");

exports.addToCart = async (req, res) => {
  try {
    const { courseId } = req.params;

    const user = await User.findOne({ email: req.user.email });

    if (!user) {
      return res.status(403).json({ error: "User not found" });
    }

    // Verifica si el curso ya está en el carrito
    const courseExistsInCart = user.cart.some((item) =>
      item.course.equals(courseId)
    );

    if (!courseExistsInCart) {
      // Si no está en el carrito, agrégalo
      user.cart.push({ course: courseId });
      await user.save();
    }

    res.json({ cart: user.cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controlador para obtener el carrito del usuario
exports.getCart = async (req, res) => {
  try {
    // Encuentra al usuario por su correo electrónico
    const user = await User.findOne({ email: req.user.email });

    if (!user) {
      return res.status(403).json({ error: "User not found" });
    }

    // Devuelve el carrito del usuario
    res.json({ cart: user.cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
