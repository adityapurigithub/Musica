import React from "react";
import { useLocalContext } from "../Context/LocalContextProvider";
import Cookies from "js-cookie";
const ChartCard = ({ title, images, artists }) => {
  const token = Cookies.get("token");

  const { getPlaylist } = useLocalContext();

  const handleAddToPlayList = () => {
    let music = { title, images, artists };

    addMusicToPlayList(music);
  };

  const addMusicToPlayList = async (music) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/music/addMusic`,
      {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          data: music,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      getPlaylist();
      alert(data.msg);
    }
  };
  return (
    <figure className="flex justify-between p-2 text-sm items-center rounded sm:min-w-[350px] m-2 transition ease-in-out duration-600 shadow-lg shadow-[rgba(255,255,255,0.2)] hover:scale-105">
      <span className="flex">
        <img
          className="w-14  rounded-lg object-contain sm:mx-4 mx-2"
          src={images.background}
          alt="12"
        />
        <figcaption>{title}</figcaption>
      </span>
      <img
        className="w-6 h-6 border border-gray-600 p-1 rounded-full mr-3 cursor-pointer active:scale-110"
        src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
        onClick={handleAddToPlayList}
      />
    </figure>
  );
};

export default ChartCard;
