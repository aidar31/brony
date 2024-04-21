import { APP_ERROR_MESSAGE, HttpStatusCode } from "../constants/index.js";
import { HttpException } from "../exceptions/index.js";
import { hashPassword } from "../helpers/index.js";
import UserModel from "../models/userModel.js";


export const createUser = async (username, email, password) => {
    const userExists = await UserModel.findOne({ email });
        
    if (userExists) {
        throw new HttpException(409, "User already exists"); 
    }

    const hashedPassword = await hashPassword(password);

    const user = await UserModel.create({ username, email, password: hashedPassword });
    return user;
};