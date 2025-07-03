const { body } = require('express-validator');

exports.productValidationRules = [
  body('name')
    .trim()
    .notEmpty().withMessage('Название обязательно'),

  body('price')
    .isFloat({ gt: 0 }).withMessage('Цена должна быть числом больше 0'),

  body('quantity')
    .isInt({ min: 0 }).withMessage('Количество должно быть целым числом от 0'),

  body('category')
    .trim()
    .notEmpty().withMessage('Категория обязательна'),
];
