import React, { useState } from "react";
import { faker } from "@faker-js/faker";

// import faker from 'faker'
import { BrowserRouter, Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

faker.seed(30);
const productsArray = [...Array(20)].map((x, index) => ({
  id: index,
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  // image: faker.image.avatar(), not using becoz its ugly and disturbing hate this imagesssss aaaaaaaaa
}));
const HomePage = ({cart, setCart}) => {
  const [products, setProducts] = useState(productsArray);

  return (
    <>
      <div className="ProductCard">
        {productsArray.map((prod) => {
          return (
            <SingleProduct
              prod={prod}
              cart={cart}
              setCart={setCart}
              key={prod.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
