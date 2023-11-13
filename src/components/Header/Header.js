import React from "react";
import ImageScroll from "../ImageScroll/ImageScroll.js";
import ImageObj from "./ImageObj.js";
// import Diwaali from "../image/Diwali Dhamaka Back Side A4size.jpg"
// import Diwali1 from "../image/back diwali.jpg"
import Diwali2 from "../image/camp diwali.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"


const Header = () => {
  const [toggle, setToggle] = useState(true);
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
      <div>
        {toggle ? (
          <div className="fixed top-[100px] z-10 bg-[#85858590] left-0 right-0 bottom-[-15px] flex items-center justify-center ">
            <div className="w-[400px] h-[500px] flex items-center justify-center">
              {/* <ImageScroll> */}
              <div className="flex hover:scale-110	ease-in-out		">
                {toggle ? ( 
                  <div>
                    <img className="w-[350px] h-[350px] " src={Diwali2} alt="" />
                    <Link to="/diwali-offer" onClick={() => setToggle(false)}>
                      <button className="bg-[#E31E25] text-white w-full h-10 uppercase ">
                        click here
                      </button>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                <div className="cursor-pointer ">
                  {toggle ? (
                    <AiOutlineClose
                      size={30}
                      color="white"
                      onClick={() => setToggle(false)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* {
              imgData.map((item)=>{
                return (
                  <div>
                    <img className="h-full w-full" src={item.img} alt="Hello" />
  
                    
                  </div>
                )
              })
            } */}
              {/* </ImageScroll> */}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
