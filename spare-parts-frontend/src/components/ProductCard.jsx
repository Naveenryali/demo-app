function ProductCard({ name, price }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>

      <p>₹{price}</p>

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductCard;