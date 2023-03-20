import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLocalContext } from "../../Context/LocalContextProvider";

const CheckAuth = ({ children }) => {
  const { user } = useLocalContext();
  console.log(user);
  return user ? children : <Navigate to="/sign-in" />;

  // return children;
};

export default CheckAuth;
