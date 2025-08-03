# 📰 News Explorer — Backend

This is the backend for the News Explorer project (Sprint 16 at TripleTen). It includes a RESTful API with secure user authentication, article management, rate limiting, error logging, and more.

## 🔧 Features

- ✅ User registration and login via JWT
- ✅ Secure password hashing with bcrypt
- ✅ Article saving and deletion (authorized users only)
- ✅ Input validation via Celebrate + Joi
- ✅ Centralized error handling
- ✅ Logging with Winston
- ✅ Rate limiting and Helmet security headers
- ✅ MongoDB integration

---

## 🚀 Getting Started

### 📦 Installation

1. Clone the repository:

```bash
git clone git@github.com:yuranest/news-explorer-backend.git
cd news-explorer-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URL=mongodb://localhost:27017/news_db
JWT_SECRET=your-strong-secret
NODE_ENV=production
```

> 🔐 **Do not commit `.env` to Git.**

---

### 🧪 Available Scripts

```bash
npm run start     # Start server
npm run dev       # Start with nodemon
npm run lint      # Run ESLint
npm run test      # Run Jest tests
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint  | Description          |
| ------ | --------- | -------------------- |
| POST   | `/signup` | Register new user    |
| POST   | `/signin` | Log in (returns JWT) |

### Users

| Method | Endpoint    | Description           |
| ------ | ----------- | --------------------- |
| GET    | `/users/me` | Get current user info |

### Articles

| Method | Endpoint        | Description                    |
| ------ | --------------- | ------------------------------ |
| GET    | `/articles`     | Get saved articles (auth only) |
| POST   | `/articles`     | Save a new article             |
| DELETE | `/articles/:id` | Delete article by ID           |

---

## 🌐 Deployment

- Set `NODE_ENV=production`
- Configure your `.env` file with production values (Mongo URI, JWT_SECRET)

### 📡 Deployment Status

| Environment | URL                              |
| ----------- | -------------------------------- |
| API         | https://api.news.ugo.si/news-api |
| Frontend    | https://news.ugo.si              |

---

## ✅ TripleTen Compatibility

This backend is built in full compliance with the Stage 2 and Stage 3 criteria of the TripleTen News Explorer Final Project, including:

- Strict RESTful API design
- Full authentication with JWT
- Rate limiting, Helmet headers
- Validation using Celebrate
- Centralized error handling
- Logging of requests and errors
- Secure production deployment structure

---

## 📁 Project Structure

```
.
├── app.js
├── server.js
├── routes/
├── controllers/
├── models/
├── middlewares/
├── utils/
├── .env.example
├── .eslintrc
├── .editorconfig
├── .gitignore
└── package.json
```

---

## 📄 License

ISC

---

## ✍️ Author

[Yuriy Nesterenko](https://github.com/yuranest)
