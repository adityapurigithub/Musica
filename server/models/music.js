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
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default new mongoose.model("Music", musicSchema);
