import { useState } from "react";
import { useEffect } from "react";

const ArtAndCraftCategories = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/challanging")
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-center text-xl md:text-3xl lg:text-5xl inter font-semibold mt-4 md:mt-8 lg:mt-16 mb-16">
        Art & Craft Categories
      </h1>

      <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-row gap-10 justify-center items-center'>
        {categoryData.map((category) => (
          <div
            key={category._id}
            className="max-w-xs hover:scale-105 hover:shadow-2xl duration-300  p-6 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900"
          >
            <img
              src={category.image}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <h2 className="text-xl font-semibold tracking-wide">
                {category.subcategory_name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtAndCraftCategories;
