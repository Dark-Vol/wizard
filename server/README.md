# Server documentation

## Backend Documentation

### Dependencies
The backend uses the following key dependencies:
```json
{
  "body-parser": "^1.20.3",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.1",
  "nodemailer": "^6.9.16",
  "sequelize": "^6.37.5",
  "sqlite3": "^5.1.7",
  "swagger-ui-express": "^5.0.1"
}
```

### File Structure
- **config/**: Contains `database.sqlite` and Sequelize setup in `db.js`.
- **models/**: Includes Sequelize models like `WizardData.js`.
- **tests/**: Contains `api.test.js` for testing APIs.

### How to Run
1. Install dependencies:
   ```bash
   cd server
   npm install
   ```
2. Set up the `.env` file:
   ```
   DB_PATH=./config/database.sqlite
   PORT=5000
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_pass
   ```
3. Run the server:
   ```bash
   npm start
   ```
4. API documentation is available at:
   ```
   http://localhost:5000/api-docs
   ```
5. Use Postman to test endpoints as defined in `swagger.json`.

### Testing
Run tests using:
```bash
npm test
```



Вот структура проекта, основанная на вашем изображении и запросе:

---

### **Объяснение папок и файлов**
1. **`server/`**: Backend часть приложения.
   - **`config/`**: Конфигурация базы данных.
   - **`models/`**: Описание моделей данных для работы с БД.
   - **`tests/`**: Содержит тесты API.
   - **`server.js`**: Основной файл, где запускается сервер Express.

2. **`src/`**: Frontend часть приложения.
   - **`components/`**: Основные React-компоненты.
   - **`App.tsx`**: Главный файл приложения.
   - **`index.tsx`**: Точка входа для запуска React-приложения.

3. **`node_modules/`**: В этой папке находятся зависимости, установленные через `npm install`.

4. **`README.md`**: Документация проекта.

5. **`.env`**: Конфигурационный файл для хранения переменных окружения (например, порт, учетные данные SMTP и т. д.).

6. **`.gitignore`**: Список файлов и папок, которые игнорируются в Git (например, `node_modules/`, `.env`, `database.sqlite`).

---

### **Добавления для XAMPP и Postman**
1. **XAMPP**: Убедитесь, что XAMPP запущен для управления базой данных SQLite, если требуется.
2. **Postman**: Используйте для тестирования REST API. Импортируйте `swagger.json` для упрощения работы. 