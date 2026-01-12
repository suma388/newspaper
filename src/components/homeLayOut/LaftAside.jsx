import React, { Suspense } from "react";
import Categoris from "../Categoris";

const LaftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Categoris></Categoris>
      </Suspense>
    </div>
  );
};

export default LaftAside;
