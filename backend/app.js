// const express = require("express");
// const app = express();
// app.use(express.json());
// // config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//     require("dotenv").config({
//       path: "config/.env",
//     });
//   }

// module.exports = app;


const express = require("express");
const app = express();

app.use(express.json());

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env"
    });
}

module.exports = app;
