import React from "react";

const Banner = ({ banner }) => {
  return (
    <div
      className="sm:w-2/3 sm:h-[300px] h-[260px] w-full ease shadow-md shadow-gray-400 rounded-xl opacity:10 relative"
      style={{
        backgroundImage: `url(${banner?.images?.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "contain",
      }}
    >
      {banner !== {} && (
        <div className="flex flex-col justify-between rounded-2xl p-4 px-6 absolute top-5 left-5 bg-[rgba(0,0,0,0.2)]">
          <div className="flex flex-col">
            <span className="text-3xl font-bold ">{banner.title}</span>
            {banner?.artists?.map((artist) => (
              <span className="text-sm text-right">{artist.alias}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
