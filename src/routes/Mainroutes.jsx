import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Admin from "../pages/admin/Admin";
import Register from "../pages/register/Register";
import UpdatePage from "../pages/update/UpdatePage";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Warranty from "../pages/warranty/Warranty";
import Delivery from "../pages/delivery/Delivery";
import Contacts from "../pages/contacts/Contacts";
import Products from "../pages/products/Products";
import Basket from "../pages/bascet/Basket";

const MainRoutes = () => {
  const routes = [
    { link: "/", element: <Home /> },
    { link: "*", element: <Navigate to="/" replace /> },
    { link: "/admin", element: <Admin /> },
    { link: "/register", element: <Register /> },
    { link: "/update/:id", element: <UpdatePage /> },
    { link: "/details/:id", element: <Details /> },
    { link: "/login", element: <Login /> },
    { link: "/about", element: <About /> },
    { link: "/warranty", element: <Warranty /> },
    { link: "/delivery", element: <Delivery /> },
    { link: "/contacts", element: <Contacts /> },
    { link: "/products", element: <Products /> },
    { link: "/basket", element: <Basket /> },
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
