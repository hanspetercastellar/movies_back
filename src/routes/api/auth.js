import express from "express";
import {AuthController} from "../../controllers/auth.controller";


const router = express.Router();
const authC = new AuthController();

router.post("/login", authC.login);

export default router;
