import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 p-3 bg-base-200">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee speed={60} className="flex font-bold gap-10" pauseOnHover={true}>
        {" "}
        <p>
          Breaking News | Bangladesh & Global News | Economy • Politics • Sports
          • Technology | Stay Informed
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
