import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home, Playlist, Signin, Signup } from "./Pages";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/sign-in",
        element: <Signin />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
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
