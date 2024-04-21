import express from "express";
import cookieParser from "cookie-parser";

import connectDB from "./database.js";
import api_router from "./api/index.js";
import { PORT } from "./config.js";
import {errorMiddleware, notFound} from "./middlewares/errorMiddleware.js";


const main = async () => {
    // Connect to database (mongodb)
    await connectDB();

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    // INCLUDE!!! Routers
    app.use("/api", api_router);
    
    app.listen(PORT, () => {
        console.log(`Server starting success on http://localhost:${PORT}`)
    });
}


try {
    main();
} catch (error) {
    console.error(`Server not starting. \nError: ${error}`);
    process.exit(1);
}