const router = require("express").Router();
const userRoutes = require("./users");
const itemRoutes = require("./clothingItem");

router.use("/users", userRoutes);
router.use("/items", itemRoutes);

router.use("*", (req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

module.exports = router;
