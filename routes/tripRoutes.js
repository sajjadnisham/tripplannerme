const express = require("express");
const Trip = require("../models/Trip");

const router = express.Router();

// Get all trip days
router.get("/", async (req, res) => {
    try {
        const trips = await Trip.find();
        res.json(trips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new trip day
router.post("/", async (req, res) => {
    const trip = new Trip(req.body);
    try {
        const newTrip = await trip.save();
        res.status(201).json(newTrip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a trip day
router.put("/:id", async (req, res) => {
    try {
        const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTrip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a trip day
router.delete("/:id", async (req, res) => {
    try {
        await Trip.findByIdAndDelete(req.params.id);
        res.json({ message: "Trip day deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
