import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";

const KitchenApp = () => {
  const [showImg, setShowImg] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [keyfeature, setKeyFeature] = useState(true);
  const [toggle, setToggle] = useState(true);

  const { state } = useLocation();
  const { items = {} } = state;

  const showMoreText = (item) => {
    if (item.length <= 258) return item;
    if (item.length > 258 && showMore) {
      return (
        <>
          <p>
            {item}
            <button
              className="ml-3 font-medium text-base text-orange"
              onClick={() => setShowMore(false)}
            >
              Show Less
            </button>
          </p>
        </>
      );
    }
    if (item.length > 258) {
      return (
        <>
          <p>
            {item.slice(0, 258)} ...{" "}
            <button
              className="font-medium text-base text-orange"
              onClick={() => setShowMore(true)}
            >
              Show More
            </button>
          </p>
        </>
      );
    }
  };

  const toTitleCase = (items) => {
    const titleCase = items
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    return titleCase;
  };

  var settings = {
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    arrows: true,
  };

  return (
    <div className="font-roboto">
      <div className="pt-[150px] min-h-screen mb-10 flex flex-col md:flex-row justify-center md:justify-around w-full">
        <div className="w-full md:w-3/6 h-full  bg-white shadow flex items-center justify-center md:justify-around sm:mt-10 md:mt-0 pl-3 md:m-2">
          <div className="space-y-3 flex flex-col items-center justify-center">
            <div className="w-[300px] h-[300px] ">
              <img
                className=""
                src={showImg ? showImg : items.imgurl && items.imgurl[0]}
                alt=""
              />
            </div>
            <div className="flex flex-col space-x-3">
              <div className="float-left">
                <h1 className="font-semibold text-lg underline ">
                  Images ({items.imgurl.length})
                </h1>
              </div>
              <div className=" w-[300px]  mt-5 space-x-3">
                <Slider {...settings}>
                  {items.imgurl.map((item) => {
                    return (
                      <div className="border w-[100px]  h-[80px] flex items-center justify-center ">
                        <img
                          className=""
                          src={item}
                          alt=""
                          onMouseMove={() => setShowImg(item)}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-5/6 md:w-2/6 flex justify-center md:justify-around mt-10 md:mt-0">
          <div className="space-y-3">
            <img
              className="w-[300px] h-[300px]  rounded-xl border"
              src={showImg ? showImg : items?.imgurl && items?.imgurl[0]}
              alt=""
            />
            <div className="flex flex-col space-x-3">
              <div>
                <h1 className="font-semibold text-lg underline">
                  {" "}
                  Images ({items.imgurl.length})
                </h1>
              </div>
              <div className="flex mt-3 space-x-3">
                {items.imgurl &&
                  items.imgurl.map((item) => {
                    return (
                      <img
                        className="w-[80px] border rounded"
                        src={item}
                        key={item}
                        onMouseMove={() => setShowImg(item)}
                        alt={item.name1}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex shadow flex-col w-full md:w-4/6 rounded pr-3 sm:pr-10 pl-3 md:m-2 sm:pl-10 md:pl-5 pt-3 pb-3">
          <h1 className="font-bold text-2xl capitalize">{items.name}</h1>
          {/* <h1 className="font-bold text-xl mt-5">{datas.descriptionName}</h1> */}
          <p className="font-normal text-base mt-5">
            {showMoreText(items.description)}
          </p>
          <div className="mt-5">
            <h1
              className="font-bold text-base bg-gray1 p-2 flex items-center cursor-pointer rounded-t "
              onClick={() => setKeyFeature(!keyfeature)}
            >
              {keyfeature ? (
                <IoMdArrowDropup size={30} />
              ) : (
                <IoMdArrowDropdown size={30} />
              )}{" "}
              {items.heading}
            </h1>
            {keyfeature ? (
              <div className="flex flex-col bg-gray1 pl-5 pb-5 rounded-b transition duration-150 ease-out hover:ease-in">
                {items.keyfeatures.map((items) => {
                  return (
                    <li className="font-medium text-base ">
                      {toTitleCase(items)}
                    </li>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="font-roboto bg-gray pt-5 mb-1 sm:mb-10 pb-5">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h1 className="font-semibold text-lg text-center capitalize">
            technical specifications
          </h1>
          <p className="font-normal text-base text-center">
            Measurement items specification and product information
          </p>
          <h1 className="font-semibold text-lg capitalize">
            product Measurement
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mb-10">
        <div className="md:w-10/12 rounded bg-gray flex flex-col itesm-center justify-center">
          {items.product.map((item, index) => {
            return (
              <div className="">
                <div
                  onClick={() => setToggle(!toggle)}
                  className="font-semibold text-base capitalize w-full bg-[#F9EECE] hover:bg-gray p-1 pl-6 cursor-pointer flex items-center justify-between pr-10"
                >
                  <h1>{item.name}</h1>
                  {toggle ? (
                    <IoIosArrowUp size={30} />
                  ) : (
                    <IoIosArrowDown size={30} />
                  )}
                </div>
                <div>
                  {toggle ? (
                    <div className="flex flex-wrap pl-6 pb-3  border-t w-full hover:bg-lightgray hover:text-black">
                      {item.details.map((details) => {
                        return (
                          <div className="w-[250px] mt-2 m-1">
                            <h1 className="capitalize font-semibold text-sm opacity-85">
                              {details.name}
                            </h1>
                            <p className="pt-1 font-normal text-sm">
                              {details.item}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KitchenApp;
