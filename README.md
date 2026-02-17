# BrainBolt ⚡

BrainBolt is a full-stack quiz platform designed to test and enhance users' knowledge through interactive quizzes. It features a modern React frontend, secure Node.js backend, and Docker support for scalable deployment.

---

## 🚀 Features

- 🧠 Interactive quiz platform  
- 🔐 Secure backend with authentication support  
- ⚡ Fast and responsive React frontend  
- 📊 Quiz scoring and result tracking  
- 🌐 REST API based architecture  
- 🐳 Docker support for easy setup and deployment  
- 🧩 Modular and scalable structure  

---

## 🏗️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### DevOps
- Docker
- Docker Compose

---

## 📁 Project Structure

```
BrainBolt/
│
├── client/              # React frontend
│
├── server/              # Node.js backend
│
├── docker-compose.yml   # Docker configuration
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/kARUn077/BrainBolt.git
cd BrainBolt
```

---

## 🐳 Run with Docker (Recommended)

```bash
docker-compose up --build
```

Frontend: http://localhost:5173  
Backend: http://localhost:5000  

---

## 💻 Run without Docker

### Backend

```bash
cd server
npm install
npm start
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🌐 Environment Variables

Create a `.env` file in the `server` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🎯 Future Enhancements

- Leaderboard system  
- Admin dashboard  
- Timer-based quizzes  
- Multiple quiz categories  
- Analytics and performance tracking  

---

## 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork the repository  
2. Create your branch (`git checkout -b feature-name`)  
3. Commit changes (`git commit -m 'Add feature'`)  
4. Push (`git push origin feature-name`)  
5. Open Pull Request  

---

## 👨‍💻 Author

Karun Poddar  

GitHub: https://github.com/kARUn077  

---

## 📄 License

This project is licensed under the MIT License.
