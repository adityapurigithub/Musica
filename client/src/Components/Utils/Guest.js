import React from "react";
import { Navigate } from "react-router-dom";
import { useLocalContext } from "../../Context/LocalContextProvider";

const Guest = ({ children }) => {
  const { user } = useLocalContext();
  // return !user ? children : <Navigate to="/" />;
  return children;
};

export default Guest;
