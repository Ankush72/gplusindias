import React from "react";
import Mixer1 from "../image/mixer.png";
import ironBox from "../image/iron box.png";
import riceCooker from "../image/rice cooker.png";
import wetGrinder from "../image/wet grinder (1).png"
import geyser from "../image/geyser.png"
import gasStove from "../image/gas stove.png"


import { Link } from "react-router-dom";

const MixerGrinder = () => {
  return (
    <>
      <div className="pb-5 pl-10 pr-10 pt-5 bg-[#d9dada]">
        <div className="flex flex-wrap items-center justify-center md:justify-between space-y-2 space-x-2 md:space-x-0">
          <Link to="/small-appliances" className="p-2  w-[190px] flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between">
            <img className="w-[200px]" src={Mixer1} alt="" />
            <h1 className="font-bold text-base  uppercase text-center tracking-wide">Mixer grinder</h1>
            <h1 className="font-medium text-sm uppercase text-center">850watts</h1>
          </Link>
          <Link to="/small-appliances" className="p-2  w-[190px] flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between">
            <img className="w-[200px]" src={wetGrinder} alt="" />
            <h1 className="font-bold text-base uppercase text-center tracking-wide">wet grinder</h1>
            <h1 className="font-medium text-sm uppercase text-center">2hp motor</h1>
          </Link>
          <Link to="/small-appliances" className="p-2  w-[190px] flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between">
            <img className="w-[200px]" src={riceCooker} alt="" />
            <h1 className="font-bold text-base uppercase text-center tracking-wide">rice cooker</h1>
            <h1 className="font-medium text-sm uppercase text-center">Electric</h1>
          </Link>
          <Link to="/small-appliances" className="p-2  w-[190px] flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between">
            <img className="w-[200px]" src={gasStove} alt="" />
            <h1 className="font-bold text-base uppercase text-center tracking-wide">gas stove</h1>
            <h1 className="font-medium text-sm uppercase text-center">Glass top 4 burner</h1>
          </Link>
          <Link to="/small-appliances" className="p-2  w-[190px] flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between">
            <img className="w-[200px]" src={geyser} alt="" />
            <h1 className="font-bold text-base uppercase text-center tracking-wide">Geyser</h1>
            <h1 className="font-medium text-sm uppercase text-center">15L</h1>
          </Link>
          <Link to="/small-appliances" className="p-2  w-[190px] flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between">
            <img className="w-[200px]" src={ironBox} alt="" />
            <h1 className="font-bold text-base uppercase text-center tracking-wide">Iron box</h1>
            <h1 className="font-medium text-sm uppercase text-center">750watts</h1>
          </Link>
        </div>
      </div>
      
    </>
  );
};

export default MixerGrinder;
