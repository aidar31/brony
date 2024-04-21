import express from "express";
import { createLocationHandler, getLocationByIdHandler, getLocationHandler } from "../../controllers/locations/index.js";


const locations_router = express.Router();

locations_router.get("/:id", getLocationByIdHandler);

locations_router.get('/', getLocationHandler);
locations_router.post('/', createLocationHandler);


export default locations_router;