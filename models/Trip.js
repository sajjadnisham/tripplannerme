const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    day: Number,
    place: String,
    activities: String,
    timing: String,
    food: String,
    rate: String,
});

module.exports = mongoose.model("Trip", TripSchema);
