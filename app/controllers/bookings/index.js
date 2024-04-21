import asyncHandler from "express-async-handler";
import { createBooking } from "../../services/bookingService.js";


export const createBookingHandler = asyncHandler(async (req, res) => {
    try {
        const {locationId, date} = req.body;
        const userId = req.user._id;
        console.log(userId);

        const booking = await createBooking(userId, locationId, date);
        res.status(200).json({ data: booking });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
});