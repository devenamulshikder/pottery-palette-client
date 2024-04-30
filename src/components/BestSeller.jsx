const BestSeller = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mt-8 md:mt-16 lg:mt-20">
        <h1
          className="inter text-xl md:text-3xl lg:text-5xl font-semibold"
        >
          Our Best Seller
        </h1>
        <button className="py-2 px-4 bg-[#38b469]">Shop Now</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <div className="flex flex-col gap-2 border items-center hover:shadow-2xl">
          <img
            src="https://i.postimg.cc/RVjW571h/Ripple-Vase-300x300.jpg
"
            alt="Ripple Vase"
          />
          <p className="text-xl inter">Ripple Vase</p>
          <p className="text-red-600 inter underline ">$85.00</p>
          <button className="py-2 px-4 mb-5 bg-slate-200 hover:bg-slate-400">
            Shop Now
          </button>
        </div>

        <div className="flex flex-col gap-2 border items-center hover:shadow-2xl">
          <img
            src="https://i.postimg.cc/CMrZJTzj/Black-Turnip-Vase-300x300.jpg
"
            alt="Ripple Vase"
          />
          <p className="text-xl inter">Maya Ceramics Vase</p>
          <p className="text-red-600 inter underline ">$70.00</p>
          <button className="py-2 px-4 mb-5 bg-slate-200 hover:bg-slate-400">
            Shop Now
          </button>
        </div>
        <div className="flex flex-col gap-2 border items-center hover:shadow-2xl">
          <img
            src="https://i.postimg.cc/4xVmJYw5/Maya-Ceramics-Vase-300x300.jpg
"
            alt="Ripple Vase"
          />
          <p className="text-xl inter">Black Turnip Vase</p>
          <p className="text-red-600 inter underline ">$75.00</p>
          <button className="py-2 px-4 mb-5 bg-slate-200 hover:bg-slate-400">
            Shop Now
          </button>
        </div>
        <div className="flex flex-col gap-2 border items-center hover:shadow-2xl">
          <img
            src="https://i.postimg.cc/hjpgZWgF/Blue-Trumpet-Vase-300x300.jpg
"
            alt="Ripple Vase"
          />
          <p className="text-xl inter">Blue Trumpet Vase</p>
          <p className="text-red-600 inter underline ">$85.00</p>
          <button className="py-2 px-4 mb-5 bg-slate-200 hover:bg-slate-400">
            Shop Now
          </button>
        </div>
      </div>

      <div className="">
        <div className="mt-16 bg-[url('https://i.postimg.cc/8C58zz5p/pngegg-e1662013227204.png')]">
          <h1 className="text-xl font-semibold p-2 lg:text-5xl inter pt-16 lg:pl-16 lg:w-[40rem]">
            Turning mud into something amazing
          </h1>
          <p className="lg:pl-16 inter lg:w-[40rem] mt-6 p-2">
          Pottery and ceramics have been an important part of human culture for thousands of years. From prehistoric storage jars to tiles on the space shuttles, pottery and ceramics have played a key role in innumerable human endeavors. But how do we define them?
          </p>
          <div className="flex gap-10 items-center p-16">
            <div className="flex flex-col">
              <p className="text-6xl font-bold">15+</p>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div className="flex flex-col">
              <p className="text-6xl font-bold">98%</p>
              <p className="text-xl">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
