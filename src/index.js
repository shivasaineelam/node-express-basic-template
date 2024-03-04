const express = require("express");
const apiroutes = require("./routes");
const { serverConfig, loggerConfig } = require("./config");
const app = express();
app.use("/api", apiroutes);
app.listen(serverConfig.PORT, () => {
  console.log("connected to port ", serverConfig.PORT);
  loggerConfig.logger.info("successfully started the server", "root", {});
});
