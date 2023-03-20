import React from "react";

const AlbumCard = ({ music }) => {
  return (
    <div>
      <div className="img w-44 rounded-lg hover:opacity-90  ">
        <img
          className="rounded-2xl transition ease-in-out duration-600 hover:-translate-y-1"
          src={music.track.images.background}
        />
      </div>
      <div className="">{music.track.title}</div>
    </div>
  );
};

export default AlbumCard;
