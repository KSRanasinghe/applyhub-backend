# ApplyHub Backend

This repository contains the backend API for **ApplyHub**, a job application tracking system.  
It provides authentication, protected routes, and CRUD operations for managing job applications.

The backend is built as a RESTful API and is consumed by the ApplyHub frontend application.

## 🛠 Tech Stack

-   Node.js
-   Express.js
-   MongoDB (Mongoose)
-   JWT Authentication
-   bcrypt for password hashing
    

## 🚀 Getting Started

### Prerequisites

-   Node.js
-   MongoDB (local or Atlas)

### Installation

```bash
git clone https://github.com/KSRanasinghe/applyhub-backend.git
cd applyhub-backend
npm install
```


### Environment Variables

Create a `.env` file in the root directory:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
``` 


### Run the Server

```bash
npm run dev
``` 

> Server runs on: `http://localhost:5000`


## 🔐 API Features

-   User registration and login
-   JWT-based authentication
-   Protected routes using middleware
-   CRUD operations for job applications
-   User-specific data isolation
    

## 📌 Notes

-   This API is designed to be used with the ApplyHub frontend
-   Authentication is handled using JWT tokens
-   Each user can access only their own job data

## 👤 Author

Keshara S. Ranasinghe