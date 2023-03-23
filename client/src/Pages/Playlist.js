import React from "react";
import bg from "../assests/bg2.jpg";
import { AlbumCard } from "../Components";
import { useLocalContext } from "../Context/LocalContextProvider";
const Playlist = () => {
  const { playlist } = useLocalContext();
  console.log(playlist);
  return (
    <div className="text-2xl text-center flex justify-center w-full h-[100vh]">
      <div
        className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full opacity-30"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "contain",
        }}
      ></div>
      <div className="w-full flex flex-col items-center absolute my-10 h-[88vh] overflow-auto">
        {playlist.length > 0 && (
          <h2 className="text-3xl italic font-semibold mb-4">
            Your PlayList...
          </h2>
        )}
        {!playlist || playlist.length == 0 ? (
          <h2 className="text-2xl font-semibold italic">
            Your PlayList is Empty
          </h2>
        ) : (
          playlist.map(({ playlist }) => (
            <div className="sm:w-1/3 w-2/3 flex justify-between items-center gap-2 p-3 bg-gray-600 my-2 rounded hover:scale-105 hover:rounded-xl ">
              <img
                className="sm:w-28 w-20 rounded-full"
                src={playlist[0].images.background}
              />
              <div className="flex flex-col justify-center gap-2">
                <span className="text-base">{playlist[0].title}</span>
                <span className="text-sm">{playlist[0].artists[0].alias}</span>
              </div>
              <img
                className="sm:w-8 w-5 rounded-full cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                alt="deleteIcon"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Playlist;
