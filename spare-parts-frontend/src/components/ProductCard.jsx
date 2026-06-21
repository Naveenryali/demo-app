import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({ id, name, price }) {

  return (

    <div className="product-card">

      <div className="product-image">
        Image
      </div>

      <h3>{name}</h3>

      <h2>₹ {price}</h2>

      <Link to={`/product/${id}`}>
        <button>View Details</button>
      </Link>

    </div>

  );
}

export default ProductCard;