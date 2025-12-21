import Navbar from "./Navbar";
import { Outlet, Navigate, useLocation, useNavigation } from "react-router-dom";
import GlobalLoader from "./GlobalLoader";

const RootLayout = () => {
  const isEntered = localStorage.getItem("isEntered");
  const location = useLocation();
  const navigation = useNavigation();

  // AUTH GUARD
  if (!isEntered && location.pathname !== "/auth") {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
     
      {navigation.state === "loading" && <GlobalLoader />}

     
      <Navbar />

      
      <Outlet />
    </>
  );
};

export default RootLayout;
