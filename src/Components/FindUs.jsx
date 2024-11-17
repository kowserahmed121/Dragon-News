import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Find Us</h2>
      <div className="*:w-full space-y-2">
        <button className="btn btn-outline  flex items-center gap-2">
          <FaFacebook className="text-xl"></FaFacebook> Facebook
        </button>
        <button className="btn btn-outline flex items-center gap-2">
          <FaTwitter className="text-xl"> </FaTwitter>Twitter
        </button>
        <button className="btn btn-outline flex items-center gap-2">
          <FaInstagram className="text-xl"></FaInstagram>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
