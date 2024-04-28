import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/Authprovider";


const MyArtCraftList = () => {

    const {user}=useContext(AuthContext)

    useEffect(()=>{
     fetch(`http://localhost:5000/myartcraftlist/${user.email}`)
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })
    },[user.email])

    return (
        <div className="max-w-7xl mx-auto md:my-8 lg:my-16">
            <Helmet>
                <title>
                Pottery || My Art&Craft List
                </title>
            </Helmet>
            <h2 className='text-lg text-center font-semibold lg:text-4xl'>My Art & Craft List</h2>
        </div>
    );
};

export default MyArtCraftList;