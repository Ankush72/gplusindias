import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ImageScroll from "../ImageScroll/ImageScroll";
// import ImageHover from "../ImageHover/ImageHover";

const HomeAppliancesCart = ({ datas }) => {
  // const [items,setItems] = useState(datas)
  // console.log(datas)
  const {id} = useParams()
  // const OnMouseEnter = (items) =>{
  //   const item = items.imgurl.map((img)=>{
  //     return setItems(img)
  //   })
  //   console.log("Hello",item)
  // }

  // const OnMouseLeave = () =>{

  // }

  return (
    <div className="min-h-full mb-[100px]  font-roboto">
      <div className="h-full flex flex-col">
        <div className="">
        <ImageScroll>
        {datas?.banner &&
          datas?.banner.map((item)=>{
            return <>
              <img className="w-full opacity-90" src={item} alt={datas?.name} />
            </>
          })
        }

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
            to="/luxury-appliances"
            className="hover:text-orange opacity-75 hover:underline"
          >
            luxury-appliances
          </Link>
          <span className="ml-2 mr-2">
            <IoIosArrowForward />
          </span>
          <span>{datas?.name}</span>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-10">
        {datas?.data && datas?.data.map((item) => {
          // console.log(item)
          return (
            <Link
              key={item.id}
              to={`/luxury-appliances/${id}/${item.id}/${item.route}`}
              state={{ items: item }}
              className="flex flex-col w-[300px] flex items-center justify-center shadow m-4 pl-4 pr-4 rounded"
            >
              {/* <div>
                {
                  item.imgurl.map((item,index)=>{
                    console.log(item)
                    return <ImageHover  hoverImage={item} items={item}/>
                  })
                }
              </div> */}
              <div   className="w-full h-[270px] flex items-center overflow-hidden">
              <img className="" src={item?.imgurl[0] } alt={item?.name}/>
              </div>
              <h1  className="font-medium  text-base mt-5 h-20 flex items-center justify-center text-center  capitalize">
                {item.name}
              </h1>
              <button className="w-full text-base h-10 bg-lightblack rounded-full mb-5 text-white hover:bg-white hover:text-black hover:border">Learn More</button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeAppliancesCart;
