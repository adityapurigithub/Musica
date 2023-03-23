import express from "express";
import { addMusicTracks, getMusic } from "../controllers/musicController.js";
import passport from "passport";
const router = express.Router();

router.get(
  "/getMusic",
  passport.authenticate("jwt", { session: false }),
  getMusic
);

router.post(
  "/addMusic",
  passport.authenticate("jwt", { session: false }),
  addMusicTracks
);

export default router;
