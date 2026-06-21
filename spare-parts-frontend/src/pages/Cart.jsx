import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

    const { cartItems, removeFromCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <>
            <Navbar />

            <div style={{ padding: "50px" }}>

                <h1>Shopping Cart</h1>

                {
                    cartItems.map(item => (

                        <div key={item.id}>

                            <h2>{item.name}</h2>

                            <p>₹ {item.price}</p>

                            <p>Quantity : {item.quantity}</p>

                            <button
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>

                            <hr />

                        </div>

                    ))
                }

                <h2>Total ₹ {totalPrice}</h2>

               <Link to="/checkout">

    <button>
        Proceed To Checkout
    </button>

</Link>

            </div>

            <Footer />
        </>
    );
}

export default Cart;