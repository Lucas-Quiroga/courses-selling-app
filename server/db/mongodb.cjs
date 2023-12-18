const mongoose = require("mongoose");

mongoose.connection.on("open", () => console.log("connect success"));

// async function connectedDataBase(URI) {
//   await mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// }

async function connectedDataBase({ protocol, host, port, dataBaseName }) {
  const uniformResourceIdentifier = `${protocol}//${host}:${port}/${dataBaseName}`;
  await mongoose.connect(uniformResourceIdentifier, {
    useNewUrlParser: true,
  });
}

module.exports = connectedDataBase;
