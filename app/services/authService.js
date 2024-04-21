import { HttpException } from "../exceptions/index.js";
import { generateToken, matchPassword } from "../helpers/index.js";
import UserModel from "../models/userModel.js"



export const authenticated = async (email, password) => {
    const user = await UserModel.findOne({ email });

    if (!user) {
        throw new HttpException(404, "User not found");
    }

    const passwordCorrect = await matchPassword(password, user.password);
    if (!passwordCorrect) {
        throw new HttpException(401, "Invalid email or password!");
    }

    const token = generateToken(user._id);

    return token;
}