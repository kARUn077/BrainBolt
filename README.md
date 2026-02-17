BrainBolt ⚡
BrainBolt is a full-stack quiz platform designed to test and enhance users' knowledge through interactive quizzes. It provides a modern UI, secure backend, and scalable architecture using Docker.

🚀 Features
🧠 Interactive quiz system
🔐 Secure backend API
👤 User authentication and management
📊 Quiz scoring and result tracking
⚡ Fast and responsive frontend
🐳 Docker support for easy deployment
🌐 Full-stack architecture (Client + Server)

🏗️ Tech Stack
Frontend
React.js
JavaScript
HTML, CSS

Backend
Node.js
Express.js
Database
MongoDB
DevOps
Docker
Docker Compose

📁 Project Structure
BrainBolt/
│
├── client/            # React frontend
│
├── server/            # Node.js backend API
│
├── docker-compose.yml # Docker configuration
│
└── README.md

⚙️ Installation and Setup
1. Clone the repository
git clone https://github.com/kARUn077/BrainBolt.git
cd BrainBolt

2. Run using Docker (Recommended)
docker-compose up --build

3. Run manually (without Docker)
Start Backend
cd server
npm install
npm start

Start Frontend
cd client
npm install
npm run dev

🌐 Environment Variables
Create a .env file in the server folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

🎯 Future Improvements
Admin dashboard
Leaderboard system
Multiple quiz categories
Timer-based quizzes
Analytics dashboard

🤝 Contributing
Contributions are welcome!

Steps:
Fork the repository
Create a new branch
Commit your changes
Push to your branch
Create a Pull Request

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Karun Poddar
GitHub: https://github.com/kARUn077
