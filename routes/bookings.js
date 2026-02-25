const express = require('express');
const {createBooking} = require('./controllers/Booking');
const router = express.Router();

router.Router('/').post(createBooking);

module.exports = router;