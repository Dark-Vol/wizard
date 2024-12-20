# Project documentation
Here is a proposed structure for the README documentation, split into three parts: backend, frontend, and overall project setup.

---

# Project Documentation

## Overall Setup
This project is divided into two parts:
1. **Backend**: Built with Node.js using Express and Sequelize.
2. **Frontend**: A React application using TypeScript.

### Prerequisites
- **Node.js** (v16 or higher recommended)
- **npm** (v7 or higher)
- **XAMPP** (for SQLite setup and database management)
- **Postman** (for API testing)

---

## Frontend Documentation

### Dependencies
The frontend uses the following key dependencies:
```json
{
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "@types/jest": "^27.5.2",
  "@types/node": "^16.18.121",
  "@types/react": "^18.3.13",
  "@types/react-dom": "^18.3.1",
  "axios": "^1.7.9",
  "bootstrap": "^5.3.3",
  "bootstrap-icons": "^1.11.3",
  "formik": "^2.4.6",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^7.0.2",
  "react-scripts": "5.0.1",
  "typescript": "^4.9.5",
  "web-vitals": "^2.1.4",
  "yup": "^1.5.0"
}
```

### File Structure
- **src/components/**: Contains React components like:
  - `ContactInfo.tsx`
  - `Price.tsx`
  - `Quantity.tsx`
  - `SubmissionStatus.tsx`
- **src/**:
  - `App.tsx`: Main entry point for the app.
  - `index.tsx`: Renders the app.
  - `App.css`: Custom styles.

### How to Run
1. Install dependencies:
   ```bash
   cd src
   npm install
   ```
2. Start the frontend:
   ```bash
   npm start
   ```
3. Open your browser at:
   ```
   http://localhost:3000
   ```

### Testing
Run React tests using:
```bash
npm test
```
---