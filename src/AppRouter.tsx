import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/product/:barcode" Component={ProductDetail} />
        </Routes>
      </BrowserRouter>
    );
}

export default AppRouter;