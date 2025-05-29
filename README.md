# 🧥 WTWR API – Backend Server

This is the backend server for the **WTWR (What To Wear?)** application, built as part of TripleTen Sprint 12. The app allows users to store and interact with clothing items based on weather conditions. This backend provides a RESTful API with MongoDB, Express, and Node.js.

---

## 🚀 Features

- REST API with Express.js
- MongoDB database connection via Mongoose
- Full CRUD operations for users and clothing items
- Server-side data validation
- Custom error handling
- Temporary authorization stub
- GitHub Actions for CI/CD
- Postman test support

---

## 📁 Project Structure

├── controllers # Route handler logic (users, clothingItems)
├── models # Mongoose schemas for User and ClothingItem
├── routes # Express routers (users, clothingItems, index)
├── utils # Error codes and custom error messages
├── app.js # Entry point
├── .eslintrc.js # Linter config (Airbnb style)
└── package.json # Dependencies and scripts

---

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB / Mongoose
- ESLint + Prettier
- Postman (for test suite)
- GitHub Actions (CI pipeline)

---

## 📦 Installation

```bash
git clone https://github.com/yuranest/se_project_express.git
cd se_project_express
npm install
# Start server with nodemon
npm run dev

# OR start normally
npm start
Server will run at:
http://localhost:3001

🧪 Testing
Postman: Fork and run the official test collection

GitHub Actions: Automatically runs linter and server startup checks on push

📋 API Endpoints
Users
Method	Endpoint	Description
GET	/users	Get all users
GET	/users/:userId	Get one user
POST	/users	Create new user

Clothing Items
Method	Endpoint	Description
GET	/items	Get all items
POST	/items	Add an item
DELETE	/items/:itemId	Delete an item
PUT	/items/:itemId/likes	Like an item
DELETE	/items/:itemId/likes	Remove like from an item

👨‍💻 Author
Yuriy Nesterenko
GitHub Profile

✅ Status
✔️ Completed and tested using Postman
✔️ Ready for submission to TripleTen Sprint 12

vbnet
Copy
Edit

Let me know if you'd like to include deployment instructions or screenshots as well!
```
