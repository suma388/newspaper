import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const DetailsCard = ({ display }) => {
  return (
    <div className="border border-base-200 p-3">
      <h2 className="text-xl font-bold mb-4">Drogon News</h2>
      <div className="space-y-4">
        <img className="w-full h-[390px]" src={display.image_url} alt="" />
        <h2 className="text-2xl font-bold">{display.title}</h2>
        <p className="text-gray-500 text-justify">{display.details}</p>
        <Link
          to={`/category/${display.category_id}`}
          className="bg-secondary text-white btn"
        >
          <FaArrowLeftLong /> All news in this category
        </Link>
      </div>
    </div>
  );
};

export default DetailsCard;
