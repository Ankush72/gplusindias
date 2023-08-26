import React from "react";
import ImageScroll from "../ImageScroll/ImageScroll.js";
import ImageObj from "./ImageObj.js";

const Header = () => {
  return (
    <div className="pt-[100px] pb-5">
      <ImageScroll>
        {ImageObj.map((items, index) => {
          return (
            <div className="">
              <img className="h-full w-full" src={items.imgUrl} alt="banner" />
            </div>
          );
        })}
      </ImageScroll>
    </div>
  );
};

export default Header;
