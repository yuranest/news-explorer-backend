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

// Connect to DB
mongoose
  .connect(process.env.MONGO_URL || "mongodb://127.0.0.1:27017/news_db")
  .then(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log("Connected to DB");
    }
  })
  .catch(console.error);

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(rateLimiter);
app.use(requestLogger);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

// Crash test route
app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

module.exports = app;

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
