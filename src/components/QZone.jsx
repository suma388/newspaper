import React from "react";
import swiming from "../assets/swimming.png";
import classes from "../assets/class.png";
import play from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="my-4 bg-base-200 p-4">
      <h3 className="font-semibold text-xl mb-4">Q-Zone</h3>
      <div className="grid grid-cols-1 gap-5">
        <img src={swiming} alt="" />
        <img src={classes} alt="" />
        <img src={play} alt="" />
      </div>
    </div>
  );
};

export default QZone;
