const Home = () => {
  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
    {/* banner start here */}
        <div className="py-12 mx-auto">
          <div data-aos="zoom-out" data-aos-duration="2000" className="relative flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
            <img
              alt="nature"
              className="h-[36rem] w-full object-cover object-center"
              src="https://i.postimg.cc/RFfW4HQj/8-ldgq801ce.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
