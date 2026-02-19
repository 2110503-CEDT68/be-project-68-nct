const express = require('express');
const {createBooking} = require('./controllers/Booking');
const rounter = express.Router();

rounter.Router('/').post(createBooking);


module.exports = rounter;