import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const AllartAndCraft = () => {
  const allArtLoader = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <Helmet>
        <title>Pottery || AllartAndCraft</title>
      </Helmet>

      <div className="overflow-x-auto p-2">
        <table className="table">
          {/* head */}
          <thead className='text-lg'>
            <tr>
              <th>Item Name</th>
              <th>Subcategory Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Stock Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allArtLoader.map((singleArt) => (
              <tr key={singleArt._id}>
                <td>{singleArt?.item_name}</td>
                <td>{singleArt?.subcategory_name}</td>
                <td>{singleArt?.price}</td>
                <td>{singleArt?.rating}</td>
                <td>{singleArt.stock}</td>
                <td>
                  <Link to={`/pottery/${singleArt._id}`} className='btn'>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllartAndCraft;
