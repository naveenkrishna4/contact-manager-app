const { constants } = require("../constants");
const error = (err, req, res, next) => {
  const status = res.status ? res.status : 500;
  switch (status) {
    case constants.VALIDATION_ERR:
      res.json({
        tilte: "Validation Error",
        mesaage: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        tilte: "File Not Found Error",
        mesaage: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        tilte: "Forbidden Error",
        mesaage: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        tilte: "Unauthorized Error",
        mesaage: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERR:
      res.json({
        tilte: "Server Error",
        mesaage: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      console.log("No error");
      break;
  }
};

module.exports = error;
