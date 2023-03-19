import express from "express";
import passport from "passport";

import { getAuthUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), getAuthUser);

export default router;
