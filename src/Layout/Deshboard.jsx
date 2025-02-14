import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdAdminPanelSettings, MdOutlineDashboard, MdPreview } from "react-icons/md";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart, FiUpload } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import { FaCloudUploadAlt, FaHouseUser, FaSignOutAlt, FaUpload, FaUser, FaUserAlt } from "react-icons/fa";

import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import useAdmin from "../hooks/useAdmin";
import { FaPeopleGroup } from "react-icons/fa6";
//   import { NavLink, Outlet } from "react-router-dom";
  
  
  const Dashboard = () => {
    const { logOut, user } = useAuth();
    const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut")
      })
      .catch((error) => toast.error(error));
  };
    const usersLink = [
        { name: "Home", link: "/", icon: MdOutlineDashboard },
        { name: "User Dashboard", link: "/deshboard", icon: FaHouseUser },
        { name: "Edit Biodata", link: "/deshboard/editbio", icon: FiUpload },
        { name: "View Biodata", link: "/deshboard/viewbio", icon: MdPreview },
        { name: "My Contact Request", link: "/deshboard/request", icon: FiFolder },
        { name: "Favourites Biodata", link: "/deshboard/favourit", icon: AiOutlineHeart, margin: true },
      ];
    const adminLink = [
        { name: "Home", link: "/", icon: MdOutlineDashboard },
        { name: "Admin Dashboard", link: "/deshboard", icon: MdAdminPanelSettings },
        { name: "Manage Users", link: "/deshboard/manageuser", icon: FaUserAlt },
        { name: "Approved Premium", link: "/deshboard/premium", icon: FiFolder },
        { name: "Approved Contact Request", link: "/deshboard/contact", icon: AiOutlineHeart, margin: true },
      ];

      const [open, setOpen] = useState(true);
      return (
        <section className="flex w-full gap-6">
          <div
            className={`bg-[#0e0e0e] min-h-screen ${
              open ? "w-72" : "w-16"
            } duration-500 text-gray-100 px-4`}
          >
            <div className="py-3 flex justify-end">
              <HiMenuAlt3
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
              {
                isAdmin ? <>
                {adminLink?.map((menu, i) => (
                  <Link
                    to={menu?.link}
                    key={i}
                    className={` ${
                      menu?.margin && "mt-5"
                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                  >
                    <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {menu?.name}
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {menu?.name}
                    </h2>
                  </Link>
                ))}
                </> : <>
                {usersLink?.map((menu, i) => (
                  <Link
                    to={menu?.link}
                    key={i}
                    className={` ${
                      menu?.margin && "mt-5"
                    } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                  >
                    <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre duration-500 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {menu?.name}
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {menu?.name}
                    </h2>
                  </Link>
                ))}
                </>
              }
              <button className="group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md" onClick={handleLogOut}><div><FaSignOutAlt></FaSignOutAlt></div>
                  <h2
                    style={{
                      transitionDelay: `${1 + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    LogOut
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    LogOut
                  </h2></button>
            </div>
          </div>
          <div className="m-3 w-full text-xl text-gray-900 font-semibold">
           <Outlet></Outlet>
          </div>
          <Toaster></Toaster>
        </section>
      );
  };
  
  export default Dashboard;
  