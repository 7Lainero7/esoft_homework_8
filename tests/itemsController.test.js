const { getAllItems } = require('../controllers/itemsController');
const fs = require('fs').promises;

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
  },
}));

describe('getAllItems', () => {
  it('должен вернуть список продуктов', async () => {
    const mockData = JSON.stringify([
      { id: '1', name: 'Test', price: 10, quantity: 5, category: 'sample' }
    ]);
    fs.readFile.mockResolvedValue(mockData);

    const req = { query: {} };
    const res = { json: jest.fn() };

    await getAllItems(req, res);

    expect(res.json).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Test' })
      ])
    );
  });
});
