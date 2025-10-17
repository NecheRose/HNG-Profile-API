# 🚀 HNG — Profile & Cat Facts API

A simple RESTful API built with **Node.js** and **Express.js** that returns your profile information along with a **random cat fact** fetched dynamically from the [Cat Facts API](https://catfact.ninja/fact).

This project was built as part of **HNG13 Stage 0** to demonstrate backend development skills, third-party API integration, and good API design practices.

---

## 🧩 Features

- **GET /me** endpoint returning:
  - Your **email**, **name**, and **backend stack**
  - A **random cat fact** fetched from an external API
  - A **dynamic timestamp** (UTC ISO 8601 format)
- **Error handling** — gracefully handles Cat Facts API failures with a fallback fact
- **Rate limiting** — limits excessive requests to prevent abuse
- **CORS enabled** — allows cross-origin requests
- **Logging** — includes console logs for debugging
- **Environment variables support** via `.env` file

---

🛠️ Tech Stack

- **Node.js / Express.js**
- **Axios** — for HTTP requests
- **dotenv** — for environment variables

---

## 🌐 Live Demo

**View the hosted project:**  
[🔗 HNG-Profile-API]() 

---

## ⚙️ Setup Instructions

### 🧱 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

---

### 🔽 Installation

1. **Clone the Repository**
```bash
git clone https://github.com/NecheRose/HNG-Profile-API.git
cd HNG-Profile-API
```

---

2. **Install Dependencies**
```bash
npm install
```
This will install the following dependencies:

| Package                | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| **express**            | Web framework for building the API                   |
| **axios**              | Makes HTTP requests to the Cat Facts API             |
| **cors**               | Enables Cross-Origin Resource Sharing                |
| **dotenv**             | Loads environment variables                          |
| **express-rate-limit** | Protects against too many requests                   |
| **nodemon** (dev)      | Automatically restarts the server during development |

---

### 🔧 Environment Variables

Create a **.env** file in the root directory and add the following:
```
PORT=5000
```
**Note:** You can change the port number if needed.

---

### ▶️ Run Locally
**Development mode (auto-restarts on changes)**:

```bash 
npm run dev
```

**Production mode**:

```bash
npm start
```

**Once the server starts, visit**:
```bash
http://localhost:5000/me
```

---

## 📡 API Endpoint
**GET** /me
Returns profile information with a dynamic cat fact.

🧪 **Example Request**:
```bash
curl http://localhost:5000/me
```

✅ **Example Response**:
{
  "status": "success",
  "user": {
    "email": "chinecheremrose1@gmail.com",
    "name": "Kalu Chinecherem Rose",
    "stack": "Node.js/Express"
  },
  "timestamp": "2023-10-15T12:34:56.789Z",
  "fact": "Cats can jump up to 6 times their length."
}

---

### ⚠️ Error Handling

If the external Cat Facts API is unavailable, the API returns a fallback message:

{
  "status": "success",
  "user": { ... },
  "timestamp": "2025-10-17T13:09:00.000Z",
  "fact": "Cat fact temporarily unavailable. Did you know cats spend 70% of their lives sleeping?"
}

---

## 🩺 Health Check Endpoint

This API includes a health check route to verify that the server is running correctly, useful for uptime monitoring and deployment validation.

**Endpoint**:
```bash
GET /health
```

✅ **Example Response**:
{
  "status": "success",
  "message": "API is running",
  "timestamp": "2025-10-17T14:15:00.000Z"
}

**Purpose**

1. **Confirms the API server is active and reachable.**

2. **Useful for deployment to check app status.**

3. **Returns a 200 OK response with the current timestamp.**

---

## 🧠 What This Project Demonstrates
1. **RESTful API design**

2. **Dynamic third-party API consumption**

3. **Proper JSON formatting and content headers**

4. **Handling asynchronous operations with async/await**

5. **Basic production-level API best practices (logging, rate limiting, environment configs)**



