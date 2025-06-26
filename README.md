# 🧥 WTWR API – Backend Server

This is the backend server for the **WTWR (What To Wear?)** application, built during TripleTen **Sprint 12–13**. It supports user registration and authentication, weather-based clothing item management, and a secure REST API built with Express and MongoDB.

---

## 🚀 Features

- 🔐 Authentication using JSON Web Tokens (JWT)
- 👤 Full CRUD for users and clothing items
- 🧪 Server-side validation with Mongoose
- ⚠️ Centralized error handling with custom messages
- 🔄 CORS support and secure request headers
- 🧰 Environment variable support for configuration
- ✅ Ready-to-run Postman collection + environment
- 🛠 GitHub Actions CI with lint and test runs

---

## 📁 Project Structure

```
├── controllers         # Route handler logic (users, clothingItems)
├── models              # Mongoose schemas: User, ClothingItem
├── routes              # Express route definitions
├── middlewares         # Error handlers, auth checks, validators
├── utils               # Centralized errors and constants
├── .env                # Env vars (e.g., DB URL, JWT_SECRET)
├── .eslintrc.js        # Linter config (Airbnb style)
├── app.js              # Main Express app
└── package.json        # Scripts and dependencies
```

---

## 🛠️ Tech Stack

- Node.js + Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- ESLint + Prettier
- GitHub Actions
- Postman

---

## 🧪 Testing Instructions

### 🔁 Using Postman

1. Import the Postman Collection:
   - `Sprint_13_Tests_Fixed.postman_collection.json`

2. Import the Environment:
   - `Sprint_13_Environment.postman_environment.json`

3. Click **"Run"** to execute tests against your local server.

> 🔑 Make sure the environment is active and variables like `{{token}}` and `{{itemId}}` are set correctly from the `Pre-request Script` and tests.

---

## 📦 Installation

```bash
git clone https://github.com/yuranest/se_project_express.git
cd se_project_express
npm install
```

### 🔧 Environment Setup

Create a `.env` file with:

```
PORT=3001
MONGO_URI=mongodb://127.0.0.1:27017/wtwr_db
JWT_SECRET=your_secret_key
```

### ▶️ Start the Server

```bash
# Development mode with hot reload
npm run dev

# Production
npm start
```

Server will run at: `http://localhost:3001`

---

## 📋 API Endpoints

### Users

| Method | Endpoint          | Description               |
|--------|-------------------|---------------------------|
| GET    | /users            | Get all users             |
| GET    | /users/:userId    | Get a user by ID          |
| GET    | /users/me         | Get current user          |
| PATCH  | /users/me         | Update profile            |
| PATCH  | /users/me/avatar  | Update avatar             |
| POST   | /signup           | Register a new user       |
| POST   | /signin           | Login and receive token   |

### Clothing Items

| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| GET    | /items                    | Get all items             |
| POST   | /items                    | Add a new item            |
| DELETE | /items/:itemId            | Delete item by ID         |
| PUT    | /items/:itemId/likes      | Like an item              |
| DELETE | /items/:itemId/likes      | Remove like               |

---

## 🧑‍💻 Author

**Yuriy Nesterenko**  
🔗 [GitHub Profile](https://github.com/yuranest)

---

## ✅ Project Status

✔️ Authentication and validation implemented  
✔️ Postman test suite passing  
✔️ Ready for submission (Sprint 13)

---

Let me know if you'd like to add:
- 🖼️ Screenshots of Postman tests
- 🌍 Deployment instructions for Render/Heroku
- 🔐 Password hashing explanation


---

## 🌐 Deployed Application

- Frontend: https://www.wtwrapp.ugo.si  
- Backend: https://api.wtwrapp.ugo.si
