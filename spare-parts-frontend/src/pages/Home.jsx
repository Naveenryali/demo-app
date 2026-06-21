import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
function Home() {

    return (

        <>
            <Navbar />

            <section className="hero">

                <h1>
                    Find Genuine Spare Parts
                </h1>

                <p>
                    Bike • Scooter • Car • Tractor • Agricultural Machines
                </p>

                <input
                    type="text"
                    placeholder="Search Spare Parts..."
                />

                <button>
                    Search
                </button>

            </section>
            <section className="categories">

  <h1>Shop By Vehicle Category</h1>

  <div className="category-container">

    <CategoryCard
      icon="🚲"
      title="Bike Parts"
    />

    <CategoryCard
      icon="🛵"
      title="Scooter Parts"
    />

    <CategoryCard
      icon="🚗"
      title="Car Parts"
    />

    <CategoryCard
      icon="🚜"
      title="Tractor Parts"
    />

    <CategoryCard
      icon="🌾"
      title="Agricultural Parts"
    />

  </div>

</section>
<section className="featured-products">

  <h1>Featured Products</h1>

  <div className="product-container">

    {
      products.map((product)=>(
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))
    }

  </div>

</section>

            <Footer />
        </>

    );

}

export default Home;