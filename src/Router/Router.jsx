import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import BioDatas from "../Pages/BioDatas/BioDatas";

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
        }
      ]
    },
  ]);


  export default router;