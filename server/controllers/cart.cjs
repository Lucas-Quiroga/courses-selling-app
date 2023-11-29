const User = require("../models/user");

//añade al carrito
exports.addToCart = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { data } = req.body;
    let user;

    if (data && data.email) {
      // Si el email viene de Google
      user = await User.findOne({ email: data.email });
    } else {
      // Si el email viene del token de usuario
      user = await User.findOne({ email: req.user.email });
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
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
  const userEmail = req.query.email;
  try {
    let user;
    // Verifica si el email viene de Google o del token de usuario
    if (userEmail) {
      // Si el email viene de Google
      user = await User.findOne({ email: userEmail }).populate("cart.course");
    } else {
      // Si el email viene del token de usuario
      user = await User.findOne({ email: req.user.email }).populate(
        "cart.course"
      );
    }

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

// Elimina del carrito
exports.removeFromCart = async (req, res) => {
  const userEmail = req.query.email;

  try {
    const { courseId } = req.params;
    let user;

    // Verifica si el email viene de Google o del token de usuario
    if (userEmail) {
      // Si el email viene de Google
      user = await User.findOne({ email: userEmail });
    } else {
      // Si el email viene del token de usuario
      user = await User.findOne({ email: req.user.email });
    }

    if (!user) {
      return res.status(403).json({ error: "User not found" });
    }

    // Encuentra el índice del curso en el carrito
    const courseIndexInCart = user.cart.findIndex((item) =>
      item.course.equals(courseId)
    );

    if (courseIndexInCart > -1) {
      // Si el curso está en el carrito, elimínalo
      user.cart.splice(courseIndexInCart, 1);
      await user.save();
    }

    res.json({ cart: user.cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
