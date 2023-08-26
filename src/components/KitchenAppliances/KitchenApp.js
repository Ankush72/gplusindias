import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";


const KitchenApp = () => {
    const [showImg, setShowImg] = useState("");
    const [showMore, setShowMore] = useState(false);
    const [keyfeature, setKeyFeature] = useState(true);  
   

    const {state} = useLocation()
    const {items = {}} = state 
  
  
    const showMoreText = (item) => {
      if (item.length <= 258) return item;
      if (item.length > 258 && showMore) {
        return (
          <>
            <p>{item}<button className="ml-3 font-medium text-base text-orange" onClick={() => setShowMore(false)}>Show Less</button></p>
          </>
        );
      }
      if(item.length > 258){
        return <>
          <p>{item.slice(0,258)} ... <button className="font-medium text-base text-orange"
          onClick={() => setShowMore(true)}>
            Show More
        </button></p>
          
        </>
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
  return (
    <div className="pt-[150px] min-h-screen mb-10 flex flex-col md:flex-row justify-center md:justify-around w-full font-roboto">
    <div className="w-5/6 md:w-2/6 flex justify-center md:justify-around mt-10 md:mt-0">
      <div className='space-y-3'>
      <img
        className="w-[300px] h-[300px]  rounded-xl border"
        src={showImg ? showImg : items?.imgurl && items?.imgurl[0]}
        alt=""
      />
       <div className='flex flex-col space-x-3'>
        <div>
          <h1 className='font-semibold text-lg underline'> Images ({items.imgurl.length})</h1>
        </div>
        <div className='flex mt-3 space-x-3'>
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
      
    </div>
    <div className="flex flex-col w-full md:w-1/2  pr-10 pl-10 md:pl-0">
      <h1 className="font-bold text-2xl capitalize">{items.name}</h1>
      {/* <h1 className="font-bold text-xl mt-5">{datas.descriptionName}</h1> */}
      <p className="font-normal text-base mt-5">{showMoreText(items.description)}</p>
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
  )
}

export default KitchenApp