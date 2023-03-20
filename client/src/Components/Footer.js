import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-[2rem] fixed bg-[#282828] bottom-0 w-full rouded-full">
      <div></div>
      <div>
        <input type="range" min="0" max="100" class="slider" id="myRange" />
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
