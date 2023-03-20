import React, { useEffect } from "react";
import { AlbumCard, Banner, ChartCard } from "../Components";
import { useLocalContext } from "../Context/LocalContextProvider";

const Home = () => {
  const { tracks, banner, latest, newReleased } = useLocalContext();

  return (
    <div className=" sm:w-[calc(100vw-120px)] overflow-auto p-2 flex flex-col gap-3">
      <input
        className="sm:w-full bg-gray-700 rounded-xl py-1 px-4"
        type="text"
        placeholder="Search Any Music..."
      />
      <div className="flex sm:flex-row sm:items-center flex-col gap-4">
        <Banner banner={banner} />
        <div className="flex flex-col max-h-[300px] overflow-auto ">
          <h2 className="text-lg font-semibold">Top Charts</h2>
          {tracks.length === 0 && "Loading"}
          {tracks.map((track, id) => {
            const { artists, images, title } = track;
            return (
              <ChartCard artists={artists} images={images} title={title} />
            );
          })}
        </div>
      </div>
      <div className="flex gap-4 items-center overflow-x-auto mt-2 text-sm">
        {newReleased.map((music) => (
          <AlbumCard music={music} />
        ))}

        {latest.map((music) => (
          <AlbumCard music={music} />
        ))}
      </div>
    </div>
  );
};

export default Home;
