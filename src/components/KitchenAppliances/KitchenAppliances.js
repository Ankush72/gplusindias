import React from "react";
import kitchenAppliances from "../image/kitchenAppliances (2).jpeg";
import { Link, NavLink } from "react-router-dom";
import KitchenAppliancesObj from "./KitchenAppliancesObj";
import Kitchen from "../image/KitchenApp.jpeg";
import { IoIosArrowForward } from "react-icons/io";

const KitchenAppliances = () => {
  return (
    <>
      <div className="pt-20 bg-[#DFE3E4] font-roboto">
        <div className="pt-5 w-full h-full flex flex-col lg:flex-row  items-center   justify-center relative pb-5">
          <div className="w-full lg:w-4/6 z-10 ">
            <div className="contact">
              <img className="hidden lg:block" src={Kitchen} alt="" />
              <img className="block lg:hidden" src={kitchenAppliances} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2  relative mt-5 lg:mt-0">
            <div className="h-[100px] overflow-hidden bg-[#800000] flex flex-col items-center justify-center text-white lg:absolute left-0 lg:left-[-100px] right-0 lg:top-[-70px]">
              <h1 className="text-center font-bold text-4xl font-Montserrat drop-shadow-lg ">
                Kitchen Appliances
              </h1>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="w-full bg-gray h-10 p-2 flex items-center justify-center ">
          <NavLink className="hover:text-orange opacity-75" to="/">
            Home
          </NavLink>{" "}
          <span className="ml-2 mr-2">
            {" "}
            <IoIosArrowForward />{" "}
          </span>{" "}
          <span>small-appliances</span>
        </div>

        <div className="flex items-center justify-center flex-wrap space-x-4 pl-10 pr-10 mt-10">
          {KitchenAppliancesObj &&
            KitchenAppliancesObj.map((items, index) => {
              return (
                <>
                  <Link
                    to={`/small-appliances/${items.id}`}
                    state={{ smallAppliances: items }}
                    key={items.id}
                    className="flex items-center justify-center  pb-20 space-x "
                  >
                    <div className="w-[280px]  h-[350px] rounded-lg  cursor-pointer shadow-balck bg-white pt-3 pb-3 flex flex-col items-center justify-between overflow-hidden">
                      <img
                        className="h-[230px] hover:scale-125 rounded-xl transition-all duration-500 cursor-pointer  w-[230px] "
                        src={items?.imgurl[0]}
                        alt={items?.name}
                      />

                      <p className="font-medium text-2xl text-black capitalize pb-5 hover:text-lightblack  hover:border-t w-full flex items-center justify-center pt-2">
                        {items.name}
                      </p>
                    </div>
                  </Link>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default KitchenAppliances;
