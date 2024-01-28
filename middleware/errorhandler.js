const { constants } = require("../constants");
const error = (err, req, res, next) => {
  const status = res.statusCode ? res.statusCode : 500;
  switch (status) {
    case constants.VALIDATION_ERR:
      res.json({
        title: "Validation Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "File Not Found Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      console.log("No error");
      break;
  }
};

module.exports = error;
