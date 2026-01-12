import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center mt-6 items-center gap-2">
      <img className="w-[340px]" src={logo} alt="" />
      <p className="text-lg text-accent">Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium text-primary">
        {format(new Date(), "eeee , MMMM d , yyyy")}
      </p>
    </div>
  );
};

export default Header;
