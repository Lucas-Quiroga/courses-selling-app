const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const connectedDataBase = require("./db/mongodb.cjs");
const authRoutes = require("./routes/auth.cjs");
const courseRoutes = require("./routes/course.cjs");
const cartRoutes = require("./routes/cart.cjs");

const corsOptions = {
  origin: "http://localhost:3000", // Reemplaza con el origen de tu aplicación frontend
  credentials: true, // Habilita el envío de cookies y credenciales en las solicitudes
};

app.use(cors(corsOptions));
dotenv.config();
// Analiza datos codificados en formato URL.
app.use(bodyParser.urlencoded({ extended: true }));
// Analiza datos en formato JSON en las solicitudes.
app.use(bodyParser.json());

app.use("/api", authRoutes);
app.use("/api", courseRoutes);
app.use("/api", cartRoutes);

app.get("/ping", (req, res) => {
  res.send("pong");
});

async function initApp() {
  try {
    await connectedDataBase(process.env.MONGO_CONNECTION);
    const port = process.env.PORT || process.env.APP_PORT;
    app.listen(port, () => console.log(`Listen on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}
initApp();
