# 📅 Smart AI Event To Do List

An intelligent, minimal event scheduling tool built with **React**, **Node.js**, **TypeScript**, and styled using **Tailwind CSS**. This app allows users to schedule events and automatically categorizes them as _Work_, _Personal_, or _Other_ using simple AI-like keyword logic.

---

## 🚀 Live Project Link
[![Live Demo](https://img.shields.io/badge/Live%20Demo-%20-%2300C853?style=for-the-badge&logo=appveyor)](https://event-management-liberate-lab.netlify.app/)

![Smart AI Event To Do List Banner](https://github.com/saidebinsabid/liberate-labs-task/blob/main/event-management-liberate-lab.netlify.app_.png)

---

## ⚡ Key Features

1. **Smart AI Categorization**  
   Automatically tags your events as _Work_, _Personal_, or _Other_ using simple AI keyword-based logic from the backend.

2. **Clean UI & Responsive Design**  
   Styled using Tailwind CSS, the UI is mobile-first, intuitive, and responsive across all devices.

3. **Full CRUD Functionality + Archiving**  
   Add, view, delete, and archive events. The archive status can be toggled and the events are sorted by date & time.

---

## 🧠 Tech Stack Used

### Frontend

- React with TypeScript
- Tailwind CSS
- Vite
- React Hook Form
- SweetAlert2
- date-fns
- React Icons

### Backend

- Node.js
- Express.js with TypeScript
- dotenv for environment variables

---

## 📁 Project Structure

### 🔷 Client (Frontend)

```
event-scheduler-client/
│
├── public/
├── src/
│ ├── assets/ # Images and static assets
│ ├── components/ # Reusable components
│ │ ├── AddEventForm.tsx
│ │ └── EventList.tsx
│ ├── App.tsx # Main app logic
│ ├── App.css
│ ├── index.css
│ └── main.tsx # Entry point
│
├── .env.local
├── .gitignore
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md

shell
Copy
Edit
```
---

### 🔷 Server (Backend)
```
event-scheduler-server/
│
├── src/
│ ├── routes/
│ │ └── eventRoutes.ts # API route handlers
│ └── index.ts # Express server entry
│
├── .env # Contains environment variables like PORT
├── .gitignore
├── tsconfig.json
├── package.json
└── README.md
```


---

## 📦 Packages Used

- [`react-hook-form`](https://react-hook-form.com/) – easy and performant form management
- [`date-fns`](https://date-fns.org/) – modern date utility library
- [`sweetalert2`](https://sweetalert2.github.io/) – beautiful alert popups
- [`react-icons`](https://react-icons.github.io/react-icons/) – scalable icons
- [`dotenv`](https://www.npmjs.com/package/dotenv) – secure environment variables
- [`Tailwind CSS`](https://tailwindcss.com/) – utility-first CSS framework

---

## ✅ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/liberate-labs-task.git
```

### 🖥 Frontend Setup

2. **Navigate to the frontend folder:**

```bash
cd event-scheduler-client
```

3. **Install Dependencies:**
```bash
npm install
```
4. **Run the Frontend Locally:**
```bash
npm run dev
```
---

### ⚙ Backend Setup
5. **Navigate to the backend folder:**
```bash
cd event-scheduler-server
```
6. **Install dependencies:**
```bash
npm install
```
7. **Create a `.env` file with:**
```bash
PORT=5000
```
8. **Run the server:**
```bash
npm run dev
```
---
# 📡 API Endpoints

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| POST   | `/api/events`      | Create a new event         |
| GET    | `/api/events`      | Get all events (sorted by date) |
| PUT    | `/api/events/:id`  | Archive an event by ID     |
| DELETE | `/api/events/:id`  | Delete an event by ID      |

---

# 🧠 AI Categorization Logic

Events are auto-categorized based on keywords in their **title** or **notes**:

- **Work:**  
  `"meeting"`, `"project"`, `"client"`

- **Personal:**  
  `"birthday"`, `"family"`, `"gym"`

- **Other:**  
  All other cases

---

# 💡 Bonus Features Implemented

- ✅ Filter events by category (**Work**, **Personal**, **Other**)  
- ✅ Environment variables used (`PORT`, backend base URL)  
- ✅ SweetAlert2 for user-friendly confirmations & errors  
- ✅ Error handling via toasts/alerts on API failure  

---

# 👨‍💻 Author

- **Name:** Saide Bin Sabid  
- **Role:** Full Stack Engineer (Intern Task Submission)  
- **GitHub:** [@saidebinsabid](https://github.com/saidebinsabid)

