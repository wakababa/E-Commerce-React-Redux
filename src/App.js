import React from "react";
import "./App.css";

//COMPONENTS
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
          <ProductsList />
      <Cart />
    </div>
  );
}

export default App;
