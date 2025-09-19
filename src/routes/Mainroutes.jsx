import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/catalog/Catalog";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import UpdatePage from "../pages/update/UpdatePage";
import Details from "../pages/details/Details";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "*", element: "" },
    { link: "/admin", element: <Admin /> },
    { link: "/update/:id", element: <UpdatePage /> },
    { link: "/details/:id", element: <Details /> },
  ];
  return (
    <Routes>
      {routes.map((item, idx) => (
        <Route path={item.link} element={item.element} key={idx} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
