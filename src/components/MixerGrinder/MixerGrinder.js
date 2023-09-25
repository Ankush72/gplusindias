import React from "react";
import Mixer1 from "../image/Mixer_1.png";
import Mixer2 from "../image/Mixer_2.png";
import Mixer3 from "../image/Mixer_3.png";
import MixerBanner from "../image/Mixer Grinder 1.jpeg";
import { Link } from "react-router-dom";

const MixerGrinder = () => {
  return (
    <>
      <div className="mb-20 pl-10 pr-10 pt-20">
        <h1 className="font-bold text-4xl capitalize text-center mb-10">
          mixer grinder
        </h1>
        <div className="flex flex-wrap items-center justify-center md:justify-between space-y-2 space-x-3 md:space-x-0">
          <Link to="/small-appliances" className="p-2  w-[250px] sm:w-[300px] md:w-[350px] md:h-[400px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between">
            <img className="" src={Mixer1} alt="" />
          </Link>
          <Link to="/small-appliances" className="p-2  w-[250px] sm:w-[300px] md:w-[350px] md:h-[400px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between">
            <img className="" src={Mixer2} alt="" />
          </Link>
          <Link to="/small-appliances" className="p-2  w-[250px] sm:w-[300px] md:w-[350px] md:h-[400px] m-2 flex flex-col shadow-xl hover:bg-gray hover:text-blue rounded-lg cursor-pointer items-center justify-between">
            <img className="" src={Mixer3} alt="" />
          </Link>
        </div>
      </div>
      {/* Banner mixer grinder */}
      <div className="mt-20">
        <img className="w-full h-full" src={MixerBanner} alt="" />
      </div>
    </>
  );
};

export default MixerGrinder;
