/* eslint-disable no-unused-vars */
import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import StdLogin from "./Pages/StdLogin";
import Register from "./Pages/Register";
import StdHome from "./Pages/StdHome";
import AdminHome from "./Pages/AdminHome";
import StdDash from "./Pages/StdDash";
import StdEvents from "./Pages/StdEvents";
import StdLeaderboard from "./Pages/StdLeaderboard";
import Navbar from "./Pages/Navbar";
import { ImOffice } from "react-icons/im";
import Landing from "./Pages/Landing";
import AdminLogin from "./Pages/AdminLogin";

const router = createBrowserRouter([
  { path: "/", element: <Landing></Landing> },
  { path: "/adminlogin", element: <AdminLogin></AdminLogin> },
  { path: "/stdlogin", element: <StdLogin /> },
  { path: "/register", element: <Register /> },

  { path: "/adminhome", element: <AdminHome /> },

  {
    path: "/stdHome",
    element: (
      <div>
        <Navbar />
        <StdHome />
      </div>
    ),
  },

  {
    path: "/stddash",
    element: (
      <div>
        <Navbar />
        <StdDash />
      </div>
    ),
  },

  {
    path: "/stdevents",
    element: (
      <div>
        <Navbar />
        <StdEvents />
      </div>
    ),
  },

  {
    path: "/stdleaderboard",
    element: (
      <div>
        <Navbar />
        <StdLeaderboard />
      </div>
    ),
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
