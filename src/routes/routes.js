/*
@author: Hans Castellar
@Descripcion: En este documento se declaran todas las rutas de la API

*/

import express from "express";
import userRoutes from "./api/users";
import movieRoutes from "./api/movies";
import authRouter from './api/auth'
import middelwares from "../controllers/middelwares";
const router = express.Router();

router.use("/api/user", middelwares.userExist, userRoutes);
router.use("/api/movie", movieRoutes)
router.use("/api/auth", authRouter)

export default router;
