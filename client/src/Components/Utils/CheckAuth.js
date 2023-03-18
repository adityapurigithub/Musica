import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const CheckAuth = ({ children }) => {
  let token;
  token = Cookies.get("token");

  return token ? children : <Navigate to="/sign-in" />;
};

export default CheckAuth;
