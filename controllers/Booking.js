const Booking = require("../models/Booking");

// POST /api/v1/bookings
//@desc create new booking
//@access private
exports.createBooking = async (req, res) => {
  try {
    
    const userId = req.user.id;

    const booking = await Booking.create({
      user: userId,
      campsite: req.body.campsite,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    });

    res.status(201).json({ success: true, data: booking });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
};
