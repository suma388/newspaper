import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayOut/RightAside";
import DetailsCard from "./DetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const [display, setDisplay] = useState({});
  const { id } = useParams();
  const data = useLoaderData();
  useEffect(() => {
    const findNews = data.find((news) => news.id == id);
    setDisplay(findNews);
  }, [id, data]);
  //   console.log(display);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <section className="w-11/12 mx-auto grid grid-cols-12 gap-5 my-10">
          <aside className="col-span-9">
            <DetailsCard display={display}></DetailsCard>
          </aside>
          <aside className="col-span-3">
            <RightAside></RightAside>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
