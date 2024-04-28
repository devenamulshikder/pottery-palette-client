import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/Authprovider";
import { FaRegStar } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import Swal from "sweetalert2";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);

  const [filter, setFilter] = useState([]);

  const [myCraft, setMyCraft] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myartcraftlist/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFilter(data);
        setMyCraft(data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/pottery/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Craft Item has been deleted.",
                icon: "success",
              });
            }
          });
        const remaining = myCraft.filter((craft) => craft._id !== id);
        setMyCraft(remaining);
      }
    });
  };

  const handleYes = () => {
    const yes = filter.filter((f) => f.customizable !== "No");
    setMyCraft(yes);
  };

  const handleNo = () => {
    const no = filter.filter((f) => f.customizable !== "Yes");
    setMyCraft(no);
  };

  return (
    <div className="max-w-7xl mx-auto my-8 lg:my-16">
      <Helmet>
        <title>Pottery || My Art&Craft List</title>
      </Helmet>
      <h2 className="text-lg text-center font-semibold lg:text-4xl">
        My Art & Craft List
      </h2>

      <div className="flex justify-end">
        <div className="dropdown dropdown-hover ">
          <div tabIndex={0} role="button" className="btn bg-[#38b469] m-1">
            Customizable
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={handleYes}>Yes</a>
            </li>
            <li>
              <a onClick={handleNo}>No</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-16 p-4">
        {myCraft.map((item) => (
          <div key={item._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-[250px] w-[350px] rounded-xl"
                  src={item.image}
                  alt="image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.item_name}
                  <div className="badge bg-[#38b469]">{item.price}</div>
                </h2>
                <div>
                  <p className="flex items-center gap-1">
                    Rating: <span className="font-semibold">{item.rating}</span>
                    <FaRegStar />
                  </p>
                  <p>
                    Customization:{" "}
                    <span className="font-semibold">{item.customizable}</span>
                  </p>
                  <p>
                    StockStatus:{" "}
                    <span className="font-semibold">{item.stock}</span>
                  </p>
                </div>
                <p>Description: {item.description}</p>
                <div className="card-actions justify-end">
                  <div className=" btn bg-[#38b469] ">
                    Update <MdOutlineBrowserUpdated />
                  </div>
                  <div
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-[#38b469] "
                  >
                    Delete <FaDeleteLeft />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
