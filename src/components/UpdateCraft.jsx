/* eslint-disable no-unused-vars */
import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";

const UpdateCraft = () => {
  const craft = useLoaderData();

  const {
    _id,
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
  } = craft;

  const { user } = useContext(AuthContext);
  const handleUpdateCraftItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = user.displayName;
    const userEmail = user.email;

    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;

    const price = form.price.value;
    const rating = form.rating.value;

    const customizable = form.customizable.value;
    const image = form.image.value;

    const stock = form.stock.value;
    const processing_time = form.processing_time.value;
    const description = form.description.value;

    const updatedCraft = {
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
    };

    fetch(`https://pottery-palette.vercel.app/pottery/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          form.reset("");
          toast.success("Successfully Craft Updated!");
        } else{
          toast.error('You Have already Update This Craft!!')
        }
      });
  };
  return (
    <>
      <div className="bg-[#f4f3f0b0] max-w-7xl mx-auto p-5 lg:p-10 rounded-xl mt-8 lg:mt-16">
        <h1 className="text-4xl font-extrabold text-center mb-5">
          Update a Craft Item
        </h1>
        <form onSubmit={handleUpdateCraftItem}>
          <div className="md:flex gap-5 mb-6">
            <div className="md:w-1/2">
              <label className="label"> Item Name</label>
              <input
                type="text"
                name="item_name"
                defaultValue={item_name}
                placeholder="Item Name"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div className="md:w-1/2">
              <label className="label"> subcategory_Name</label>
              <select
                type="text"
                name="subcategory_name"
                defaultValue={subcategory_name}
                required
                className=" p-3 rounded-lg border w-full"
              >
                <option>Clay-made pottery</option>
                <option>Stoneware</option>
                <option>Porcelain</option>
                <option>Terra Cotta</option>
                <option>Ceramics & Architectural</option>
                <option>Home decor pottery</option>
              </select>
            </div>
          </div>
          <div className="md:flex gap-5 mb-6">
            <div className="md:w-1/2">
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter Price"
                required
                className="input input-bordered w-full"
              />
            </div>

            <div className="md:w-1/2">
              <label className="label">Rating</label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                placeholder="Enter Ratings"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* form cetagory row  */}
          <div className="md:flex gap-5 mb-6">
            <div className="md:w-1/2">
              <label className="label">Customizable:</label>
              <select
                type="text"
                name="customizable"
                defaultValue={customizable}
                required
                className="p-3 border rounded-lg w-full"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="md:w-1/2">
              <label className="label">Image</label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Enter Image_URL"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="md:flex gap-5 mb-6">
            <div className="md:w-1/2">
              <label className="label">Stock Status:</label>
              <select
                type="text"
                name="stock"
                defaultValue={stock}
                required
                className="p-3 border rounded-lg w-full"
              >
                <option>In stock</option>
                <option>Made to Order</option>
              </select>
            </div>
            <div className="md:w-1/2">
              <label className="label">Processing Time:</label>
              <input
                type="text"
                name="processing_time"
                defaultValue={processing_time}
                required
                placeholder="Enter processing time (hour)"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* photo url*/}
          <div className="mb-6">
            <label>Message</label>
            <textarea
              className="textarea textarea-bordered w-full"
              name="description"
              defaultValue={description}
              required
              placeholder="Sort Description"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Update to Change Craft"
            className="btn btn-block bg-[#38b469]"
          />
          {/* <button className="btn btn-error w-full">Add Coffee</button> */}
        </form>
      </div>
    </>
  );
};

export default UpdateCraft;
