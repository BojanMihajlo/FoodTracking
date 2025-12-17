import Navbar from "./Navbar";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RootLayout = () => {
  const isEntered = localStorage.getItem("isEntered");
  const location = useLocation();

  
  if (!isEntered && location.pathname !== "/auth") {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
