import React, { useEffect, useState } from "react";
import "./KitechenAppliancesDetails.css"
import KitchenAppliancesCart from "./KitchenAppliancesCart";
import { useParams } from "react-router-dom";
import KitchenAppObj from "./KitchenAppliancesObj";

const KitchenAppliancesDetails = () => {

  // const {state} = useLocation()
  // const {smallAppliances = {}} = state 
  const {id} = useParams()
  const [productItem, setProductItem] = useState(null);




  useEffect(()=>{
     function checkProductId(){
      // console.log(HomeAppliancesObj)
      if (KitchenAppObj && KitchenAppObj.length > 0) {
        const item = KitchenAppObj.find(item => String(item.id) === String(id));
        console.log("Hello", item)
        if (item) {
          setProductItem(item);
        }
      }
    };
    checkProductId();
  },[id])

  return (
    <>
    <div>
      <KitchenAppliancesCart datas={productItem} />
    </div>
   
    </>
  );
};

export default KitchenAppliancesDetails;
