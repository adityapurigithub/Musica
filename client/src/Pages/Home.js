import React from "react";
import { AlbumCard, ChartCard } from "../Components";

const Home = () => {
  return (
    <div className=" search sm:w-[calc(100vw-170px)] p-4 flex flex-col gap-3">
      <input
        className="sm:w-full bg-gray-700 rounded-xl py-1 px-4"
        type="text"
        placeholder="Search Any Music..."
      />
      <div className="flex sm:flex-row sm:items-center flex-col gap-4">
        <div className="sm:w-2/3 h-[250px] w-full border rounded">a</div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">Top Charts</h2>
          <ChartCard />
          <ChartCard />
          <ChartCard />
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto my-4">
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </div>
    </div>
  );
};

export default Home;
