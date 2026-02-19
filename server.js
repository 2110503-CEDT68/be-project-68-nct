const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// config.env
dotenv.config({ path: "./config/config.env" });

// connect to MongoDB
connectDB();

const app = express();

// express can read JSON
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
