import React from "react";
import "./KitechenAppliancesDetails.css"
import KitchenAppliancesCart from "./KitchenAppliancesCart";
import { useLocation } from "react-router-dom";

const KitchenAppliancesDetails = () => {

  const {state} = useLocation()
  const {smallAppliances = {}} = state 


  return (
    <>
    <div>
      <KitchenAppliancesCart datas={smallAppliances} />
    </div>
   
    </>
  );
};

export default KitchenAppliancesDetails;
