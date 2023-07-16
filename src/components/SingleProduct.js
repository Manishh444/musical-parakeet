import iphone from "../util/images/images.jpg";

const SingleProduct = ({ prod, setCart, cart }) => {
  const { name, image, price } = { ...prod };
  return (
    <div className="card">
      <img src={iphone} alt={"product logo"} />
      <div className="cardDesc">
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>

      <button
        className="button"
        onClick={() => {
          setCart([...cart, prod]);
        }}
      >{`Add to card`}</button>
      <button
        className="button"
        onClick={() => {
          const lastIndex = cart.find((c) => c.id == prod.id);
          const lof = cart.lastIndexOf(lastIndex);
          cart.splice(lof, 1);
          setCart(cart);
        }}
      >
        Remove from cart
      </button>
    </div>
  );
};

export default SingleProduct;
