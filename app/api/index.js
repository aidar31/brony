import express from "express";
import auth_router from "./auth/index.js";
import locations_router from "./locations/index.js";
import booking_router from "./booking/index.js";

const api_router = express.Router();

api_router.use("/auth", auth_router);
api_router.use("/locations", locations_router);
api_router.use("/bookings", booking_router);

api_router.get("/healthcheck", (req, res) => {
    res.status(200).json({
        "message": true
    })
})


export default api_router;