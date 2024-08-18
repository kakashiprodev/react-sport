import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Ticker from "./Ticker";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Ticker /> */}
      <Outlet />
    </>
  );
};

export default Layout;
