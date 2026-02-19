const Booking = require("../models/Booking");

// POST /api/v1/bookings
//@desc create new booking
//@access private
exports.createBooking = async (req, res) => {
  try {
    
    const booking = await Booking.create(req.body);

    res.status(201).json({ success: true, data: booking });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
};
