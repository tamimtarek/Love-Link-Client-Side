import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/Navber/Navber";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;