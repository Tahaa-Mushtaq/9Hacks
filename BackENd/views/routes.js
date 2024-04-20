import express from "express"
import { LoginController } from "../controllers/Login.js";
import { Signup } from "../controllers/Signup.js";
export const router = express.Router()
router.post("/login",LoginController);
router.post("http://localhost:5000/api/signup",Signup);
