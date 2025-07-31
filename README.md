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
PORT=3001
MONGO_URL=mongodb://127.0.0.1:27017/news_db
JWT_SECRET=your-strong-secret
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

| Method | Endpoint     | Description             |
|--------|--------------|-------------------------|
| POST   | `/signup`    | Register new user       |
| POST   | `/signin`    | Log in (returns JWT)    |

### Users

| Method | Endpoint     | Description             |
|--------|--------------|-------------------------|
| GET    | `/users/me`  | Get current user info   |

### Articles

| Method | Endpoint            | Description                     |
|--------|---------------------|---------------------------------|
| GET    | `/articles`         | Get saved articles (auth only) |
| POST   | `/articles`         | Save a new article              |
| DELETE | `/articles/:id`     | Delete article by ID            |

---

## 🛡️ Technologies Used

- Node.js + Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt
- celebrate (Joi)
- helmet, cors
- winston, express-winston
- express-rate-limit

---

## 🌐 Deployment

To deploy in production:

- Set `NODE_ENV=production`
- Configure your `.env` file with production values (Mongo URI, JWT_SECRET)
- Serve on a domain like:  
  ```
  https://api.news.yourdomain.com
  ```

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