import React, { useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(30);
const productsArray = [...Array(20)].map((x, index) => ({
  id: index,
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  // image: faker.image.avatar(), not using becoz its ugly and disturbing hate this imagesssss aaaaaaaaa
}));
const HomePage = () => {
  const [products, setProducts] = useState(productsArray);

  return (
    <>
      <div className="ProductCard">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
