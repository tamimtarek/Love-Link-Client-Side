import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import BioDatas from "../Pages/BioDatas/BioDatas";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Ragister/Register";
import BioDetails from "../Pages/BioDetails/BioDetails";
import Deshboard from "../Layout/Deshboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/biodata",
            element: <BioDatas></BioDatas>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/details/:id",
          element: <BioDetails></BioDetails>
        }
      ]
    },
    {
      path: "/deshboard",
      element: <Deshboard></Deshboard>
    }
  ]);


  export default router;