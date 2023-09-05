import React from "react";
import electricImg from "../image/electronicesAppliances.jpeg";
import electronicAppliances from "../image/elctronicAppliances.jpeg";
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import HomeAppliancesObj from "./HomeAppliancesObj";

const ElectronicsAppliances = () => {
 
  return (
    <div className="pt-20 bg-[#DFE3E4] font-roboto">
      <div>
        <div className="pt-5 w-full h-full flex flex-col lg:flex-row  items-center   justify-center relative mb-7 ">
          <div className="w-full lg:w-4/6 z-10">
            <div className="contact">
              <img
                className="hidden lg:block"
                src={electronicAppliances}
                alt=""
              />
              <img className="block lg:hidden" src={electricImg} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2  relative mt-5 lg:mt-0">
            <div className="h-[100px] overflow-hidden bg-blue flex flex-col items-center justify-center text-white lg:absolute left-0 lg:left-[-100px] right-0 lg:top-[-70px]">
              <h1 className="text-center font-bold text-4xl font-Montserrat drop-shadow-2xl ">
                Electronics Appliances
              </h1>
              {/* <p className="font-medium mt-1">
                Always <span className="text-orange"> YES</span> to Gplus
              </p> */}
            </div>
            {/* <div >
              <img src={dotimg} alt="" />
            </div> */}
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
          <span>luxury-appliances</span>
        </div>
        <div className="flex flex-wrap space-x-3 pl-10 pr-10 items-center justify-center mt-10">
          {HomeAppliancesObj.map((items, index) => {
            return (
              <>
                <Link
                  to={`/luxury-appliances/${items.id}`}
                  state={{ HomeAppliances: items }}
                  className="flex flex-wrap items-center justify-center  pb-20 "
                >
                  <div className="w-[280px]  h-[350px] rounded-lg overflow-hidden  cursor-pointer shadow-lightblack bg-white pt-3 pb-3 flex flex-col items-center justify-between">
                  <img
                      className="h-[250px] w-full hover:scale-125 rounded-xl transition-all duration-500 cursor-pointer  w-[230px] "
                      src={items.imgurl[0]}
                      alt={items.name}
                    />
                    
                    <p className="font-medium rounded-xl text-2xl text-black capitalize pb-5  flex items-center justify-center pt-2">
                      {items.name}
                    </p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>

      {/* Apply for dealership */}

      <div className="flex items-center justify-center pb-10">
        <div>
          <Link
            to="/contact"
            className="text-center bg-blue pl-5 pr-5 pt-3 pb-3 rounded-lg text-white text-xl font-bold capitalize"
          >
            Apply for dealership
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsAppliances;
