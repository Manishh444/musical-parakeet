import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./src/components/HomePage";
import Cart from "./src/components/Cart";
import Context from "./Context";
const App = () => {
  //   const [cart, setCart] = useState([]);
  // console.log('just not getting',cart)
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} exact></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <App />
  </Context>
);
