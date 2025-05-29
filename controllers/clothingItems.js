const ClothingItem = require("../models/clothingItem");
const {
  ERROR_BAD_REQUEST,
  ERROR_NOT_FOUND,
  ERROR_SERVER,
} = require("../utils/errors");

// GET /items
const getItems = (req, res) => ClothingItem.find({})
    .then((items) => res.send(items))
    .catch((err) => {
      console.error(err);
      return res
        .status(ERROR_SERVER)
        .send({ message: "An error occurred on the server" });
    });

// POST /items
const createItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;
  const owner = req.user._id;

  return ClothingItem.create({ name, weather, imageUrl, owner })
    .then((item) => res.status(201).send(item))
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError") {
        return res
          .status(ERROR_BAD_REQUEST)
          .send({ message: "Invalid item data" });
      }
      return res
        .status(ERROR_SERVER)
        .send({ message: "An error occurred on the server" });
    });
};

// DELETE /items/:itemId
const deleteItem = (req, res) => ClothingItem.findByIdAndDelete(req.params.itemId)
    .orFail(() => {
      const error = new Error("Item not found");
      error.statusCode = ERROR_NOT_FOUND;
      throw error;
    })
    .then((item) => res.send(item))
    .catch((err) => {
      console.error(err);
      if (err.name === "CastError") {
        return res
          .status(ERROR_BAD_REQUEST)
          .send({ message: "Invalid item ID" });
      }
      return res
        .status(err.statusCode || ERROR_SERVER)
        .send({ message: err.message });
    });

// PUT /items/:itemId/likes
const likeItem = (req, res) => ClothingItem.findByIdAndUpdate(
    req.params.itemId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Item not found");
      error.statusCode = ERROR_NOT_FOUND;
      throw error;
    })
    .then((item) => res.send(item))
    .catch((err) => {
      console.error(err);
      if (err.name === "CastError") {
        return res
          .status(ERROR_BAD_REQUEST)
          .send({ message: "Invalid item ID" });
      }
      return res
        .status(err.statusCode || ERROR_SERVER)
        .send({ message: err.message });
    });

// DELETE /items/:itemId/likes
const dislikeItem = (req, res) => ClothingItem.findByIdAndUpdate(
    req.params.itemId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail(() => {
      const error = new Error("Item not found");
      error.statusCode = ERROR_NOT_FOUND;
      throw error;
    })
    .then((item) => res.send(item))
    .catch((err) => {
      console.error(err);
      if (err.name === "CastError") {
        return res
          .status(ERROR_BAD_REQUEST)
          .send({ message: "Invalid item ID" });
      }
      return res
        .status(err.statusCode || ERROR_SERVER)
        .send({ message: err.message });
    });

module.exports = {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
};
