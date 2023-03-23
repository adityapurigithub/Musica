import React, { createContext, useContext, useState } from "react";

const LocalContext = createContext();

const baseMusicUrl = "https://shazam.p.rapidapi.com";

export const LocalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [tracks, setTracks] = useState([]);

  const [latest, setLatest] = useState([]);

  const [newReleased, setNewReleased] = useState([]);

  const [banner, setBanner] = useState({});

  const [playlist, setPlayList] = useState(null);

  const getTracks = async (type) => {
    const response = await fetch(`${baseMusicUrl}/${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a821798f0fmsh15fd6f185e32b6dp1247d2jsn30d9c90bb6c8",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    });

    const data = await response.json();
    setTracks(data.tracks);

    let i = Math.ceil(Math.random() * data.tracks.length - 1);
    console.log(i);
    let banner = data.tracks[i];

    setBanner(banner);
    console.log(banner);
  };

  const getNewReleased = async (type) => {
    const response = await fetch(`${baseMusicUrl}/${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a821798f0fmsh15fd6f185e32b6dp1247d2jsn30d9c90bb6c8",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    });

    // console.log();
    const data = await response.json();
    setNewReleased(data.tracks.hits);
  };

  const getLatest = async (type) => {
    const response = await fetch(`${baseMusicUrl}/${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a821798f0fmsh15fd6f185e32b6dp1247d2jsn30d9c90bb6c8",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    });

    // console.log();
    const data = await response.json();
    setLatest(data.tracks.hits);
  };

  const getPlaylist = async () => {
    console.log("getlist");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/music/getMusic`
    );

    const { music } = await response.json();

    if (response.ok) {
      setPlayList(music);
    }
  };

  const handleAddTrack = (e) => {
    e.preventDefault();
    return alert("Sorry this action is not available right now...#(");
  };

  return (
    <LocalContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        searchTerm,
        setSearchTerm,
        getTracks,
        getNewReleased,
        getLatest,
        tracks,
        banner,
        latest,
        newReleased,
        getPlaylist,
        playlist,
        handleAddTrack,
      }}
    >
      {children}
    </LocalContext.Provider>
  );
};
export const useLocalContext = () => useContext(LocalContext);
