import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import "../styles/Products.css";

function Products() {

    return (
        <>
            <Navbar />

            <div className="products-page">

                <h1>Products</h1>

                <input
                    className="search-box"
                    type="text"
                    placeholder="Search Spare Parts..."
                />

                <div className="products-container">

                    <div className="filters">

                        <h2>Filters</h2>

                        <h3>Vehicle Type</h3>

                        <p>Bike</p>
                        <p>Scooter</p>
                        <p>Car</p>
                        <p>Tractor</p>

                        <h3>Brand</h3>

                        <p>Hero</p>
                        <p>Honda</p>
                        <p>TVS</p>
                        <p>Bajaj</p>

                    </div>

                    <div className="products-grid">

                        {
                            products.map(product => (
                                <ProductCard
                                  key={product.id}
                                  id={product.id}
                                  name={product.name}
                                  price={product.price}
/>
                            ))
                        }

                    </div>

                </div>

            </div>

            <Footer />

        </>
    );
}

export default Products;