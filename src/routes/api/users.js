import express from "express";
import {UserController} from "../../controllers/user.controller";

const router = express.Router();


router.post("/store", UserController.store);

export default router;
