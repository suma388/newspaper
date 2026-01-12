import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromice = fetch("/categories.json").then((res) => res.json());
const Categoris = () => {
  const categoris = use(categoryPromice);
  // console.log(categoris);
  return (
    <div>
      <h2 className="font-bold text-xl">All Categoris</h2>
      <div className="grid grid-cols-1 gap-1 mt-3">
        {categoris.map((category) => (
          <NavLink
            className="text-accent p-2 font-bold"
            to={`category/${category.id}`}
            key={category.name}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categoris;
