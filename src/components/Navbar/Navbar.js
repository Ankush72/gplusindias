import React, { useState } from "react";
import logo from "../image/Gplus Logo.png";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import SideNavbar from "../SideNavbar/SideNavbar";

const Navbar = () => {
  const [hamberger, setHamberger] = useState(false);

  return (
    <>
      <div className="fixed uppercase shadow-2xl z-20 w-full flex items-center justify-between bg-[#800000] h-20 text-white pl-10 pr-10 ">
        <Link to="/">
          <img className="h-[70px] w-full" src={logo} alt="" />
        </Link>
        <div className="flex items-center hidden md:block">
          <ul className=" flex items-center w-full justify-center space-x-4">
            <li
              className={({ isActive }) =>
                isActive ? `${isActive.active}` : " "
              }
            >
              <NavLink
                to="/"
                className="text-base font-semibold text-white cursor-pointer hover:underline hover:rounded underline-offset-4 	transition duration-150 ease-out hover:ease-in	"
              >
                Home
              </NavLink>
            </li>
           

            <li>
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  className="text-base font-semibold text-white hover:text-[#F2DF93] cursor-pointer  hover:rounded underline-offset-4 	transition duration-150 ease-out hover:ease-in"
                >
                  Products
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu  shadow-xl  bg-white rounded-lg absolute right-0 left-[-100px] z-10 w-60"
                >
                  <li className="">
                    <Link
                      to="/luxury-appliances"
                      className="hover:bg-gray hover:text-black text-black capitalize flex items-center justify-between nav_link  "
                    >
                      luxury appliances
                      <span className="arrow-icons hidden">
                        <BsArrowRight />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/small-appliances"
                      className="hover:bg-gray hover:text-black text-black capitalize flex items-center justify-between nav_link "
                    >
                      small Appliances
                      <span className="arrow-icons hidden">
                        <BsArrowRight />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="text-base font-semibold text-white hover:text-[#F2DF93] cursor-pointer hover:rounded underline-offset-4 	transition duration-150 ease-out hover:ease-in"
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact-us"
                className="text-base font-semibold text-white hover:text-[#F2DF93] cursor-pointer  hover:rounded underline-offset-4 	transition duration-150 ease-out hover:ease-in"
              >
                Contact Us
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to="/support"
                className="text-base font-semibold text-white cursor-pointer hover:underline hover:rounded underline-offset-4 	transition duration-150 ease-out hover:ease-in"
              >
                Support
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div
          className="absolute right-10 block md:hidden ml-3 sm:ml-5 cursor-pointer"
          onClick={() => setHamberger(!hamberger)}
        >
          {hamberger ? (
            <AiOutlineClose size={22} color="white" />
          ) : (
            <FiMenu size={22} color="white" className="" />
          )}
        </div>
        <div className="block md:hidden">
          {hamberger ? (
            <SideNavbar setHamberger={setHamberger} hamberger={hamberger} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
