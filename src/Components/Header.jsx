import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center py-6 space-y-3">
      <div>
        <img src={logo} alt="" />
      </div>
      <h2 className="text-2xl text-gray-500 ">
        Journalism Without Fear or Favour
      </h2>
      <p>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
    </div>
  );
};

export default Header;
