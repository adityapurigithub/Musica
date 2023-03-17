import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

//for handling cors req...
app.use(cors());

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.warn(err);
  }
  console.log(`Server up on PORT.${process.env.PORT}`);
});
