import React from "react";
import logo from "../assests/logo.png";
import home from "../assests/Home.png";
import playlist from "../assests/playlist.png";
import profile from "../assests/profile.png";
import radio from "../assests/radio.png";
import videos from "../assests/videos.png";
import logout from "../assests/Logout.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="flex sm:flex-col sm:h-screen justify-between sm:items-start items-center sm:w-[100px] w-full p-4 sm:pb-20">
      <img className="w-8 h-6 object-contain" src={logo} />

      <div className="AppNav flex sm:flex-col justify-between items-center bg-[#1A1E1F] p-2 sm:gap-4 gap-2 rounded-[32px]">
        <Link to="/">
          <img className="w-10 h-10 object-contain" src={home} />
        </Link>

        <Link to="/playlist">
          <img className="w-8 h-6 object-contain" src={playlist} />
        </Link>
        <img className="w-8 h-6 object-contain" src={radio} />
        <img className="w-8 h-6 object-contain" src={videos} />
      </div>
      <div className="AppNav flex sm:flex-col justify-between items-center bg-[#1A1E1F] p-2 sm:gap-4 gap-2 rounded-[32px]">
        <img className="w-8 h-6 object-contain" src={profile} />
        <img className="w-8 h-6 object-contain" src={logout} />
      </div>
    </nav>
  );
};

export default Nav;
