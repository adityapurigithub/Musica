import React from "react";
import logo from "../assests/logo.png";
import home from "../assests/Home.png";
import playlist from "../assests/playlist.png";
import profile from "../assests/profile.png";
import radio from "../assests/radio.png";
import videos from "../assests/videos.png";
import logout from "../assests/Logout.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useLocalContext } from "../Context/LocalContextProvider";
const Nav = () => {
  const navigate = useNavigate();

  const { setUser } = useLocalContext();
  const handleLogout = () => {
    Cookies.remove("token");
    if (window.confirm("You will be logged out!!!")) {
      setUser(null);
      return navigate("/sign-in");
    }
  };
  return (
    <nav className="flex sm:flex-col sm:h-screen justify-between items-center sm:w-[100px] w-full p-4 sm:pb-20">
      <img className="w-9 h-8 object-contain animate-spin-slow " src={logo} />

      <div className="AppNav flex sm:flex-col justify-between items-center bg-slate-800 sm:p-2 p-1 sm:pb-4 sm:gap-4 gap-2 rounded-[32px]">
        <Link to="/">
          <abbr title="Home">
            <img
              className="w-10 h-10 object-contain cursor-pointer"
              src={home}
            />
          </abbr>
        </Link>

        <Link to="/playlist">
          <abbr title="Your Playlist">
            <img
              className="w-8 h-6 object-contain cursor-pointer"
              src={playlist}
            />
          </abbr>
        </Link>
        <Link to="/add-new-track">
          <abbr title="Add New Tracks">
            <img
              className="w-8 h-6 object-contain cursor-pointer"
              src={radio}
            />
          </abbr>
        </Link>
        <img className="w-8 h-6 object-contain cursor-pointer" src={videos} />
      </div>
      <div className="AppNav flex sm:flex-col justify-between items-center  bg-slate-800 sm:p-2 p-1 sm:gap-4 gap-2 rounded-[32px]">
        <Link to="/user-profile">
          <abbr title="Profile">
            <img
              className="w-8 h-6 object-contain cursor-pointer"
              src={profile}
            />
          </abbr>
        </Link>
        <abbr title="logout">
          <img
            className="w-8 h-6 object-contain cursor-pointer"
            src={logout}
            onClick={handleLogout}
          />
        </abbr>
      </div>
    </nav>
  );
};

export default Nav;
