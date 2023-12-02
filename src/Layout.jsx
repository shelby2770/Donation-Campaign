import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar";
const Layout = () => {
  return (
    <div className="max-w-[90vw] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <div className="h-[10vh]"></div>
    </div>
  );
};

export default Layout;
