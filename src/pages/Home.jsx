import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import FromOurBlog from "../components/FromOurBlog";
import OurProducts from "../components/OurProducts";

const Home = () => {
  const allData = useLoaderData();
  console.log(allData);
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <div>
          <p className="text-[#38b469] font-semibold mt-8 md:mt-12 lg:mt-16 text-center">
            OUR PRODUCTS
          </p>

          <h1 className="inter text-xl md:text-3xl lg:text-5xl mt-4 md:mt-8 lg:mt-10 text-center font-semibold">
            The calming sensation of ceramics
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 p-4 ">
            {allData.slice(0, 6).map((singleData) => (
              <OurProducts
                key={singleData._id}
                singleData={singleData}
              ></OurProducts>
            ))}
          </div>
        </div>

        <BestSeller></BestSeller>
        <FromOurBlog></FromOurBlog>
      </div>
    </div>
  );
};

export default Home;
