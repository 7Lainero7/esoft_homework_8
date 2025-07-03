const express = require('express');
const router = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/itemsController');
const { productValidationRules } = require('../validators/productValidator');
const { validate } = require('../utils/validate');

// GET /items
router.get('/', getAllItems);

// GET /items/:id
router.get('/:id', getItemById);

// POST /items
router.post('/', productValidationRules, validate, createItem);
// PUT /items/:id
router.put('/:id', productValidationRules, validate, updateItem);

// DELETE /items/:id
router.delete('/:id', deleteItem);

module.exports = router;
