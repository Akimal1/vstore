import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/catalog/Catalog";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "*", element: "" },
    { link: "/admin", element: <Admin /> },
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
