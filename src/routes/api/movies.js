import express from "express";
import {MovieController} from "../../controllers/movie.controller";
import middelwares from "../../controllers/middelwares";

const router = express.Router();
const movieC = new MovieController();

router.get("/list", movieC.list);
router.post("/detail", movieC.detail)
router.post("/search", movieC.listByName)
router.post("/favorites/lists", movieC.listFavorite)
router.post("/favorites/store",middelwares.verifyBeforeAddToFavorites, movieC.addToFavorite)

export default router;
