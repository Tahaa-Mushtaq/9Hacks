import express from "express"
import { SignUpController } from "../controllers/Signup.js";
export const router = express.Router()
router.post("/signup",SignUpController);