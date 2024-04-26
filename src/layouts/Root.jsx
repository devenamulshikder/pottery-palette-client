import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";


const Root = () => {
    return (
        <div>
         <div className="max-w-7xl mx-auto mt-4">
         <Navbar/>
         </div>
         <Outlet></Outlet>
        </div>
    );
};

export default Root;