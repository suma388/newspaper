import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [newsPaper, setNewsPaper] = useState([]);
  useEffect(() => {
    if (id === "0") {
      setNewsPaper(data);
    } else if (id === "1") {
      const filterNews = data.filter(
        (news) => news?.others?.is_today_pick == true
      );
      // console.log(filterNews);

      setNewsPaper(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      // console.log(filterNews);

      setNewsPaper(filterNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">Dragon News Home</h2>
      <div className=" grid grid-cols-1 gap-3">
        {" "}
        {newsPaper.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
