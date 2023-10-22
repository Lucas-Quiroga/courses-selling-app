const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const connectedDataBase = require("./db/mongodb.cjs");
const authRoutes = require("./routes/auth.cjs");
const courseRoutes = require("./routes/course.cjs");

app.use(cors());
dotenv.config();
// Analiza datos codificados en formato URL.
app.use(bodyParser.urlencoded({ extended: true }));
// Analiza datos en formato JSON en las solicitudes.
app.use(bodyParser.json());

app.use("/api", authRoutes);
app.use("/api", courseRoutes);

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
