/* eslint-disable no-unused-vars */
import { FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const viewData = useLoaderData();

  const {
    userName,
    userEmail,
    item_name,
    subcategory_name,
    price,
    rating,
    customizable,
    image,
    stock,
    processing_time,
    description,
  } = viewData;
  return (
    <>
      <div className="py-5 md:py-10 bg-white text-black">
            <div className="max-w-7xl mx-auto lg:min-h-[calc(100vh-520px)]">
                <div className="flex flex-col lg:flex-row justify-even items-center gap-5 sm:gap-8 lg:gap-20 px-5">
                    <div className=" p-5 shadow-sm rounded-lg">
                        <img className="w-[350px] h-[350px]" src={image} alt="" />
                    </div>
                    <div className="space-y-3 text-sm lg:text-lg font-semibold p-5 md:p-6 lg:p-8 flex-1">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold border-b-2 pb-2 border-dotted">Art Name: {item_name}</h1>
                        <p className="sm:w-1/2 text-xs md:text-sm lg:text-sm font-semibold border-b-2 pb-2 border-dotted"><span className="font-bold text-lg">Description: </span> {description}</p>
                        <p className="border-b-2 pb-2 border-dotted md:w-1/2">Category: {subcategory_name}</p>
                        <div className="md:w-1/2 flex justify-between items-center border-b-2 pb-2 border-dotted">
                            <p>Price: {price}</p>
                            <p className='flex items-center gap-1'>Rating: {rating} <FaRegStar /></p>
                        </div>
                        <div className="md:w-1/2 flex justify-between items-center">
                            <p>Customizable: {customizable}</p>
                            <p>Stock: {stock}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ViewDetails;
