import "../styles/ProductCard.css";

function ProductCard({ name, price }) {
  return (
    <div className="product-card">

      <div className="product-image">
        Image
      </div>

      <h3>{name}</h3>

      <h2>₹ {price}</h2>

      <button>Add To Cart</button>

    </div>
  );
}

export default ProductCard;