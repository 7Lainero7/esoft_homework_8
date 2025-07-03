const express = require('express');
const router = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/itemsController');

// GET /items
router.get('/', getAllItems);

// GET /items/:id
router.get('/:id', getItemById);

// POST /items
router.post('/', createItem);

// PUT /items/:id
router.put('/:id', updateItem);

// DELETE /items/:id
router.delete('/:id', deleteItem);

module.exports = router;
