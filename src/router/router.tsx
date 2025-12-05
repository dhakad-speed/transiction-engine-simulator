import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      { index: true, path: "login", element: <Login /> },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);
