import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLocalContext } from "../../Context/LocalContextProvider";

const CheckAuth = ({ children }) => {
  const { user } = useLocalContext();

  return user ? children : <Navigate to="/sign-in" />;
};

export default CheckAuth;
