import express from "express";
import {MovieController} from "../../controllers/movie.controller";
import middelwares from "../../controllers/middelwares";

const router = express.Router();


router.get("/list", MovieController.list);
router.post("/detail", MovieController.detail)
router.post("/search", MovieController.listByName)
router.post("/favorites/lists", MovieController.listFavorite)
router.post("/favorites/store",middelwares.verifyBeforeAddToFavorites, MovieController.addToFavorite)

export default router;
