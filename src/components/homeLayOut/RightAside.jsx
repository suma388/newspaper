import React, { useContext } from "react";
import SocialLog from "./SocialLog";
import FindUs from "../FindUs";
import QZone from "../QZone";
import { AuthContext } from "../../provider/AuthProvider";

const RightAside = () => {
  const { loginer } = useContext(AuthContext);
  return (
    <div className="">
      <div className={`${loginer ? "hidden" : "block"}`}>
        <SocialLog></SocialLog>
      </div>
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  );
};

export default RightAside;
