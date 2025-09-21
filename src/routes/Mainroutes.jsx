import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import Register from "../pages/register/Register";
import UpdatePage from "../pages/update/UpdatePage";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "*", element: <Navigate to="/" replace /> },
    { link: "/admin", element: <Admin /> },
    { link: "/register", element: <Register /> },
    { link: "/update/:id", element: <UpdatePage /> },
    { link: "/details/:id", element: <Details /> },
    { link: "/login", element: <Login /> },
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
