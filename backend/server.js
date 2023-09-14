const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config;

// const apiRoutes = require("./routes/apiRoutes");

const setupServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(morgan("dev"));
  app.use(cookieParser());
  //   app.use("/", apiRoutes);
  return app.listen({ port: process.env.PORT || 3000 }, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  });
};

module.exports = setupServer;
