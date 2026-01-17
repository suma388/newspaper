import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  console.log(dayName, monthName, day, year);
  const formattedDate = `${dayName} , ${monthName} ${day} , ${year}`;
  return (
    <div className="flex flex-col justify-center mt-6 items-center gap-2">
      <img className="w-[340px]" src={logo} alt="" />
      <p className="text-lg text-accent">Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium text-primary">{formattedDate}</p>
    </div>
  );
};

export default Header;
