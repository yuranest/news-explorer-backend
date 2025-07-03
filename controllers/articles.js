const BadRequestError = require("../errors/BadRequestError");
const ForbiddenError = require("../errors/ForbiddenError");
const NotFoundError = require("../errors/NotFoundError");
const UnauthorizedError = require("../errors/UnauthorizedError");
const Article = require("../models/article");

// GET /articles — получить все статьи пользователя
const getArticles = (req, res, next) => {
  if (!req.user || !req.user._id) {
    return next(new UnauthorizedError("Authorization required"));
  }

  Article.find({ owner: req.user._id })
    .select("-__v")
    .then((articles) => res.send(articles))
    .catch(next);
};

// POST /articles — сохранить статью
const createArticle = (req, res, next) => {
  const { keyword, title, text, date, source, link, image } = req.body;
  const owner = req.user._id;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner,
  })
    .then((article) => res.status(201).send(article))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return next(new BadRequestError("Invalid article data"));
      }
      return next(err);
    });
};

// DELETE /articles/:articleId — удалить статью
const deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId)
    .orFail(() => new NotFoundError("Article not found"))
    .then((article) => {
      if (article.owner.toString() !== req.user._id) {
        throw new ForbiddenError("You can only delete your own articles");
      }
      return article
        .deleteOne()
        .then(() => res.send({ message: "Article deleted" }));
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return next(new BadRequestError("Invalid article ID"));
      }
      return next(err);
    });
};

module.exports = {
  getArticles,
  createArticle,
  deleteArticle,
};
