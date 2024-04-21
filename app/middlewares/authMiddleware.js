import jwt, { decode } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import UserModel from "../models/userModel.js";
import { JWT_SECRET } from "../config.js";
import { HttpException } from "../exceptions/index.js";

export const protect = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;

    if (!token) {
        return res.sendStatus(401).json({ message: "Not authorized, no token" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = await UserModel.findById(decoded.userId).select("-password");
        next();
    } catch (error) {
        console.error("Error verifying JWT:", error);
        if (error.name === "TokenExpiredError") {
            return res.sendStatus(401).json({ message: "Token expired" });
        }
        return res.sendStatus(401).json({ message: "Not authorized, token failed" });
    }
});
