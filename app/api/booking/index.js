import express from "express";
import { createBookingHandler } from "../../controllers/bookings/index.js";
import { protect } from "../../middlewares/authMiddleware.js";


const booking_router = express.Router();

booking_router.post("/", protect, createBookingHandler);

export default booking_router;