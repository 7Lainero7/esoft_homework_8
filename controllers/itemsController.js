const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const filePath = path.join(__dirname, '../data/products.json');

const readData = async () => {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data || '[]');
};

const writeData = async (data) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

exports.getAllItems = async (req, res) => {
  const { category, limit, offset } = req.query;
  const data = await readData();
  let filtered = data;

  if (category) {
    filtered = filtered.filter(item => item.category === category);
  }
  if (req.query.name) {
  filtered = filtered.filter(item =>
    item.name.toLowerCase().includes(req.query.name.toLowerCase())
  );
}

if (req.query.minPrice) {
  filtered = filtered.filter(item => item.price >= parseFloat(req.query.minPrice));
}

if (req.query.maxPrice) {
  filtered = filtered.filter(item => item.price <= parseFloat(req.query.maxPrice));
}

  const paginated = filtered.slice(Number(offset) || 0, (Number(offset) || 0) + (Number(limit) || filtered.length));
  res.json(paginated);
};

exports.getItemById = async (req, res) => {
  const data = await readData();
  const item = data.find(p => p.id === req.params.id);
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
};

exports.createItem = async (req, res) => {
  const { name, price, quantity, category } = req.body;
  const newItem = { id: uuidv4(), name, price, quantity, category };

  const data = await readData();
  data.push(newItem);
  await writeData(data);

  res.status(201).json(newItem);
};

exports.updateItem = async (req, res) => {
  const { name, price, quantity, category } = req.body;
  const data = await readData();
  const index = data.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Item not found' });

  data[index] = { ...data[index], name, price, quantity, category };
  await writeData(data);

  res.json(data[index]);
};

exports.deleteItem = async (req, res) => {
  const data = await readData();
  const index = data.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Item not found' });

  const deleted = data.splice(index, 1);
  await writeData(data);

  res.json(deleted[0]);
};
