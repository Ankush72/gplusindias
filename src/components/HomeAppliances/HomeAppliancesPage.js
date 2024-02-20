import React, { useEffect, useState } from "react";
import "./HomeAppliances.css";
import HomeAppliancesCart from "./HomeAppliancesCart";
import { useParams } from "react-router-dom";
import HomeAppliancesObj from "./HomeAppliancesObj";

const HomeAppliancesDetails = () => {

  const { id } = useParams();
  const [productItem, setProductItem] = useState(null);


  console.log(productItem);

  useEffect(() => {
    function checkProductId(){
      console.log(HomeAppliancesObj)
      if (HomeAppliancesObj && HomeAppliancesObj.length > 0) {
        const item = HomeAppliancesObj.find(item => String(item.id) === String(id));
        console.log("Hello", item)
        if (item) {
          setProductItem(item);
        }
      }
  
    };
    checkProductId();
  }, [id]);

  return (
    <>
      <div className="pt-[100px]">
        <HomeAppliancesCart datas={productItem} />
      </div>
    </>
  );
};

export default HomeAppliancesDetails;
