import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
