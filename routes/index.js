const router = require("express").Router();
const auth = require("../middlewares/auth");
const { createUser, login } = require("../controllers/users");
const userRoutes = require("./users");
const itemRoutes = require("./clothingItem");
const NotFoundError = require("../errors/NotFoundError");
const {
  validateUserBody,
  validateLogin,
} = require("../middlewares/validation");

// Public routes
router.post("/signup", validateUserBody, createUser);
router.post("/signin", validateLogin, login);
router.use("/items", itemRoutes);

// Protected routes
router.use("/users", auth, userRoutes);

// Catch-all for undefined routes
router.use("*", (req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
