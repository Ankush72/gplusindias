import React from "react";
import logo from "../image/Gplus Logo.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const years = date.getFullYear();

  return (
    <div className="">
      <footer className="bg-[#800000]">
        <div className="mx-auto w-full max-w-screen-xl pt-5">
          <div className="flex flex-wrap justify-between px-4 py-6 lg:py-2 md:grid-cols-4  pl-10 pr-20">
            <div className="w-[300px]">
              <div className="w-[150px]">
                <img className="" src={logo} alt="" />
                {/* <h2 className=" ml-5 text-xl font-semibold text-black uppercase dark:text-white">
                  Gplus india
                </h2> */}
              </div>
              <h1 className="font-medium text-sm text-white leading-2 mt-4">
                Survey No. 183/1, Lake Side Road, Behind NCC Apartment,
                Mahadevapura Bangalore(KA). 560048
              </h1>
              <div className="flex flex-col">
                <a
                  href="tel:1800 12398 6666"
                  className="text-white  font-bold  text-xs mt-1"
                >
                  1800 12398 6666
                </a>
                <a
                  href="mailto:care@gplusindia.com?"
                  className="font-semibold  text-white text-xs"
                >
                  care@gplusindia.com
                </a>
              </div>
            </div>

            <div className="w-[150px] mt-10 md:mt-0">
              <h2 className="mb-4 text-lg font-semibold text-white uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-1">
                  <NavLink
                    to="/"
                    className=" hover:text-[#F2DF93] text-sm"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    to="/about-us"
                    className=" hover:text-[#F2DF93] text-sm"
                  >
                    About Us
                  </NavLink>
                </li>
                {/* <li className="mb-4">
                  <NavLink
                    to="/all-product"
                    className=" hover:text-[#F2DF93] text-sm"
                  >
                    Products
                  </NavLink>
                </li> */}

                <li className="mb-1">
                  <NavLink
                    to="/contact"
                    className=" hover:text-[#F2DF93] text-sm"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="mb-3">
                  <NavLink
                    to="/support"
                    className=" hover:text-[#F2DF93] text-sm"
                  >
                    Support
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="w-[200px] mt-10 md:mt-0">
              <h2 className="mb-4 text-lg font-semibold text-white uppercase dark:text-white">
                Support
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-1">
                  <NavLink
                    to="/privacy-policy"
                    className=" hover:text-[#F2DF93] text-sm"
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    to="/terms-conditions"
                    className=" hover:text-[#F2DF93] text-sm capitalize"
                  >
                    Terms & conditions
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    to="/return-refunds"
                    className=" hover:text-[#F2DF93] text-sm"
                  >
                    Return & Refunds
                  </NavLink>
                </li>
                <li className="mb-1">
                  <NavLink
                    to="/disclaimer"
                    className=" hover:text-[#F2DF93] text-sm"
                  >
                    Disclaimer
                  </NavLink>
                </li>
              </ul>
            </div>
           <div>
            <h1 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white">Follow Us</h1>
           <div className="flex flex-row items-center justify-center  space-x-2">
              <a
                className="w-8 h-8 hover:bg-black shadow-3xl shadow-white rounded-full bg-white flex items-center justify-center"
                href="https://www.facebook.com/gplushomeappliances/"
              >
                <FaFacebookF color="#3b5998" size={20} />
              </a>
              <a
                className="w-8 h-8 hover:bg-black shadow-3xl shadow-white  rounded-full bg-white flex items-center justify-center"
                href="https://www.instagram.com/gplushomeappliances/"
              >
                <AiOutlineInstagram color="#fa7e1e" size={20} />
              </a>
              <a
                className="w-8 h-8 hover:bg-black shadow-3xl shadow-white  rounded-full bg-white flex items-center justify-center"
                href="https://twitter.com/GplusHome"
              >
                <AiOutlineTwitter color="#00acee" size={20} />
              </a>
              <a
                className="w-8 h-8 hover:bg-black shadow-3xl shadow-white  rounded-full bg-white flex items-center justify-center"
                href="https://www.linkedin.com/company/gplus-india-home-appliances/"
              >
                <BsLinkedin color="#0072b1" size={20} />
              </a>
              <a
                className="w-8 h-8 hover:bg-black shadow-3xl shadow-white  rounded-full bg-white flex items-center justify-center"
                href="https://www.youtube.com/@gplushomeappliances"
              >
                <IoLogoYoutube color="red" size={20} />
              </a>
            </div>
           </div>
          </div>
          <div className="flex items-center justify-center pb-5 bg-[#800000] ">
            <span className="text-sm text-white text-center">
              © {years} Logistic. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
