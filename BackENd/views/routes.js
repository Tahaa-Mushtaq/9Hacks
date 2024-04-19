import express from "express"
import { SignUpController } from "../BackENd/controllers/Signup.js"
export const router = express.Router()
router.post("/signup",SignUpController);