import express from "express";
import {UserController} from "../../controllers/user.controller";

const router = express.Router();
const user = new UserController();

router.post("/store", user.store);

export default router;
