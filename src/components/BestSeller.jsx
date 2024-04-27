const BestSeller = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-8 md:mt-16 lg:mt-20">
        <h1 data-aos='fade-left' data-aos-duration='500' className="inter text-xl md:text-3xl lg:text-5xl font-semibold">
          Our Best Seller
        </h1>
        <button className="py-2 px-4 bg-[#00a973]">Shop Now</button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
        <div className="flex flex-col gap-2 border items-center hover:shadow-2xl">
          <img
            src="https://i.postimg.cc/RVjW571h/Ripple-Vase-300x300.jpg
"
            alt="Ripple Vase"
          />
          <p className="text-xl inter">Ripple Vase</p>
          <p className="text-red-600 inter underline ">$85.00</p>
          <button className="py-2 px-4 mb-5 bg-slate-200 hover:bg-slate-400">Shop Now</button>
        </div>


        <div className="flex flex-col gap-2 border items-center hover:shadow-2xl">
          <img
            src="https://i.postimg.cc/CMrZJTzj/Black-Turnip-Vase-300x300.jpg
"
            alt="Ripple Vase"
          />
          <p className="text-xl inter">Maya Ceramics Vase</p>
          <p className="text-red-600 inter underline ">$70.00</p>
          <button className="py-2 px-4 mb-5 bg-slate-200 hover:bg-slate-400">Shop Now</button>
        </div>
        <div className="flex flex-col gap-2 border items-center hover:shadow-2xl">
          <img
            src="https://i.postimg.cc/4xVmJYw5/Maya-Ceramics-Vase-300x300.jpg
"
            alt="Ripple Vase"
          />
          <p className="text-xl inter">Black Turnip Vase</p>
          <p className="text-red-600 inter underline ">$75.00</p>
          <button className="py-2 px-4 mb-5 bg-slate-200 hover:bg-slate-400">Shop Now</button>
        </div>
        <div className="flex flex-col gap-2 border items-center hover:shadow-2xl">
          <img
            src="https://i.postimg.cc/hjpgZWgF/Blue-Trumpet-Vase-300x300.jpg
"
            alt="Ripple Vase"
          />
          <p className="text-xl inter">Blue Trumpet Vase</p>
          <p className="text-red-600 inter underline ">$85.00</p>
          <button className="py-2 px-4 mb-5 bg-slate-200 hover:bg-slate-400">Shop Now</button>
        </div>





      </div>
    </div>
  );
};

export default BestSeller;
