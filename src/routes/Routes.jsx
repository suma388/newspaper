import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layOuts/HomeLayOut";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import AuthLayOut from "../layOuts/AuthLayOut";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import Private from "../provider/Private";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayOut,
    children: [
      { path: "", Component: Home },
      {
        path: "category/:id",
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayOut></AuthLayOut>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news/:id",
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
    element: (
      <Private>
        <NewsDetails></NewsDetails>
      </Private>
    ),
  },
  {
    path: "/*",
    element: <h2 className="text-5xl text-center mt-40">Not Found</h2>,
  },
]);
export default router;
