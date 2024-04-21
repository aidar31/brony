import mongoose from "mongoose";



const BookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",
        required: true,
    },
    bookingDate: {
        type: Date,
        required: true
    },
});

const BookingModel = mongoose.model("Booking", BookingSchema);

export default BookingModel;