import asyncHandler from "express-async-handler";
import UserModel from "../../models/userModel.js";
import { HttpException } from "../../exceptions/index.js";
import { HttpStatusCode } from "../../constants/index.js";
import { generateToken } from "../../helpers/index.js";
import { ENV } from "../../config.js";
import { createUser } from "../../services/usersService.js";
import { authenticated } from "../../services/authService.js";


export const login_handler = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authenticated(email, password);
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: ENV !== "development",
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000
        });
        res.status(201).json({
            "message": true,
        })
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
})

export const register_handler = asyncHandler(async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const user = await createUser(username, email, password);

        res.status(200).json({
            "data": {
                _id: user._id,
                username: user.username,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
});

export const logout_handler = asyncHandler((req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0)
    });

    res.status(200).json({ message: "User logged out" });
});


export const me_handler = asyncHandler((req, res) => {
    try {
        const user = {
            _id: req.user._id,
            name: req.user.username,
            email: req.user.email,
        }   
        
        res.status(200).json({
            data: user
        })
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }

});