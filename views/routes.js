import express from "express"
import { LoginController } from "../controllers/Login.js";
export const router = express.Router()
router.post("/signup",LoginController);