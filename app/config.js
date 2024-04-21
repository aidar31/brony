import dotenv from "dotenv";


dotenv.config()

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI;
export const DEBUG = process.env.DEBUG === 'true';
export const JWT_SECRET = process.env.DEBUG;
export const ENV = process.env.ENV;




