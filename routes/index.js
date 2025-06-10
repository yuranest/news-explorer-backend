const router = require("express").Router();
const auth = require("../middlewares/auth");
const { createUser, login } = require("../controllers/users");
const userRoutes = require("./users");
const itemRoutes = require("./clothingItem");
const { ERROR_NOT_FOUND } = require("../utils/errors");
const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  unlikeItem,
} = require("../controllers/clothingItems");

// Public routes (no token needed)
router.post("/signup", createUser); // Register
router.post("/signin", login); // Login
router.get("/items", getItems); // Public GET

// Protected routes
router.use("/users", auth, userRoutes); // Requires JWT token

// Protected item routes
router.post("/items", auth, createItem);
router.delete("/items/:itemId", auth, deleteItem);
router.put("/items/:itemId/likes", auth, likeItem);
router.delete("/items/:itemId/likes", auth, unlikeItem);

// Catch-all
router.use("*", (req, res) => {
  res.status(ERROR_NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
