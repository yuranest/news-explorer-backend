const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  getArticles,
  createArticle,
  deleteArticle,
} = require("../controllers/articles");
const {
  validateArticleBody,
  validateArticleId,
} = require("../middlewares/validation");

router.get("/", auth, getArticles);
router.post("/", auth, validateArticleBody, createArticle);
router.delete("/:articleId", auth, validateArticleId, deleteArticle);

module.exports = router;
