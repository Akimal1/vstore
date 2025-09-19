import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./components/layout/Layout.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext.jsx";
import AuthContext from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <ProductContext>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </ProductContext>
    </AuthContext>
  </StrictMode>
);
