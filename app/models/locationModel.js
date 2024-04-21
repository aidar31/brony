import mongoose from "mongoose";



const LocationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["Ресторан", "Отель", "Конференц-зал", "Другое"],
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});


const LocationModel = mongoose.model("Location", LocationSchema);

export default LocationModel;