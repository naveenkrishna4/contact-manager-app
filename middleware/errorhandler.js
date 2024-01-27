const { constants } = require("../constants");
const error = (err, req, res, next) => {
  const status = res.status ? res.status : 500;
  switch (status) {
    case VALIDATION_ERR:
      res.json({
        tilte: "Validation Error",
        mesaage: err.message,
        stackTrace: err.stack,
      });
      break;
    case NOT_FOUND:
      res.json({
        tilte: "File Not Found Error",
        mesaage: err.message,
        stackTrace: err.stack,
      });
      break;
    case FORBIDDEN:
      res.json({
        tilte: "Forbidden Error",
        mesaage: err.message,
        stackTrace: err.stack,
      });
      break;
    case UNAUTHORIZED:
      res.json({
        tilte: "Unauthorized Error",
        mesaage: err.message,
        stackTrace: err.stack,
      });
      break;
    case SERVER_ERR:
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
