const { isCelebrateError } = require("celebrate");

function errorHandler(err, req, res, next) {
  if (isCelebrateError(err)) {
    const details = Array.from(err.details.values())
      .map((d) => d.message)
      .join(", ");
    return res.status(400).send({ message: details });
  }

  const { statusCode = 500, message } = err;

  return res.status(statusCode).send({
    message: statusCode === 500 ? "Internal Server Error" : message,
  });
}

module.exports = errorHandler;
