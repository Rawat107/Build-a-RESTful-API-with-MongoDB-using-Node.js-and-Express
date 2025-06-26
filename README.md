# RESTful API with MongoDB using Node.js and Express

This project is a simple RESTful API for managing users, built using **Node.js**, **Express**, and **MongoDB** (via Mongoose). It follows an MVC architecture, implements schema validation, middleware logging, and supports all CRUD operations with proper error handling.

---

## How to Run the Project

1. **Clone the repository** and open it in your editor.
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory:

   ```env
   MONGO_URI=mongodb://localhost:27017/userdb
   PORT=3000
   ```

4. **Start the server**:

   ```bash
   npm run dev
   ```

5. **Test the endpoints** using ThunderClient or Postman.

---

##  Base URL

```
http://localhost:3000
```

---

##  API Endpoints & Test Results

### 1. GET: Fetch All Users

#### Success

**Request:** `GET /users`

**Response:**
![GET All Users Success](screenshots/GetAllUser.png)

---

### 2. GET: Fetch User by ID

#### Success

**Request:** `GET /users/:id`

![GET by ID Success](screenshots/GetUserById.png)

#### Error: Invalid ObjectId Format

**Request:** `GET /users/123`

![GET by ID Invalid Format](screenshots/GetUserByIdError.png)

#### Error: User Not Found

**Request:** `GET /users/665fc44a3aa1b3a1d7490000`

![GET by ID Not Found](screenshots/GetUserByIdError2.png)

---

### 3. POST: Add a New User

#### Success

**Request:** `POST /user`

![POST Success](screenshots/POST.png)

#### Error: Missing Required Field

![POST Missing Field](screenshots/PostError.png)

#### Error: Duplicate Email

![POST Duplicate Email](screenshots/PostError2.png)

---

### 4. PUT: Update Existing User

#### Success

**Request:** `PUT /user/:id`

![PUT Success](screenshots/PUT.png)

#### Error: Invalid ID Format

`PUT /user/123`

![PUT Invalid ID](screenshots/PutError.png)

#### Error: User Not Found

`PUT /user/665fcabc3aa1b3a1d7490000`

![PUT Not Found](screenshots/PutError2.png)

#### Error: Validation (e.g., wrong data type)

![PUT Validation Error](screenshots/PutError3.png)

#### Error: Unknown Field

![PUT Unknown Field](screenshots/PutError4.png)

---

### 5. DELETE: Remove a User

#### Success

`DELETE /user/:id`

![DELETE Success](screenshots/Delete.png)

#### Error: Invalid ID Format

`DELETE /user/abc`

![DELETE Invalid ID](screenshots/DeleteError.png)

#### Error: Not Found

`DELETE /user/665fcabc3aa1b3a1d7490000`

![DELETE Not Found](screenshots/DeleteError2.png)

---

## Folder Structure (MVC)

```
project-root/
├── models/
│   └── User.js
├── controllers/
│   └── userController.js
├── routes/
│   └── userRoutes.js
├── screenshots
│   └── images...
├── .env
├── server.js
├── README.md
```

---

## Features Implemented

- Express routing
- MongoDB with Mongoose
- Schema validations
- Error handling
- Middleware logging
- MVC structure
- Full CRUD support
