import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
function ProtectedRoute() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
