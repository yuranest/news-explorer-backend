const router = require("express").Router();
const userRoutes = require("./users");
const itemRoutes = require("./clothingItem");
const { ERROR_NOT_FOUND } = require("../utils/errors");

router.use("/users", userRoutes);
router.use("/items", itemRoutes);

router.use("*", (req, res) => {
  res.status(ERROR_NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
