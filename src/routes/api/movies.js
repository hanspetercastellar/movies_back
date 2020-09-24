import express from "express";
import {MovieController} from "../../controllers/movie.controller";

const router = express.Router();
const movieC = new MovieController();

router.get("/list", movieC.list);
router.get("/favorites", movieC.listFavorite)
export default router;
