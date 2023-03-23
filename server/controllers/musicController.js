import Music from "../models/music.js";

export const addMusicTracks = async (req, res) => {
  // console.log(req.body.data);
  let playlist = req.body.data;

  const music = new Music({ playlist, user_id: req.user._id });

  await music.save();

  console.log(music);
  res.status(200).json({
    msg: "Add to Playlist",
  });
};

export const getMusic = async (req, res) => {
  let music = await Music.find({ user_id: req.user._id }).sort({
    createdAt: -1,
  });
  console.log(music);

  res.status(200).json({
    music,
  });
};
