import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import "../styles/ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
    const { id } = useParams();

    const product = products.find(
        p => p.id === Number(id)
    );

const { addToCart } = useContext(CartContext);

    return (
        <>
            <Navbar />

            <div className="details-container">
                <div className="product-image">
                    Image
                </div>

                <div className="details">
                    <h1>{product.name}</h1>

                    <h2>₹ {product.price}</h2>

                    <p>
                        <strong>Brand :</strong> {product.brand}
                    </p>

                    <p>
                        <strong>Vehicle :</strong> {product.vehicle}
                    </p>

                    <p>{product.description}</p>

                    <h3>In Stock</h3>

                  <button onClick={() => addToCart(product)}>
                    </button>

                    <button>
                        Buy Now
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ProductDetails;