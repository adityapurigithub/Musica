import mongoose from "mongoose";

const musicSchema = new mongoose.Schema(
  {
    playlist: {
      type: Array,
      required: true,
    },
    tracks: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default new mongoose.model("Music", musicSchema);
