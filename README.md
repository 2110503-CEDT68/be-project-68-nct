[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/iG82Gnyy)

# 🏕️ Camping Site Booking System

ระบบจองสถานที่กางเต็นท์ พัฒนาด้วย **Node.js + Express + MongoDB (Mongoose)**  
รองรับการสมัครสมาชิก เข้าสู่ระบบ และจัดการการจองตามสิทธิ์ผู้ใช้

---

## 🚀 Features

### 👤 User

- สมัครสมาชิก (Register)
- เข้าสู่ระบบ / ออกจากระบบ (Login / Logout)
- ดูรายการสถานที่กางเต็นท์
- จองสถานที่ได้สูงสุด **3 คืน**
- ดูรายการจองของตนเอง
- แก้ไขการจองของตนเอง
- ลบการจองของตนเอง

### 🛠️ Admin

- ดูการจองทั้งหมด
- แก้ไขการจองใดก็ได้
- ลบการจองใดก็ได้

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Auth:** JWT
- **API Testing:** Postman

---

## 📁 Project Structure

```
project/
│
├── models/
│   ├── User.js
│   ├── Campground.js
│   └── Booking.js
│
├── controllers/
│   ├── auth.js
│   ├── campgrounds.js
│   └── bookings.js
│
├── routes/
│   ├── auth.js
│   ├── campgrounds.js
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
```

---

## ⚙️ การติดตั้ง (Installation)

### 1. Clone โปรเจกต์

```bash
git clone https://github.com/2110503-CEDT68/be-project-68-nct.git
cd be-project-68-nct
```

### 2. ติดตั้ง Dependencies

```bash
npm install
```

### 3. แก้ config/config.env.example เป็น config.env ของตัวเอง

```env
PORT=5000 (5003 for macos)
NODE_ENV=development
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority

JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30

```

### 4. รันโปรเจกต์

```bash
# Development mode
npm run dev

# Production mode
npm start
```

### 5. ทดสอบ API

เปิด Postman แล้วส่ง request ไปที่

``` 
http://localhost:5000/api/v1/
```
