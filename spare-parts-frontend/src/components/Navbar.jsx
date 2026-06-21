import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        SpareHub
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Brands</li>
        <li>About</li>
        <li>Cart</li>
        <li>Login</li>
      </ul>

    </nav>
  );
}

export default Navbar;