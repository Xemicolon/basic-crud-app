require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const AppRoutes = require("../api/index");
const { db } = require("./mongoose.js");

const app = express();
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CORS_PROD
        : process.env.CORS_LOCAL,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (app.get("env") === "production") {
  app.set("trust proxy", 1);
}
app.disable("x-powered-by");
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json({ limit: "10kb" }));

// Connect to database
db();

// load api routes
app.use("/api", AppRoutes);

<<<<<<< HEAD
=======

>>>>>>> 6fe99c214ca8eb3dd381e65f99ea9d48b0ee3e4e
app.get("*", (req, res) => {
  res.status(404).json("This route or page doesn't exist yet");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
    },
  });
});

module.exports = { app };
