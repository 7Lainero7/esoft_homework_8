# 📦 Express CRUD API — Продукты

Простое CRUD API на Express.js для управления продуктами с хранением данных в JSON-файле, валидацией и логированием.

## 🚀 Возможности

- Полный CRUD для продуктов
- Валидация данных через `express-validator`
- Фильтрация, пагинация, кастомные ошибки
- JSON-файл как база данных
- Логирование HTTP-запросов через `morgan`
- Генерация уникальных `id` с помощью `uuid`
- Простые unit-тесты через `jest`

---

## 📁 Структура данных

Каждый продукт имеет следующую структуру:

```json
{
  "id": "string (uuid)",
  "name": "string",
  "price": number,
  "quantity": number,
  "category": "string"
}
```

---

## 📂 Установка и запуск

1. **Установка зависимостей**
   ```bash
   npm install
   ```

2. **Запуск сервера**
   ```bash
   npm run dev  # с nodemon
   ```

3. **Тестирование**
   ```bash
   npm test
   ```

---

## 🧪 API Эндпоинты

| Метод | Путь             | Описание                       |
|-------|------------------|--------------------------------|
| GET   | `/items`         | Получить все продукты          |
| GET   | `/items/:id`     | Получить продукт по `id`       |
| POST  | `/items`         | Создать новый продукт          |
| PUT   | `/items/:id`     | Обновить существующий продукт  |
| DELETE| `/items/:id`     | Удалить продукт по `id`        |

---

## 🔍 Фильтрация и пагинация

Эндпоинт `GET /items` поддерживает следующие query-параметры:

- `category=fruit`
- `name=phone`
- `minPrice=500`
- `maxPrice=1500`
- `limit=10`
- `offset=20`

Пример:
```
/items?category=tablet&minPrice=500&limit=5
```

---

## 🧰 Стек технологий

- [Express](https://expressjs.com/)
- [express-validator](https://express-validator.github.io/)
- [uuid](https://www.npmjs.com/package/uuid)
- [morgan](https://www.npmjs.com/package/morgan)
- [jest](https://jestjs.io/)

---

## 📁 Структура проекта

```
.
├── controllers/         # Контроллеры для CRUD-логики
├── data/                # JSON-файл с продуктами
├── routes/              # Роутеры
├── utils/               # Вспомогательные функции (валидация, I/O)
├── validators/          # Правила валидации express-validator
├── tests/               # Unit-тесты
├── index.js             # Точка входа
├── package.json
└── README.md
```

---

## ⚠️ Примечания

- Данные сохраняются в `data/products.json`
- Убедитесь, что эта папка существует и доступна для записи
- Валидация проверяет: `name`, `price > 0`, `quantity ≥ 0`, `category ≠ пусто`

---
