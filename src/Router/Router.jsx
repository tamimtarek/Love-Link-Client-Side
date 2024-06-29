import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import BioDatas from "../Pages/BioDatas/BioDatas";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Ragister/Register";
import BioDetails from "../Pages/BioDetails/BioDetails";
import Deshboard from "../Layout/Deshboard";
import PostBio from "../Pages/Deshboard/PostBio";
import MyContact from "../Pages/Deshboard/MyContact";
import PrivetRoute from "./PrivetRoute";
import ManageUser from "../Pages/Deshboard/ManageUser";
import AdminRoute from "./AdminRoute";
import ChackOut from "../Pages/BioDetails/ChackOut/ChackOut";
import Error from "../Pages/Error/Error";
import Favourits from "../Pages/Deshboard/Favourits";
import ViewBio from "../Pages/Deshboard/ViewBio";
import Request from "../Pages/Deshboard/Request";
import Premium from "../Pages/Deshboard/Premium";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
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
          element: <PrivetRoute><BioDetails></BioDetails></PrivetRoute>
        },
        {
          path: "/chackout/:id",
          element: <PrivetRoute><ChackOut></ChackOut></PrivetRoute>
        }
      ]
    },
    {
      path: "deshboard",
      element: <PrivetRoute><Deshboard></Deshboard></PrivetRoute>,
      children:[
        {
          path: "editbio",
          element: <PostBio></PostBio>
        },
        {
          path: "request",
          element: <MyContact></MyContact>
        },
        {
          path: "viewbio",
          element: <ViewBio></ViewBio>
        },
        {
          path: "favourit",
          element:<Favourits></Favourits>
        },
        {
          path: "manageuser",
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
        },
        {
          path: "contact",
          element: <AdminRoute><Request></Request></AdminRoute>
        },
        {
          path: "premium",
          element:<AdminRoute><Premium></Premium></AdminRoute>
        }
      ]
    }
  ]);


  export default router;