const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const itemsRouter = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Роуты
app.use('/items', itemsRouter);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
