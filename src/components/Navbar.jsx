import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";
import AuthProvider, { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { loginer, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("you are logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("logout");
  };
  return (
    <div className="flex items-center justify-between mt-8">
      <h1>{loginer && loginer?.email}</h1>
      <div></div>
      <div className="flex gap-5 text-[#706F6F] ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex justify-center items-center gap-3">
        <img
          className="w-12 rounded-full"
          src={`${loginer ? loginer.photoURL : user}`}
          alt=""
        />

        {loginer ? (
          <button onClick={handleLogOut} className="btn btn-primary px-8">
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
