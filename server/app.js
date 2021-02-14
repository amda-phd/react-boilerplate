const express = require("express");
const morgan = require("morgan");
const errorhandler = require("errorhandler");
const bodyParser = require("body-parser");
const path = require("path");

// Setup my app
const app = express();
app.use(express.json());
app.use(
  morgan(
    process.env.NODE_ENV == "dev"
      ? ":method :url :status :response-time ms - :res[content-length]"
      : "tiny"
  )
);
if (process.env.NODE_ENV) {
  app.use(errorhandler());
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Backend Routes
const health = require("./routers/health");
app.use(health);

// Frontend
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

module.exports = app;
