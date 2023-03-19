import express, { json } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import db from "./config/db.js";
import passport from "passport";
import passportConfig from "./config/passport.js";

import authAPI from "./routes/authAPI.js";
import userAPI from "./routes/userAPI.js";

dotenv.config();
const app = express();

//connectin db
await db();

//for handling cors req...
app.use(cors());

app.use(express.json({ limit: "50mb" }));

//using passport middleware..
app.use(passport.initialize());

passportConfig(passport);

app.use("/auth", authAPI);

app.use("/user", userAPI);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.warn(err);
  }
  console.log(`Server up on PORT.${process.env.PORT}`);
});
