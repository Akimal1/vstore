import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import Register from "../pages/register/Register";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "*", element: "" },
    { link: "/admin", element: <Admin /> },
    { link: "/register", element: <Register /> },
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
