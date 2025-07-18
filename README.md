# 🛠️ Online Complaint Registration and Management System

An end-to-end web application for efficiently managing user complaints, agent assignments, and admin controls. Built using the **MERN stack (MongoDB, Express, React, Node.js)**, this system facilitates smooth complaint registration, tracking, resolution, and real-time messaging between users and agents.


---

## 📂 Project Structure
your-platform-for-online-complaint/
├── ONLINE-COMPLAINTS/ # Main MERN application (frontend + backend)
│ ├── backend/ # Express.js backend
│ └── frontend/ # React.js frontend
├── ProjectDoc/ # Documentation (PDFs, Sprint plans, Charts)
├── Video Demo/ # Presentation and demo video
└── README.md

---

## 🌐 Live Demo

📺 [Watch Demo Video](https://youtu.be/7Z5Xxpf0csQ?si=Y4XfENaMlsBEqYA-)  
📁 [Project Documentation on Google Drive](https://drive.google.com/drive/folders/1LMmXdaZDU4e26LkTXTHIUEK1qdIBEtac)

---

## 🚀 Features

- 🔐 User, Agent & Admin login
- 📝 Complaint registration with status tracking
- 📊 Admin dashboard to assign agents
- 📩 Real-time chat between agent and user
- ⏱️ Status updates: Pending → In Progress → Resolved
- 📦 MongoDB for storing users, complaints, and messages

---

## 👥 User Roles & Functionalities

### 👨‍💼 User
- Register complaints
- View complaint status
- Chat with assigned agent

![User Dashboard](./ONLINE-COMPLAINTS/frontend/src/images/user%20dashboard.jpg)

---

### 👩‍💻 Agent
- View assigned complaints
- Update complaint status
- Chat with users

![Agent Dashboard](./ONLINE-COMPLAINTS/frontend/src/images/agent%20dashboard.jpg)

---

### 🛡️ Admin
- View all complaints
- Assign agents to complaints
- View user and agent info

![Agent Dashboard](./ONLINE-COMPLAINTS/frontend/src/images/agent-dashboard.jpg)



---

## 🧱 Tech Stack

| Frontend   | Backend      | Database | Auth      | Realtime Chat |
|------------|--------------|----------|-----------|----------------|
| React.js   | Node.js + Express | MongoDB  | JWT       | WebSocket / Chat API |

---

## 🏗️ System Architecture

```plaintext
Client (React) <--> Backend API (Express) <--> MongoDB
                      ↑
                   Firebase (Auth / optional)
```
## 📁 Documentation Overview

📂 `ProjectDoc/` folder includes:
- 📌 Sprint Planning, Product Backlog, Story Points
- 📉 Velocity Chart and Burndown Chart
- 🧩 Architecture Diagrams
- 📎 Team Details
- 📜 Final Report PDFs

🔗 [Documentation Link (Google Drive)](https://drive.google.com/drive/folders/1LMmXdaZDU4e26LkTXTHIUEK1qdIBEtac)

## 👥 Team Info

- **Team ID**: LTVIP2025TMID57433
- **Team Size**: 4
- **Team Leader**: Manam Hari Krishna
- **Team Members**:
  - Lochana Yerra
  - Kurra Sai Durga Rajeswari
  - Kota Asha

