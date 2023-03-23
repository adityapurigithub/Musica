import express from "express";
import { addMusicTracks, getMusic } from "../controllers/musicController.js";

const router = express.Router();

router.get("/getMusic", getMusic);

router.post("/addMusic", addMusicTracks);

export default router;
