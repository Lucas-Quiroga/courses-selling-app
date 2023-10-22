const mongoose = require("mongoose");

mongoose.connection.on("open", () => console.log("connect success"));

async function connectedDataBase(URI) {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectedDataBase;
