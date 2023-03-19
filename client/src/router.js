import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CheckAuth from "./Components/Utils/CheckAuth";
import Guest from "./Components/Utils/Guest";
import { Home, Playlist, Signin, Signup, UserProfile } from "./Pages";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <CheckAuth>
            <Home />
          </CheckAuth>
        ),
      },
      {
        path: "/playlist",
        element: (
          <CheckAuth>
            <Playlist />
          </CheckAuth>
        ),
      },
      {
        path: "/user-profile",
        element: (
          <CheckAuth>
            <UserProfile />
          </CheckAuth>
        ),
      },
      {
        path: "/sign-in",
        element: (
          <Guest>
            <Signin />
          </Guest>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <Guest>
            <Signup />
          </Guest>
        ),
      },
      {
        path: "*",
        element: (
          <div className="flex flex-col gap-3 h-screen w-full justify-center items-center">
            <h1 className="text-2xl font-bold">Hey! how you landed here!!!</h1>
            <h2 className="text-lg font-bold">Hey! how you landed here!!!</h2>
            <img src="" alt="404" />
          </div>
        ),
      },
    ],
  },
]);

export default router;
