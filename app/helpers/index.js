import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { JWT_SECRET } from "../config.js"


export const generateToken = (userId) => {
    const token = jwt.sign({userId}, JWT_SECRET, {
        expiresIn: "30d"
    });
    return token;
}


export const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    return hashedpassword;
}


export const matchPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}