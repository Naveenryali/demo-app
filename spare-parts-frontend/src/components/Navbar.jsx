import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
    const { cartItems } = useContext(CartContext);
  return (
    <nav className="navbar">

      <div className="logo">
        SpareHub
      </div>

      <ul className="nav-links">
<li><Link to="/">Home</Link></li>
<li><Link to="/products">Products</Link></li>
<li><Link to="/brands">Brands</Link></li>
<li><Link to="/about">About</Link></li>
<li>
  <Link to="/cart">
    Cart ({cartItems.length})
  </Link>
</li>
<li><Link to="/login">Login</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;