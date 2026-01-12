import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then(() => {
        alert("successfully logged in");
        // console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.code);
      });
    // console.log(email, password);
  };
  return (
    <div className="card bg-base-100 p-3 w-full  max-w-sm my-18 mx-auto shrink-0 shadow-2xl">
      <h2 className="text-2xl font-semibold text-center b-5">
        Login your account
      </h2>
      <div className="card-body">
        <form onSubmit={handleLogin} className="form">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <p className="font-semibold my-2">
            Dont’t Have An Account ? Please{" "}
            <Link className="text-secondary" to="/auth/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
