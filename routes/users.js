const router = require("express").Router();
const { getCurrentUser, updateUser } = require("../controllers/users");
const { validateUserProfile } = require("../middlewares/validation");

router.get("/me", getCurrentUser);
router.patch("/me", validateUserProfile, updateUser);
module.exports = router;
