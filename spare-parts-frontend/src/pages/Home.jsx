import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section>
        <h1>Find Genuine Spare Parts</h1>

        <p>
          Bike, Scooter, Car, Tractor and Agricultural Machine Spare Parts
        </p>

        <button>Shop Now</button>
      </section>

      <Footer />
    </>
  );
}

export default Home;