import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./src/components/HomePage";
import Cart from "./src/components/Cart";
const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<HomePage cart={cart} setCart={setCart} />}
            exact
          ></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
