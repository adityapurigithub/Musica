import React from "react";

const ChartCard = ({ title, images, artists }) => {
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
      />
    </figure>
  );
};

export default ChartCard;
