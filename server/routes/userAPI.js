import express from "express";
import passport from "passport";
import { getAuthUser } from "../controllers/userController";

const router = express.Router();

router.get("/", passport.authenticate("jwt"), getAuthUser);

export default router;
