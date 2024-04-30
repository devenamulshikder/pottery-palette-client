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
import ViewDetails from "../components/ViewDetails";
import UpdateCraft from "../components/UpdateCraft";
import ArtAndCraftCategoriesDetails from "../components/ArtAndCraftCategoriesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://pottery-palette.vercel.app/pottery"),
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
        loader: () => fetch("https://pottery-palette.vercel.app/pottery"),
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
      {
        path: "/pottery/:id",
        element: (
          <PrivetRout>
            <ViewDetails></ViewDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`https://pottery-palette.vercel.app/pottery/${params.id}`),
      },
      {
        path: "/updateCraft/:id",
        element: (
          <PrivetRout>
            <UpdateCraft></UpdateCraft>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`https://pottery-palette.vercel.app/pottery/${params.id}`),
      },
      {
        path: "/challanging/:subcategory_name",
        element: (
          <PrivetRout>
            <ArtAndCraftCategoriesDetails></ArtAndCraftCategoriesDetails>
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(`https://pottery-palette.vercel.app/challanging/${params.subcategory_name}`),
      },
    ],
  },
]);

export default router;
