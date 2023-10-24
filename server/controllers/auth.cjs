const Admin = require("../models/admin");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Registro de usuario
exports.signup = async (req, res) => {
  try {
    const { firstName, email, password, confirmPassword } = req.body;

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Las contraseñas no coinciden" });
    }

    // Verificar si el correo electrónico ya está en uso
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El correo electrónico ya está en uso" });
    }

    // Verificar que la contraseña no sea nula y sea una cadena válida
    if (!password || typeof password !== "string") {
      return res.status(400).json({ error: "Contraseña inválida" });
    }

    // Generar un hash de contraseña seguro
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear un nuevo usuario con los datos proporcionados
    const newUser = new User({ firstName, email, password: hashedPassword });

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    // Generar un token JWT para el usuario registrado
    const token = jwt.sign({ email, role: "user" }, process.env.SECRET_USER, {
      expiresIn: "3h",
    });

    // Devolver una respuesta exitosa con el token
    return res
      .status(200)
      .json({ message: "Usuario registrado con éxito", token });
  } catch (error) {
    console.error("Error en el registro de usuario:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Inicio de sesión de usuario
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar al usuario en la base de datos por su correo electrónico
    const user = await User.findOne({ email });

    if (!user) {
      // Si el usuario no se encuentra, devolver un error 422 (Unprocessable Entity)
      return res.status(422).json({ error: "Correo o contraseña inválidos" });
    }

    // Comparar la contraseña proporcionada con el hash almacenado en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      // Si las contraseñas no coinciden, devolver un error 422 (Unprocessable Entity)
      return res.status(422).json({ error: "Correo o contraseña inválidos" });
    }

    // Generar un token JWT válido para el usuario
    const token = jwt.sign({ email, role: "user" }, process.env.SECRET_USER, {
      expiresIn: "3h",
    });

    // Devolver una respuesta exitosa con el token
    return res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    // Si ocurre un error durante el proceso, devolver un error 500 (Internal Server Error)
    console.error("Error en el inicio de sesión:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Middleware para autenticar token JWT de usuario
exports.authenticateJwtUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, process.env.SECRET_USER, (err, user) => {
        if (err) {
          // Si el token expira o no es válido, devolver un error 403 (Forbidden)
          return res.status(403).json({
            error: "Token caducado. Por favor, inicie sesión nuevamente",
          });
        }

        // Si el token es válido, asignar los datos del usuario al objeto 'req.user' para su uso posterior
        req.user = user;
        next();
      });
    } else {
      // Si no se proporciona un encabezado de autorización, devolver un error 401 (Unauthorized)
      res.status(401).json({ error: "Acceso denegado" });
    }
  } catch (error) {
    // Si ocurre un error durante el proceso, devolver un error 500 (Internal Server Error)
    console.error("Error en la autenticación JWT de usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Registro de administrador
exports.adminSignup = async (req, res) => {
  try {
    const { email, secret } = req.body;

    // Verificar que el secreto proporcionado sea válido
    if (secret !== process.env.SECRET_KEY) {
      return res
        .status(422)
        .json({ error: "Por favor, ingrese una clave secreta válida" });
    }

    // Verificar si el correo electrónico ya está en uso
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res
        .status(422)
        .json({ error: "El correo electrónico ya está en uso" });
    }

    // Crear un nuevo administrador con los datos proporcionados
    const newAdmin = new Admin(req.body);

    // Guardar el nuevo administrador en la base de datos
    await newAdmin.save();

    // Generar un token JWT para el administrador registrado
    const token = jwt.sign({ email, role: "admin" }, process.env.SECRET_ADMIN, {
      expiresIn: "3h",
    });

    // Devolver una respuesta exitosa con el token
    return res
      .status(200)
      .json({ message: "Administrador registrado con éxito", token });
  } catch (error) {
    console.error("Error en el registro de administrador:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// inicio de sesión de admin
exports.adminSignin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar al administrador en la base de datos por correo electrónico y contraseña
    const admin = await Admin.findOne({ email, password });

    if (!admin) {
      return res.status(422).json({ error: "Correo o contraseña inválidos" });
    }

    // Generar un token JWT para el administrador autenticado
    const token = jwt.sign({ email, role: "admin" }, process.env.SECRET_ADMIN, {
      expiresIn: "3h",
    });

    // Devolver una respuesta exitosa con el token
    return res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error en el inicio de sesión de administrador:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
