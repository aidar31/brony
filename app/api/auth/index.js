import express from "express";
import { login_handler, logout_handler, me_handler, register_handler } from "../../controllers/auth/index.js";
import { protect } from "../../middlewares/authMiddleware.js";

const auth_router = express.Router();

auth_router.post("/login", login_handler);
auth_router.post("/register", register_handler);
auth_router.post("/logout", protect, logout_handler);
auth_router.get("/me", protect, me_handler);

export default auth_router;