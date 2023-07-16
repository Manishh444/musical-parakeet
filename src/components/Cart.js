import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Cart as myCart } from "../../Context";

const Cart = () => {

  const {cart, setCart} = useContext(myCart)
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((sumTotal, prod) => sumTotal + Number(prod.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Carty</span>
      <br></br>
      <span style={{ fontSize: 30 }}>{`Total : ${total}`}</span>
      <div className="productContainer">
        {cart.map((prod) => {
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
    </div>
  );
};

export default Cart;
