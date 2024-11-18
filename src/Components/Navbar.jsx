import { Link } from "react-router-dom";
import logoImg from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <img src={logoImg} alt="" />
        </div>
        <Link to="/auth/login" className="btn btn-neutral rounded-md">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
