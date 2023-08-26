import React from "react";
import "./HomeAppliances.css";

import HomeAppliancesCart from "./HomeAppliancesCart";
import { useLocation } from "react-router-dom";

const HomeAppliancesDetails = () => {
  const { state } = useLocation();
  const { HomeAppliances = {} } = state;

  return (
    <>
      <div className="pt-[100px]">
        <HomeAppliancesCart datas={HomeAppliances}/>
      </div>
    </>
  );
};

export default HomeAppliancesDetails;
