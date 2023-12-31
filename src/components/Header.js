import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <span>
        <Link to="/">Shopper</Link>
      </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Account</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
