import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more then 5 character long" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            // console.log(err);
          });
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        // console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="card bg-base-100 rounded-none w-full max-w-sm shrink-0 p-8">
        <h2 className="text-center font-bold text-2xl">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label">
              <span className="label-text">{error.name}</span>
            </label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
        <p className="text-sm text-center ">
          You have already account please{" "}
          <Link className="text-green-600" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
