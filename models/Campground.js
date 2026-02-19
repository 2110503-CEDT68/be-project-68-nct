const mongoose = require("mongoose");

const CampgroundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Please add an address"],
    trim: true,
  },
  tel: {
    type: String,
    required: [true, "Please add a telephone number"],
    trim: true,
  },
});

module.exports = mongoose.model("Campground", CampgroundSchema);
