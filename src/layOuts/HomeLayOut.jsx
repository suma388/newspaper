import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router";
import LaftAside from "../components/homeLayOut/LaftAside";
import RightAside from "../components/homeLayOut/RightAside";
import Loading from "../pages/Loading";

const HomeLayOut = () => {
  const { state } = useNavigate();
  return (
    <div>
      <header>
        <Header></Header>
        <section className="mt-8 w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="mt-8 w-11/12 mx-auto">
          <Navbar></Navbar>
        </nav>
      </header>
      {import.meta.env.VITE_name}
      <main className="w-11/12 mx-auto my-6 grid grid-cols-12">
        <aside className=" col-span-3 sticky top-2 h-fit">
          <LaftAside></LaftAside>
        </aside>
        <section className=" px-3 col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className=" col-span-3 sticky top-2 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayOut;
