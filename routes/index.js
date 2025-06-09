const router = require("express").Router();
const auth = require("../middlewares/auth");
const { createUser, login } = require("../controllers/users");
const userRoutes = require("./users");
const itemRoutes = require("./clothingItem");
const { ERROR_NOT_FOUND } = require("../utils/errors");

// Public routes (no token needed)
router.post("/signup", createUser); // Register
router.post("/signin", login); // Login

// Protected routes
router.use("/users", auth, userRoutes); // Requires JWT token
router.use("/items", auth, itemRoutes);

// Catch-all for undefined routes
router.use("*", (req, res) => {
  res.status(ERROR_NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
