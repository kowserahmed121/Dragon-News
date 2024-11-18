import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-[#f3f3f3] py-10">
      <header className="w-11/12 mx-auto py-10">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
