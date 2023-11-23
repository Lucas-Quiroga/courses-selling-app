const Admin = require("../models/admin");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookie = require("cookie");

const { serialize } = cookie;

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
      expiresIn: 60 * 60 * 24 * 7,
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
      expiresIn: 60 * 60 * 24 * 7,
    });

    if (user) {
      const serialized = serialize("userJwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: 60 * 60 * 24 * 7, // Duración de la cookie en segundos
        path: "/", // Ruta de acceso
      });

      res.cookie("userJwt", serialized);
    }

    // Devolver una respuesta exitosa con el token
    return res.json({ message: "login succesfully", token });
  } catch (error) {
    // Si ocurre un error durante el proceso, devolver un error 500 (Internal Server Error)
    console.error("Error en el inicio de sesión:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Middleware para autenticar token JWT de usuario
exports.authenticateJwtUser = (req, res, next) => {
  // console.log("soy el token", req.headers.authorization);
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: "Acceso denegado" });
    }

    const tokenWithoutBearer = token.replace("Bearer ", "");

    jwt.verify(tokenWithoutBearer, process.env.SECRET_USER, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(403).json({
            error: "Token caducado. Por favor, inicie sesión nuevamente",
          });
        } else {
          return res.status(403).json({
            error: "Token no válido. Inicie sesión para obtener un nuevo token",
          });
        }
      }

      // Si el token es válido, asignar los datos del usuario al objeto 'req.user' para su uso posterior
      req.user = user;

      next();
    });
  } catch (error) {
    // Si ocurre un error durante el proceso, devolver un error 500 (Internal Server Error)
    console.error("Error en la autenticación JWT de usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Recuperar perfil de usuario
exports.getUserProfile = async (req, res) => {
  try {
    // Verifica si el usuario autenticado está disponible en req.user
    if (!req.user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Obtiene el correo electrónico del usuario autenticado
    const { email } = req.user;

    // Busca al usuario en la base de datos por su correo electrónico
    const userSearchInDb = await User.findOne({ email });

    if (!userSearchInDb) {
      return res
        .status(404)
        .json({ error: "Usuario no encontrado en la base de datos" });
    }

    // Filtra los campos que deseas incluir en el perfil del usuario
    const userProfile = {
      firstName: userSearchInDb.firstName,
      email: userSearchInDb.email,
      // Agrega otros campos de perfil que necesites
    };

    return res.status(200).json(userProfile);
  } catch (error) {
    console.error("Error al recuperar el perfil de usuario:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Actualizar perfil de usuario
exports.updateUserProfile = async (req, res) => {
  const { firstName, newPassword, phoneNo } = req.body;

  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const { email } = user;

    const getUserDb = await User.findOne({ email });

    if (!getUserDb) {
      return res
        .status(404)
        .json({ error: "Usuario no encontrado en la base de datos" });
    }

    // Ejemplo de validación de entrada para la nueva contraseña
    if (
      !newPassword ||
      typeof newPassword !== "string" ||
      newPassword.length < 8
    ) {
      return res
        .status(400)
        .json({ error: "La nueva contraseña no es válida" });
    }

    // Hash de la nueva contraseña
    let hashedPassword;
    if (newPassword !== undefined) {
      // Verificar que la contraseña sea una cadena válida
      if (typeof newPassword !== "string") {
        return res
          .status(400)
          .json({ error: "La contraseña debe ser una cadena de texto" });
      }

      try {
        // Generar un hash de contraseña seguro
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(newPassword, salt);
      } catch (error) {
        console.error("Error al hashear la contraseña:", error);
        return res
          .status(500)
          .json({ error: "Error al hashear la contraseña" });
      }
    }
    // Actualiza el documento en base a la búsqueda por el campo `_id` (identificador)
    const updatedUser = await User.findOneAndUpdate(
      { _id: getUserDb._id },
      {
        $set: {
          firstName: firstName || user.firstName,
          phoneNo: phoneNo || user.phoneNo,
          ...(hashedPassword && { password: hashedPassword }),
        },
      },
      { new: true } // Devuelve el documento actualizado
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ error: "Usuario no encontrado en la base de datos" });
    }

    return res
      .status(200)
      .json({ message: "Perfil actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el perfil de usuario:", error);
    return res
      .status(500)
      .json({ error: "Error al actualizar el perfil de usuario" });
  }
};

// Eliminar al usuario
exports.deleteUser = async (req, res) => {
  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const { email } = user;

    // Implementa la lógica de eliminación de cuenta en la base de datos
    await User.findOneAndDelete({ email });

    // Añade cualquier otra lógica necesaria (como cerrar sesión, limpiar tokens, etc.)

    return res.status(200).json({ message: "Cuenta eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la cuenta de usuario:", error);
    return res
      .status(500)
      .json({ error: "Error al eliminar la cuenta de usuario" });
  }
};

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
