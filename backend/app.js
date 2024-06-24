const express = require("express");
const app = express();
app.use(express.json());
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "config/.env",
    });
  }

module.exports = app;
