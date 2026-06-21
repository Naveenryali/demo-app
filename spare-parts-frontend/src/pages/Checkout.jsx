import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Checkout.css";

function Checkout() {

    return (
        <>
            <Navbar />

            <div className="checkout-container">

                <h1>Checkout</h1>

                <input
                    type="text"
                    placeholder="Full Name"
                />

                <input
                    type="text"
                    placeholder="Phone Number"
                />

                <textarea
                    placeholder="Delivery Address"
                ></textarea>

                <h2>Payment Method</h2>

                <div>

                    <input
                        type="radio"
                        name="payment"
                    />
                    Cash On Delivery

                </div>

                <div>

                    <input
                        type="radio"
                        name="payment"
                    />
                    UPI

                </div>

                <div>

                    <input
                        type="radio"
                        name="payment"
                    />
                    Card

                </div>

                <button>
                    Place Order
                </button>

            </div>

            <Footer />
        </>
    );
}

export default Checkout;