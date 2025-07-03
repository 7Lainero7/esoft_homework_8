const { validationResult } = require('express-validator');

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  const extractedErrors = errors.array().map(err => ({
    field: err.param,
    message: err.msg,
  }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
