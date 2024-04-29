const Faq = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-5 mt-6 md:mt-10 lg:mt-16 p-4">
      <div  className="flex flex-col flex-1">
        <p className="font-semibold inter text-lg lg:text-xl mb-8 text-[#38b469]">FAQ</p>
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold inter mb-8">
          Frequently Asked Questions
        </h1>
        <p>
          Ornare senectus enim eleifend tempus hac aenean interdum vehicula
          tincidunt.Amet consectetur adipisicing elit. Exercitationem, vero.
        </p>
        <img className='md:h-[300px] lg:h-[350px] md:w-[450px]'
          src="https://i.postimg.cc/d11fwH5L/Abstract-Home-Decor.jpg"
          alt=""
        />
      </div>

      <div  className="flex-1 space-y-2 md:mt-10 lg:mt-16 inter">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          1. Where Can I Find Information?
          </div>
          <div className="collapse-content">
            <p>Cubilia porttitor metus scelerisque torquent vestibulum ac id ultrices ex congue montes. In turpis laoreet morbi vivamus eleifend pellentesque vulputate scelerisque.</p>
          </div>
        </div>
      
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          2. What Are Your Terms And Conditions?
          </div>
          <div className="collapse-content">
            <p>Cubilia porttitor metus scelerisque torquent vestibulum ac id ultrices ex congue montes. In turpis laoreet morbi vivamus eleifend pellentesque vulputate scelerisque.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          3. Do you ship internationaly?
          </div>
          <div className="collapse-content">
            <p>Cubilia porttitor metus scelerisque torquent vestibulum ac id ultrices ex congue montes. In turpis laoreet morbi vivamus eleifend pellentesque vulputate scelerisque.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          4. Can I Buy Directly From The Factory?
          </div>
          <div className="collapse-content">
            <p>Cubilia porttitor metus scelerisque torquent vestibulum ac id ultrices ex congue montes. In turpis laoreet morbi vivamus eleifend pellentesque vulputate scelerisque.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          5. What Kinds of Payment Do You Accept?
          </div>
          <div className="collapse-content">
            <p>Cubilia porttitor metus scelerisque torquent vestibulum ac id ultrices ex congue montes. In turpis laoreet morbi vivamus eleifend pellentesque vulputate scelerisque.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          6. When do I receive my order?
          </div>
          <div className="collapse-content">
            <p>Cubilia porttitor metus scelerisque torquent vestibulum ac id ultrices ex congue montes. In turpis laoreet morbi vivamus eleifend pellentesque vulputate scelerisque.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
