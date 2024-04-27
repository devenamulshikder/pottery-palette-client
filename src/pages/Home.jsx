import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import OurProducts from "../components/OurProducts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <OurProducts></OurProducts>
        <BestSeller></BestSeller>
      </div>
    </div>
  );
};

export default Home;
