import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";


import AuthProvider from "./provider/Authprovider";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster/>
      </AuthProvider>
    </HelmetProvider>
  </>
);
