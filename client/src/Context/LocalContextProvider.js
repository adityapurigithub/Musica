import React, { createContext, useContext, useState } from "react";

const LocalContext = createContext();

// const baseMusicUrl=''

export const LocalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  //   const getMusic=async()=>{ }

  return (
    <LocalContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </LocalContext.Provider>
  );
};
export const useLocalContext = () => useContext(LocalContext);
