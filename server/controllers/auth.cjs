const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Registro de administrador
exports.adminSignup = async (req, res) => {
  try {
    const { firstName, email, password } = req.body;

    // Verificar si el correo electrónico ya está en uso
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res
        .status(422)
        .json({ error: "El correo electrónico ya está en uso" });
    }

    // Generar un hash de contraseña seguro
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear un nuevo administrador con los datos proporcionados
    const newAdmin = new Admin({
      firstName,
      email,
      password: hashedPassword,
    });

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
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(422).json({ error: "Correo o contraseña inválidos" });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada (hasheada)
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
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

// Middleware de validación de secreto de administrador
exports.authenticateSecret = async (req, res, next) => {
  const { secret } = req.body;
  if (secret !== process.env.SECRET_ADMIN) {
    return res.status(422).json({ error: "Secreto incorrect" });
  }

  next();
};

// Middleware para autenticar token JWT de administrador
exports.authenticateJwtAdmin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // console.log(authHeader);

    if (authHeader) {
      const token = authHeader.split(" ")[1];

      jwt.verify(token, process.env.SECRET_ADMIN, (err, admin) => {
        if (err) {
          // Si el token expira o no es válido, devolver un error 403 (Forbidden)
          return res.status(403).json({
            error: "Token caducado o inválido. Acceso denegado",
          });
        }

        // Verificar si el rol del usuario es 'admin' o algún otro criterio
        if (admin.role !== "admin") {
          return res.status(403).json({
            error: "No tienes permiso para acceder a esta ruta",
          });
        }

        // Si el token es válido y el usuario es un administrador, asignar los datos del administrador al objeto 'req.admin' para su uso posterior
        req.admin = admin;
        next();
      });
    } else {
      // Si no se proporciona un encabezado de autorización, devolver un error 401 (Unauthorized)
      res.status(401).json({ error: "Acceso denegado" });
    }
  } catch (error) {
    // Si ocurre un error durante el proceso, devolver un error 500 (Internal Server Error)
    console.error("Error en la autenticación JWT de administrador:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
