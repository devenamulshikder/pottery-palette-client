import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllartAndCraft from "../pages/AllartAndCraft";
import AddCraftItem from "../pages/AddCraftItem";
import PrivetRout from "./PrivateRoute";
import MyArtCraftList from "../pages/MyArtCraftList";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allart",
        element: <AllartAndCraft />,
        loader: () => fetch("http://localhost:5000/pottery")
      },
      {
        path: "/addcraft",
        element: (
          <PrivetRout>
            <AddCraftItem />
          </PrivetRout>
        ),
      },
      {
        path: "/myartcraftlist",
        element: (
          <PrivetRout>
            <MyArtCraftList />
          </PrivetRout>
        ),
      },
    ],
  },
]);

export default router;
