const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    if (process.env.NODE_ENV !== "production") {
      console.log("Connected to DB");
    }
  })
  .catch(console.error);

app.use((req, res, next) => {
  req.user = {
    _id: "68389641b3c5817cd8c56b19",
  };
  next();
});

app.use(routes);

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Server is running on port ${PORT}`);
  }
});
