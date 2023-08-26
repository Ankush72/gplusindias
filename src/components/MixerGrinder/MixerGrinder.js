import React from "react";
import Mixer1 from "../image/Mixer 1.png";
import Mixer2 from "../image/Mixer 2.png";
import Mixer3 from "../image/Mixer 3.png";
import MixerBanner from "../image/Mixer Grinder 1.jpeg";

const MixerGrinder = () => {
  return (
    <>
      <div className="mb-20 pl-10 pr-10 pt-20">
        <h1 className="font-bold text-4xl capitalize text-center mb-10">
          mixer grinder
        </h1>
        <div className="flex flex-wrap items-center justify-center md:justify-between space-y-2 space-x-3 md:space-x-0">
          <div className="shadow-2xl rounded-lg">
            <img className="w-auto sm:w-[300px] md:w-[350px] rounded-lg" src={Mixer1} alt="" />
          </div>
          <div className="shadow-2xl rounded-lg">
            <img className="w-auto sm:w-[300px] md:w-[350px] rounded-lg" src={Mixer2} alt="" />
          </div>
          <div className="shadow-2xl rounded-lg">
            <img className="w-auto sm:w-[300px] md:w-[350px] rounded-lg" src={Mixer3} alt="" />
          </div>
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
