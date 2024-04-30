import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const OurProducts = ({ singleData }) => {
  return (
    <>
    <Zoom duration={2000}>
    <div className="hover:shadow-2xl">
      <div
        
        className="relative grid h-[30rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700"
      >
        <div
          style={{ backgroundImage: `url(${singleData?.image})` }}
          className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
        >
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 px-6 py-14 md:px-12">
          <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            {singleData.item_name}
          </h2>
          <div className='flex'>
          <h5 className="block mb-4 font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-gray-400">
            {singleData.description}
          </h5>
          </div>
          <Link to={`/pottery/${singleData._id}`}>
            <button className="border p-2 text-white">View Products</button>
          </Link>
        </div>
      </div>
    </div>
    </Zoom>
    </>
  );
};

export default OurProducts;
