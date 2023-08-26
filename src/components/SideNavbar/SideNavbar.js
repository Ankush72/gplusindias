import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import logo from "../image/logo2-removebg.png"

const Navbar = ({ setHamberger, hamberger }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-screen h-screen absolute top-0 right-0 flex font-roboto ">
      <div
        className=" sm:w-full bg-lightblack"
        onClick={() => setHamberger(!hamberger)}
      ></div>
      <div className="bg-white w-full sm:w-[500px] h-full pt-[3rem] pb-5 pl-5 relative">
        <div
          className="absolute right-10 top-10 border-2 rounded-full opacity-70 text-black"
          onClick={() => setHamberger(!hamberger)}
        >
          <MdOutlineClose size={22} />
        </div>
        <div className="navbar-start w-full">
          <Link
            to="/"
            className="logo flex items-center normal-case text-xl border-none"
          >
            <img className="h-10" src={logo} alt="" />
            {/* <h1 className="font-medium ml-1 font-roboto text-black">Gplus India </h1> */}
          </Link>
        </div>
        <div className="navbar-center  flex flex-col  font-roboto opacity-75">
          <ul className=" font-medium text-sm mt-5 space-y-3 uppercase ml-2 mr-[3rem] mb-5">
            <li className="border-b-[1.5px] text-black">
              <Link onClick={() => setHamberger(!hamberger)} to="/">
                Home
              </Link>
            </li>

            <li className="border-b-[1.5px] text-black">
              <Link onClick={() => setHamberger(!hamberger)} to="/about">
               About Us
              </Link>
            </li>

            <li className=" ">
              <div className="flex  items-center justify-between border-b-[1.5px] text-black">
                <div onClick={() => setHamberger(!hamberger)}>
                  Products
                </div>
                <div
                  className="mr-5 border mb-2 rounded"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <IoMdClose size={18} /> : <FiPlus size={18} />}
                </div>
              </div>
              <div>
                {toggle ? (
                  <div>
                    <div className=""></div>
                    <li className="border-b-[1.5px] mt-2 text-black">
                      <Link
                        onClick={() => setHamberger(!hamberger)}
                        to="/luxury-appliances"
                      >
                       luxury appliances
                      </Link>
                    </li>
                    <li className="border-b-[1.5px] mt-2 text-black">
                      <Link
                        onClick={() => setHamberger(!hamberger)}
                        to="/small-appliances"
                      >
                        Small Appliances
                      </Link>
                    </li>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </li>

            <li className="text-black">
              <Link onClick={() => setHamberger(!hamberger)} to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className=" ">
          <h1 className="capitalize font-medium text-lg ">Follow Us:</h1>
          <div className="flex space-x-2 mt-2">
            <a href="https://www.facebook.com/GarudamartindiapvtLtd">
              <img
                className="w-10 h-10 border-saltpan border p-2 rounded shadow-xl "
                src={facebook}
                alt="facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/garudamart2017/"
              className="w-10 h-10 border-saltpan border p-2 rounded shadow-xl "
            >
              <img className="w-5" src={instagram} alt="twitter" />
            </a>
            <a href="https://twitter.com/GarudaMartIndia">
              <img
                className="w-10 h-10 border-saltpan border p-2 rounded shadow-xl "
                src={twitter}
                alt="twitter"
              />
            </a>
            <a href="https://www.linkedin.com/company/garuda-mart-india-private-limited/">
              <img
                className="w-10 h-10 border-saltpan border p-2 rounded shadow-xl "
                src={linkedin}
                alt="linkedin"
              />
            </a>
            {/* <a href="">
            <img
              className="w-10 h-10 border-saltpan border p-2 rounded shadow-xl "
              src={youtube}
              alt="youtube"
            />
            </a> */}
          {/* </div> */}
        {/* </div>  */}
      </div>
    </div>
  );
};

export default Navbar;
