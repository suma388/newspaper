import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLog = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">Login With</h2>
      <div className="my-5">
        <button className="btn w-full btn-outline btn-secondary mb-2">
          <FcGoogle size={24}></FcGoogle> Login with Google
        </button>
        <button className="btn w-full btn-outline btn-primary mb-2">
          <FaGithub size={24}></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLog;
