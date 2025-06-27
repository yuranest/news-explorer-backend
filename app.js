require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");
const errorHandler = require("./middlewares/error-handler");
const { requestLogger, errorLogger } = require("./middlewares/logger");
const rateLimiter = require("./middlewares/rateLimiter");

const app = express();
const PORT = process.env.PORT || 3001;
app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(rateLimiter);

app.use(requestLogger); // loger request
app.use(routes); // routes

app.use(errorLogger); // error log
app.use(errors()); // celebrate error handler
app.use(errorHandler); // centralized error handler

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log("Connected to DB");
    }
  })
  .catch(console.error);

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Server is running on port ${PORT}`);
  }
});
