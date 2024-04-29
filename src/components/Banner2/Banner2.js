import React from "react";
import washing1 from "../image/website banner tv.jpg";

// tv banner
const Banner2 = () => {
  return (
    <div>
    <div className="relative">
      <img className="w-full h-full" src={washing1} alt="" />
      <div className="absolute bottom-5 md:bottom-[100px] left-5">
        <h1 className="md:mb-2 font-semibold text-sm md:text-lg text-center text-white">FLAT 30% off</h1>
        <a href="https://gshoppi.com/product-category/Televisions?id=6582bb7429d0054106763fea">
        <button className="bg-red hover:bg-white  pl-2 md:pl-5 pr-2 md:pr-5 pt-1 md:pt-2 pb-1 md:pb-2 rounded font-bold text-sm md:text-lg text-white hover:text-black">Buy Now</button>
        </a>
      </div>
    </div>

    </div>
  );
};

export default Banner2;
