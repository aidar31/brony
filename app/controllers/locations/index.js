import asyncHandler from "express-async-handler";
import { createLocation, getLocation, getLocationById  } from "../../services/locationService.js";



export const createLocationHandler = asyncHandler( async (req, res) => {
    try {
        const { name, type, capacity, price, address } = req.body;
        
        const location = await createLocation(name, type, capacity, price, address);
        res.status(201).json({
            data: location
        }) ;
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
});



export const getLocationByIdHandler = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        const location = await getLocationById(id);
        if (!location) {
            return res.status(404).json({ message: "Location not found" });
        }
        res.status(200).json({ data: location });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
});


export const getLocationHandler = asyncHandler(async (req, res) => {
    try {
        const { name, type, capacity, price, address } = req.query;
        const location = await getLocation(name, type, capacity, price, address);
        res.status(200).json({ data: location });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
});