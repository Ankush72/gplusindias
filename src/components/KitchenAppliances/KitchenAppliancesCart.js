import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ImageScroll from "../ImageScroll/ImageScroll";

const KitchenAppliancesCart = ({ datas }) => {
  return (
    <>
      <div className="min-h-full mb-[100px] pt-[100px]  font-roboto">
        <div className="h-full flex flex-col">
          <div className="">
            <ImageScroll>
              {datas.banner.map((item) => {
                return (
                  <>
                    <img
                      className="w-full opacity-90"
                      src={item}
                      alt={datas.name}
                    />
                  </>
                );
              })}
            </ImageScroll>
          </div>
          <div className="w-full bg-gray h-10 p-2 flex items-center justify-center mt-5 ">
            <NavLink
              className="hover:text-orange opacity-75 hover:underline"
              to="/"
            >
              Home
            </NavLink>
            <span className="ml-2 mr-2">
              <IoIosArrowForward />
            </span>
            <Link
              to="/small-appliances"
              className="hover:text-orange opacity-75 hover:underline"
            >
              small-appliances
            </Link>
            <span className="ml-2 mr-2">
              <IoIosArrowForward />
            </span>
            <span>{datas.name}</span>
          </div>
        </div>

        <div className="flex items-center justify-center pt-20">
          {datas.data.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/small-appliances/${item.id}/${item.route}`}
                state={{ items: item }}
                className="flex flex-col w-[300px] flex items-center justify-center shadow m-4 pl-4 pr-4 rounded"
              >
                <img className="w-[200px]" src={item.imgurl[0]} alt="" />
                <h1 className="font-medium text-base mt-5 h-20 flex items-center justify-center text-center pl-5 pr-5 capitalize">
                  {item.name}
                </h1>
                <button className="w-full text-base h-10 bg-lightblack rounded-full mb-5 text-white hover:bg-white hover:text-black hover:border">
                  Learn More
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default KitchenAppliancesCart;
