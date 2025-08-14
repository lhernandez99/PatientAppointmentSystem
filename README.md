# Patient Appointment Scheduling System

A full-stack web application for scheduling, viewing, and managing patient appointments.  
Built with **React**, **Node.js**, **Express**, and **MySQL**, this project simulates a real-world scheduling tool for healthcare clinics.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Setup & Installation](#setup--installation)
4. [Usage](#usage)
5. [Screenshots](#screenshots)
6. [Future Enhancements](#future-enhancements)
7. [License](#license)

---

## Features
- **Add Appointments** — Create patient appointments with name, date, time, and reason.
- **View Appointments** — List all scheduled appointments in a clean, styled table.
- **Real-Time Refresh** — Newly created appointments appear immediately without refreshing the page.
- **MySQL Integration** — Data is persisted in a relational database.
- **Responsive Design** — Scales well for desktop and tablet usage.
- **User-Friendly UI** — Clean, clinical color palette:  
  `#DAEFFE` (light blue), `#5C64AE` (deep blue-purple), `#A2CC8A` (soft green), `#ADD8E6` (pastel blue), and white.

---

## Tech Stack
**Frontend**
- React (Hooks)
- Axios
- Custom CSS (clinical theme)

**Backend**
- Node.js
- Express.js
- MySQL (mysql2 driver)
- dotenv (environment variables)
- CORS middleware

---

## Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/PatientAppointmentSystem.git
cd PatientAppointmentSystem
```

### 2. Setup the Backend
```bash
cd backend
npm install
```

Create a .env file:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=mychn_db
DB_PORT=3306
PORT=5000
```

Make sure MySQL is running and create the database:
```bash
CREATE DATABASE IF NOT EXISTS mychn_db;

USE mychn_db;

CREATE TABLE IF NOT EXISTS appointments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patient_name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time VARCHAR(10) NOT NULL,
  reason TEXT
);
```

Run the backend:
```bash
npm start
```

### 3. Setup the Frontend
```bash
cd ../frontend
npm install
npm start
```

Frontend will run on http://localhost:3000 and connect to backend API.

## Usage

1. Open the application in your browser:  
   **[http://localhost:3000](http://localhost:3000)**
2. Fill in:
   - **Patient Name**
   - **Date**
   - **Time**
   - **Reason** for the appointment
3. Click **Add** — the new appointment will appear instantly in the table below.

---
## Demo
[View Demo Video](frontend/public/demo.mp4)
<video src="frontend/public/demo.mp4" controls width="700"></video>

---
## Screenshots
<img width="3817" height="878" alt="image" src="https://github.com/user-attachments/assets/c6de06f6-d709-4313-be53-05e8a5bae262" />
<img width="3829" height="1067" alt="image" src="https://github.com/user-attachments/assets/358c2f2e-5ee0-4c18-b90c-7442fc84b842" />

---

## Future Enhancements

To make this system more robust and valuable for real clinic environment:

### 1. Authentication & Role-Based Access
- Secure login for staff and administrators.
- Different access levels (view-only vs. full access).

### 2. Appointment Editing & Cancellation
- Ability to update appointment details.
- Cancel existing appointments.

### 3. Search & Filter
- Search by patient name.
- Filter by date range or reason.

### 4. Pagination & Sorting
- Improve table performance for large datasets.
- Sort by date, name, or time.

### 5. Notifications & Reminders
- Email or SMS reminders to patients before their appointments.

### 6. Analytics Dashboard
- Visualize daily, weekly, and monthly appointment trends.

### 7. Integration with EHR/EMR Systems
- Pull patient data directly from electronic health record systems.
