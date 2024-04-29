/* eslint-disable react/no-unescaped-entities */
const FromOurBlog = () => {
  return (
    <div className="mt-8 md:mt-12 lg:mt-20 p-2">
      <p className="text-[#38b469] inter font-semibold text-center">
        FROM OUR BLOG
      </p>
      <h1 className="divider text-2xl md:text-3xl lg:text-5xl inter font-bold text-center mt-8 mb-8">
        Latest Article
      </h1>
      <div className="lg:grid lg:grid-cols-12 grid gap-8">
        <div className="relative lg:col-span-7">
          <img
            src="https://i.postimg.cc/63BBpddw/ceramic-mugs-on-shelf.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-1">
          <div className="flex flex-col md:flex-row lg:flex-row gap-5 md:w-[200px] lg:w-[150px] mb-7">
            <img
              src="https://i.postimg.cc/1zq1tQNb/creative-flat-lay-design-of-stylish-beige-architect-moodboard-composition.jpg"
              alt=""
            />
            <div>
              <h1 className="text-xl inter w-full md:w-[300px] lg:w-[300px] ">
                The Contemporary Ceramic Art
              </h1>
              <p className="text-[#38b469] lg:w-[300px]">
                August 28, 2022 No Comments
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-5 md:w-[200px] lg:w-[150px] mb-7">
            <img
              src="https://i.postimg.cc/76r8JW3h/sculptor-working-in-the-ceramic-studio.jpg"
              alt=""
            />
            <div>
              <h1 className="text-xl inter w-full md:w-[300px] lg:w-[300px] ">
                Why Makers Make – Function, Form and Fine Art
              </h1>
              <p className="text-[#38b469] lg:w-[300px]">
                August 28, 2022 No Comments
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-5 md:w-[200px] lg:w-[150px] mb-7">
            <img src="https://i.postimg.cc/g25PmJrv/8-ldgq801ce.jpg" alt="" />
            <div>
              <h1 className="text-xl inter w-full md:w-[300px] lg:w-[300px] ">
                Making Your Ceramics Look Great In Digital Photographs
              </h1>
              <p className="text-[#38b469] lg:w-[300px]">
                August 28, 2022 No Comments
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row gap-5 md:w-[200px] lg:w-[150px] mb-7">
            <img
              src="https://i.postimg.cc/4xhfL4fC/a-potter-handling-a-wet-clay-pot-and-marking-a-design-on-the-outside-preparing-it-for-kiln-firing.jpg"
              alt=""
            />
            <div>
              <h1 className="text-xl inter w-full md:w-[300px] lg:w-[300px] ">
                Choosing a Pottery Kiln
              </h1>
              <p className="text-[#38b469] lg:w-[300px]">
                August 28, 2022 No Comments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurBlog;
