# 📚 Express Bookstore API

An Express.js RESTful API for managing a bookstore. Includes user authentication, logging, error tracking, and performance monitoring.

---

## 🚀 Features

- ✅ CRUD operations for books and borrowing records
- 🔐 JWT-based authentication (protected POST/PUT/DELETE routes)
- 🧾 Request logging with custom middleware
- 🐛 Error and performance monitoring with Sentry
- 🗂 Modular structure using Express Routers
- 🌱 Easy to configure and extend

---

## 📦 Technologies Used

- **Node.js**
- **Express**
- **JWT** for authentication
- **Winston** for logging
- **Sentry** for error/performance monitoring
- **UUID** for unique IDs
- **dotenv** for environment variable management

---

## 🧑‍💻 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/your-username/express-bookstore-api.git
cd express-bookstore-api
npm install
```

## Environment Variables
Create a .env file in the root directory:

AUTH_SECRET_KEY=your-jwt-secret
SENTRY_DSN=your-sentry-dsn

## 📬 API Endpoints
## 🔐 Auth
- **POST `/login`** – Returns a JWT token for authentication

## 📚 Books
- **GET `/books`** – Get all books
- **POST `/books`** – Create a new book (**requires JWT token**)
- **PUT `/books/:id`** – Update a book by ID (**requires JWT token**)
- **DELETE `/books/:id`** – Delete a book by ID (**requires JWT token**)

## 📝 Records
- **GET `/records`** – Get all borrow records
- **POST `/records`** – Create a new borrow record (authentication optional)

## 🛡️ Protected Routes
To access protected routes, include a valid JWT in the Authorization header:
```bash
Authorization: your.jwt.token
```

## Logging
All requests are logged using Winston, including method, URL, status code, and duration in ms.


## 🧪 Testing the Setup
```bash
npm run dev
```
