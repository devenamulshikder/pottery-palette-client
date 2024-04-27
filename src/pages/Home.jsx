import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

import {} from "swiper/modules";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <Helmet>
            <title>Pottery || Home</title>
          </Helmet>
          <div className="p-6 h-[40rem] w-full">
            <div className="-m-6 max-h-[768px] w-[calc(100%+0px)]">
              <div className="mt-16">
                <div className="flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
                  <div className="absolute h-[38rem] w-full">
                    <img
                      data-aos="zoom-out"
                      data-aos-duration="2000"
                      alt="nature"
                      className="h-[38rem] w-full object-cover object-center opacity-80"
                      src="https://i.postimg.cc/RFfW4HQj/8-ldgq801ce.jpg"
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className=" relative "
                >
                  <h2 className="text-4xl lg:text-6xl ml-10 font-bold inter text-white text-center mt-32">
                    Every Touch Has Its <br /> Own Feelings
                  </h2>
                  <p className="text-xl lg:text-3xl mt-8 inter text-white text-center ml-10">
                    Welcome This Season with Our Sites!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 h-[40rem] w-full">
            <div className="-m-6 max-h-[768px] w-[calc(100%+0px)]">
              <div className="mt-16">
                <div className="flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
                  <div className="absolute h-[38rem] w-full">
                    <img
                      alt="nature"
                      className="h-[38rem] w-full object-cover object-center opacity-80"
                      src="https://i.postimg.cc/fRxWmTXN/young-girl-in-pottery.jpg"
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className=" relative "
                >
                  <h2 className="text-4xl lg:text-6xl ml-10 font-bold inter text-white text-center mt-32">
                    Every Touch Has Its <br /> Own Feelings
                  </h2>
                  <p className="text-xl lg:text-3xl mt-8 inter text-white text-center ml-10">
                    Welcome This Season with Our Sites!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 h-[40rem] w-full">
            <div className="-m-6 max-h-[768px] w-[calc(100%+0px)]">
              <div className="mt-16">
                <div className="flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
                  <div className="absolute h-[38rem] w-full">
                    <img
                      alt="nature"
                      className="h-[38rem] w-full object-cover object-center opacity-80"
                      src="https://i.postimg.cc/yNs1P4XS/man-makes-plate-in-pottery-workshop-clay-product-authentic-atmosphere-background-footage.jpg"
                    />
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className=" relative "
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl ml-10 font-bold inter text-white text-center mt-32">
                    Every Touch Has Its <br /> Own Feelings
                  </h2>
                  <p className="text-xl lg:text-3xl mt-8 inter text-white text-center ml-10">
                    Welcome This Season with Our Sites!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
