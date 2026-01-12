import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Find Us On</h2>
      <div className="join w-full  join-vertical">
        <button className="btn justify-start join-item">
          <FaFacebook size={20}></FaFacebook> Facebook
        </button>
        <button className="btn justify-start join-item">
          <FaTwitter size={20}></FaTwitter> Twitter
        </button>
        <button className="btn justify-start join-item">
          <FaInstagram size={20}></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
