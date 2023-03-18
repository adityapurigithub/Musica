import mongoose from "mongoose";

const db = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDb connected");
};
export default db;
