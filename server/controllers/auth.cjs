const Admin = require("../models/admin");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

// registro de usuario
exports.signup = async (req, res) => {
  const { firstName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Las contraseñas no coinciden" });
  }

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    }
    if (!password || typeof password !== "string") {
      throw new Error("Contraseña inválida");
    }
    const newUser = new User({ firstName, email, password });
    await newUser.save();
    const token = jwt.sign({ email, role: "user" }, process.env.SECRET_USER, {
      expiresIn: "3h",
    });
    return res.status(200).json({ message: "User create successfully", token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// inicio de sesión de usuario
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(422).json({ error: "Invalid email or password" });
    } else {
      const token = jwt.sign({ email, role: "user" }, process.env.SECRET_USER, {
        expiresIn: "3h",
      });
      return res.json({ message: "Logged in successfully", token });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

//bearer token
exports.authenticateJwtUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_USER, (err, user) => {
      if (err) {
        return res
          .status(403)
          .json({ error: "Token expired. Please login again" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ error: "Acces Denied" });
  }
};

// registro de admin
exports.adminSignup = async (req, res) => {
  const { email, secret } = req.body;
  const newAdmin = new Admin(req.body);

  if (secret !== process.env.SECRET_KEY) {
    return res.status(422).json({ error: "Please enter valid secret key" });
  }
  try {
    const admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(422).json({ error: "Email already exists" });
    }
    await newAdmin.save();
    const token = jwt.sign({ email, role: "admin" }, process.env.SECRET_ADMIN, {
      expiresIn: "3h",
    });
    return res
      .status(200)
      .json({ message: "Admin create successfully", token });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

// inicio de sesión de admin
exports.adminSignin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email, password });
    if (!admin) {
      return res.status(422).json({ error: "Invalid email or password" });
    } else {
      const token = jwt.sign(
        { email, role: "admin" },
        process.env.SECRET_ADMIN,
        {
          expiresIn: "3h",
        }
      );
      return res.json({ message: "Logged in successfully", token });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
