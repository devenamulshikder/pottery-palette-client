import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { FaRegStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const ArtAndCraftCategoriesDetails = () => {
  const [items, setItems] = useState([]);

  const { subcategory_name } = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/pottery")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [subcategory_name]);
  const categoryData = items.filter(
    (f) => f.subcategory_name === subcategory_name
  );
  return (
    <>
    <Zoom>
    <div className="max-w-7xl mx-auto mt-16">
      <h1 className="text-center text-xl md:text-3xl lg:text-5xl inter font-semibold mt-4 md:mt-8 lg:mt-16 mb-16">
        {subcategory_name}
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categoryData.map((cat) => (
          <div key={cat._id} className="p-4">
            <div className="relative grid h-[30rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div
                style={{ backgroundImage: `url(${cat?.image})` }}
                className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
              >
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
              </div>
              <div className="relative p-6 px-6 py-14 md:px-12">
                <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                  {cat.item_name}
                </h2>
                <div className="flex">
                  <h5 className="block mb-4 inter text-start text-lg antialiased font-semibold leading-snug tracking-normal text-gray-300">
                    <p>{cat.description}</p>

                    <div>
                      <p className="flex mt-3">
                        processing_time: {cat.processing_time}
                      </p>
                      <p className="flex">Categories: {cat.subcategory_name}</p>
                    </div>
                    <div className="flex justify-between mt-3">
                      <p>Price: {cat.price}</p>
                      <p className="flex items-center gap-1">
                        <span>Rating: {cat.rating}</span>{" "}
                        <span>
                          <FaRegStar />
                        </span>
                      </p>
                    </div>
                  </h5>
                </div>
                <Link to={`/pottery/${cat._id}`}>
                  <button className="border p-2 text-white">
                    View Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Zoom>
    </>
  );
};

export default ArtAndCraftCategoriesDetails;
