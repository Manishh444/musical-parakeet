import { useContext } from "react";
import iphone from "../util/images/images.jpg";
import { Cart } from "../../Context";

const SingleProduct = ({ prod }) => {
      const { cart, setCart } = useContext(Cart);

  const { name, price } = { ...prod };
  return (
    <div className="card">
      <img src={iphone} alt={"product logo"} />
      <div className="cardDesc">
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>

      {cart.includes(prod) ? (
        <button
          className="button"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="button" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;


// <button
//   className="button"
//   onClick={() => {
//     const lastIndex = cart.find((c) => c.id == prod.id);
//     const lof = cart.lastIndexOf(lastIndex);
//     cart.splice(lof, 1);
//     setCart(cart);
//   }}
// >
//   Remove from cart
// </button>;