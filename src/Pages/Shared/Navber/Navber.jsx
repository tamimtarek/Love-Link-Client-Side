import { FaHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import img1 from "../../../assets/1.png";
const Navber = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/biodata">Biodatas</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white mb-6  shadow-xl h-16 border-gray-200 py-2.5">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img src={img1} className="w-12" alt="Landwind Logo" />
          <span className="font-bold uppercase text-xl text-red-700">
            Love Link
          </span>
        </Link>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between w-full lg:flex lg:w-auto z-10 lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 z-10 lg:mt-0">
            {navLink}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
