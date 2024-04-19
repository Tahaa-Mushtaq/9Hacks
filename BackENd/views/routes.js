import express from "express"
import { LoginController } from "../controllers/Login";
import { Signup } from "../controllers/Signup";
export const router = express.Router()
router.post("/login",Signup);
router.post("/signup",LoginController)