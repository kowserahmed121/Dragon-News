import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Login with </h2>
      <div className="*:w-full text-white space-y-4 mt-6">
        <button className="btn btn-outline btn-info flex items-center gap-2">
          <FcGoogle className="text-2xl"></FcGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline flex items-center gap-2">
          <BsGithub className="text-2xl"></BsGithub>
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
