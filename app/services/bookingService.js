import BookingModel from "../models/bookingModel.js";




export const createBooking = async (userId, locationId, date) => {
    const booking = await BookingModel.create({
        user: userId,
        location: locationId,
        bookingDate: date,
    });

    return booking;
};