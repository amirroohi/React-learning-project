import React from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/hoc/wrapper";
import ProductsProvider from "./components/providers/ProductsProvider";
import Filter from "./components/Filter/Filter";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
