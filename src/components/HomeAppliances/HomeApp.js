import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Slider from "react-slick";
import "./HomeApp.css";
import HomeAppliancesObj from "./HomeAppliancesObj";



const HomeApp = () => {
  const [showImg, setShowImg] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [textShow, setTextShow] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [boxToggle, setBoxToggle] = useState(1);
  const { id, itemId, route } = useParams();
  const [matchedObject, setMatchedObject] = useState(null);



  // const { state } = useLocation();
  // const { items = {} } = state;

  const showMoreText = (item) => {
    if (item?.length <= 258) return item;
    if (item?.length > 258 && showMore) {
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
    if (item?.length > 258) {
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

  useEffect(()=>{
    // console.log(HomeAppliancesObj)
    const matchedItem = HomeAppliancesObj.find(item =>
      parseInt(id) === item.id &&
      parseInt(itemId) === item.data[0].id &&
      route === item.data[0].route
    );
  
    if (matchedItem) {
      console.log("Parameters matched!");
      setMatchedObject(matchedItem.data[0]);
    } else {
      console.log("Parameters didn't match!");
      setMatchedObject(null);
    }
  },[id,itemId,route])

// console.log(matchedObject)



   return (
    <>
      <div className="flex flex-col w-full h-full md:flex-row  justify-around pt-[150px] mb-20 font-roboto ">
        <div className="w-full md:w-3/6 h-full  bg-white shadow flex items-center justify-center md:justify-around sm:mt-10 md:mt-0 pl-3 m-2">
          <div className="space-y-3 flex flex-col items-center justify-center">
            <div className="w-[300px] h-[300px] ">
              <img
                className=""
                src={showImg ? showImg : matchedObject?.imgurl && matchedObject?.imgurl[0]}
                alt=""
              />
            </div>
            <div className="flex flex-col space-x-3">
              <div className="float-left">
                <h1 className="font-semibold text-lg underline ">
                  Images ({matchedObject?.imgurl?.length})
                </h1>
              </div>
              <div className=" w-[300px]  mt-5 space-x-3">
                <Slider {...settings}>
                  {matchedObject?.imgurl.map((item) => {
                    return (
                      <div key={item.id} className="border w-[100px]  h-[80px] flex items-center justify-center ">
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

        {/* <div className="flex flex-row mt-3">
                {items.imgurl.map((items, index) => (
                  <img
                    className="w-[80px] border border-lightblack rounded flex"
                    src={items}
                    alt=""
                    onMouseMove={() => setShowImg(items)}
                  />
                ))}     
              </div> */}
        <div className="flex shadow flex-col w-full md:w-4/6 rounded pr-3 sm:pr-10 pl-3 m-2 sm:pl-10 md:pl-5 pt-3 pb-3">
          <h1 className="font-bold text-xl capitalize">
            <span className="">{matchedObject?.name}</span>
          </h1>
          <div className="font-normal text-base mt-5 flex  flex-col  justify-center">
            <span className="font-normal mr-10">
              {showMoreText(matchedObject?.description)}
            </span>
          </div>
          <div className="mt-5 ">
            <h1
              className="font-bold text-base bg-gray1 rounded-t p-2 flex items-center cursor-pointer "
              onClick={() => setTextShow(!textShow)}
            >
              {textShow ? (
                <IoMdArrowDropup size={30} />
              ) : (
                <IoMdArrowDropdown size={30} />
              )}
              {matchedObject?.heading}
            </h1>
            {textShow ? (
              <div className="flex flex-col bg-gray1 pl-5 pb-5 rounded-b  transition duration-150 ease-out hover:ease-in">
                {matchedObject?.keyfeatures.map((items) => {
                  return (
                    <li className="font-normal text-base">
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
      <div className="flex items-center justify-center pb-20 font-roboto rounded">
        <div className="w-full sm:w-10/12 flex flex-col items-center justify-center shadow-xl rounded bg-gray">
          {matchedObject?.product &&
            matchedObject?.product.map((item) => {
              return (
                <div className="w-full">
                  {/* <div>{item.name}</div> */}
                  <div className="flex  w-full h-[200px] pl-7">
                    {item.box &&
                      item?.box.map((box, index) => {
                        return (
                          <div className="pt-10 flex flex-col ">
                            <div className="flex">
                              <button disabled={box.disable}
                                style={{
                                  backgroundColor :
                                    boxToggle === index ? "#F9EECE" : "#F6F8FA",visibility: box.hidden
                                }}
                                className="border capitalize hover:bg-[#F9EECE] font-semibold text-base flex  pl-3 pr-3 rounded m-1 sm:m-2  h-8 flex items-center justify-center"
                                onClick={() => setBoxToggle(index)}
                              >
                                {box.boxname}
                              </button>
                            </div>
                            <div
                              className="flex w-auto  mt-10 pt-7 flex-wrap left-[20px] sm:left-[100px] md:left-[140px]"
                              style={{ position: "absolute" }}
                            >
                              {boxToggle === index &&
                                box.boxsize.map((boxitem) => {
                                  return (
                                    <>
                                      <div>
                                        <div className="flex flex-col w-[50px] sm:w-[100px]  lg:w-[235px] xl:w-[250px] m-3">
                                          <h1 className="font-semibold capitalize">
                                            {boxitem.name}
                                          </h1>
                                          <h1 className="pt-2">
                                            {boxitem.size}
                                          </h1>
                                        </div>
                                      </div>
                                    </>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  <div className="w-full  flex flex-col">
                    {item.variationsDetails && item?.variationsDetails.map((details) => {
                      return (
                        <div className="flex w-full flex-wrap">
                          <div className="flex flex-col w-full">
                            <h1
                              className="font-semibold text-base capitalize w-full bg-[#F9EECE] p-1 pl-6 cursor-pointer flex items-center justify-between pr-10"
                              onClick={() => setToggle(!toggle)}
                            >
                              {details.name}
                              {toggle ? (
                                <IoIosArrowUp size={30} />
                              ) : (
                                <IoIosArrowDown size={30} />
                              )}
                            </h1>

                            {toggle ? (
                              <div className="flex flex-wrap pl-3 pb-3 border-t w-full hover:bg-lightgray hover:text-black">
                                {details.details &&
                                  details.details.map((item) => {
                                    return (
                                      <div className="w-[250px] mt-2 m-3">
                                        <h1 className="capitalize font-semibold text-sm opacity-85">
                                          {item.name}
                                        </h1>
                                        <p className="pt-1 font-normal text-sm">
                                          {item.details}
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
                  <div >
                    {item?.SpecialFeatures &&  item?.SpecialFeatures.map((val) => {
                      return (
                        <div className="">
                          <div className="font-semibold text-base capitalize w-full bg-[#F9EECE] p-2 pl-6 cursor-pointer flex items-center justify-between pr-10" onClick={() => setToggle(!toggle)}>
                          <h1>{val.name}</h1>
                          {toggle ? (
                                <IoIosArrowUp size={30} />
                              ) : (
                                <IoIosArrowDown size={30} />
                              )}
                          </div>
                          {
                            toggle ? <div className="pl-10 pt-3 pb-10 border-t">
                            {
                              val.details.details.map((item)=>{
                                return(
                                    <ul className="list-disc">
                                      <li className="pt-1 font-normal text-sm">{item}</li>
                                    </ul>
                                  )
                              })
                            }                       
                             </div> :""
                          }
                         
                         <div>
                         
                         </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* <div className="w-full">
        {datas.data.map((item, index) => {
          return (
            <>
              <div
                key={item.id}
                className="flex w-full  justify-around pt-[30px] pl-10 mb-20 border-t"
                style={{ flexDirection: item.diraction }}
              >
                <div className="w-full md:2/6 h-4/6  flex  justify-center">
                  <div>
                    {item.imgurl.map((items, index) => (
                      <img
                        className="w-[80px]"
                        src={items}
                        alt=""
                        onMouseMove={(id) => onHandleChange(items, id)}
                      />
                    ))}
                  </div>
                  <img
                    className="w-[300px]"
                    src={showImgs ? showImgs : item.imgurl && item.imgurl[0]}
                    alt=""
                  />
                </div>
                <div className="w-full md:w-5/6 pl-10 md:pl-0  pt-20 md:pt-0 flex flex-col  justify-center">
                  <h1 className="font-bold text-xl capitalize">
                    <span className="w-96"></span> {item.name}
                  </h1>
                  <div className="font-normal text-base mt-5 flex  flex-col  justify-center">
                    <span className="font-normal mr-10">
                      {showMoreText(item.description)}
                    </span>
                  </div>
                  <div className="flex flex-col capitalize mt-5">
                    <h1
                      className="font-bold text-base bg-gray1 p-2 flex items-center cursor-pointer "
                      onClick={() => setTextShow(!textShow)}
                    >
                      {textShow ? (
                        <IoMdArrowDropup size={30} />
                      ) : (
                        <IoMdArrowDropdown size={30} />
                      )}{" "}
                      {datas.heading}
                    </h1>

                    {
                      <div className="flex flex-col bg-gray1 pl-5 pb-5 rounded transition duration-150 ease-out hover:ease-in">
                        {item.keyfeatures.map((items) => {
                          return (
                            <li className="font-normal text-base capitalize">
                              {toTitleCase(items)}
                            </li>
                          );
                        })}
                      </div>
                    }
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div> */}
    </>
  );
}


export default HomeApp;
