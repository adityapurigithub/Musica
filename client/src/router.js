import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CheckAuth from "./Components/Utils/CheckAuth";
import Guest from "./Components/Utils/Guest";
import { Home, Playlist, Signin, Signup, UserProfile, AddTrack } from "./Pages";

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
        path: "/your-playlist",
        element: (
          <CheckAuth>
            <Playlist />
          </CheckAuth>
        ),
      },
      {
        path: "/add-new-track",
        element: (
          <CheckAuth>
            <AddTrack />
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
            <h1 className="text-2xl font-bold ">Hey! how you landed here!!!</h1>
            <h2 className="text-lg font-bold">
              Sorry, This Page Does not Exist!!!
            </h2>
            <img
              src="https://assets.materialup.com/uploads/c0d66e33-944f-40a1-b7a7-a45387c2ba47/preview.jpg"
              alt="404"
            />
          </div>
        ),
      },
    ],
  },
]);

export default router;
