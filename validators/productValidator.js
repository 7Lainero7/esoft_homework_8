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

const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, '../data/products.json');

body('name').custom(async (value, { req }) => {
  const data = await fs.readFile(filePath, 'utf-8');
  const products = JSON.parse(data || '[]');
  const exists = products.find(p => p.name === value && p.id !== req.params.id);
  if (exists) {
    throw new Error('Продукт с таким названием уже существует');
  }
  return true;
})
