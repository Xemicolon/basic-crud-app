const { app } = require("./loaders/app");
const config = require("./config/index");
const http = require("http");

function startServer() {
  const server = http.createServer(app);
  server.listen(config.port, () => {
    console.log("Server is up and running...");
  });
}

startServer();
