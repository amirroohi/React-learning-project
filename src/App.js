import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/hoc/wrapper";
import ProductsProvider from "./components/providers/ProductsProvider";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
