[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/iG82Gnyy)

🏕️ Camping Site Booking System

ระบบจองสถานที่กางเต็นท์ พัฒนาด้วย Node.js + Express + MongoDB (Mongoose)
รองรับการสมัครสมาชิก เข้าสู่ระบบ และจัดการการจองตามสิทธิ์ผู้ใช้

🚀 Features
👤 User

สมัครสมาชิก (Register)

เข้าสู่ระบบ / ออกจากระบบ (Login / Logout)

ดูรายการสถานที่กางเต็นท์

จองสถานที่ได้สูงสุด 3 คืน

ดูรายการจองของตนเอง

แก้ไขการจองของตนเอง

ลบการจองของตนเอง

🛠️ Admin

ดูการจองทั้งหมด

แก้ไขการจองใดก็ได้

ลบการจองใดก็ได้

🧱 Tech Stack

Backend: Node.js, Express

Database: MongoDB Atlas

ODM: Mongoose

Auth: JWT (ถ้ามี)

API Testing: Postman

📁 Project Structure
project/
│
├── models/
│   ├── User.js
│   ├── CampSite.js
│   └── Booking.js
│
├── controllers/
│   ├── auth.js
│   ├── campsites.js
│   └── bookings.js
│
├── routes/
│   ├── auth.js
│   ├── campsites.js
│   └── bookings.js
│
├── middleware/
│   └── auth.js
│
├── config/
│   └── db.js
│
├── server.js
└── package.json

⚙️ Installation
1️⃣ Clone repository
git clone <your-repo-url>
cd <project-folder>

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_jwt_secret

4️⃣ Run server
npm run dev


หรือ

node server.js

🔌 API Endpoints
🔐 Auth
Method	Endpoint	Description
POST	/api/v1/auth/register	Register
POST	/api/v1/auth/login	Login
GET	/api/v1/auth/logout	Logout
🏕️ Camp Sites
Method	Endpoint	Description
GET	/api/v1/campsites	Get all campsites
GET	/api/v1/campsites/:id	Get single campsite
📅 Bookings (User)
Method	Endpoint	Description
POST	/api/v1/bookings	Create booking
GET	/api/v1/bookings/me	Get my bookings
PUT	/api/v1/bookings/:id	Update my booking
DELETE	/api/v1/bookings/:id	Delete my booking
👑 Admin
Method	Endpoint	Description
GET	/api/v1/bookings/admin/all	Get all bookings
PUT	/api/v1/bookings/:id	Update any booking
DELETE	/api/v1/bookings/:id	Delete any booking
📌 Booking Rules

ผู้ใช้ต้อง login ก่อนจอง

จองได้ ไม่เกิน 3 คืน

User แก้ไข/ลบได้เฉพาะของตนเอง

Admin จัดการได้ทั้งหมด

🧪 Example Request (Create Booking)

POST /api/v1/bookings

{
  "campsite": "65f0c0a12b3c4d5e6f789012",
  "startDate": "2026-03-01",
  "endDate": "2026-03-03"
}

🧠 Validation

startDate < endDate

จำนวนคืน ≤ 3

ต้องมี user และ campsite

👨‍💻 Author

A boyband group called NCT
