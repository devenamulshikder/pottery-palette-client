import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const Root = () => {
    return (
        <div>
         <div>
         <Navbar/>
         </div>
         <Outlet></Outlet>
         <Footer/>
        </div>
    );
};

export default Root;