import React from "react";

const YouTube = () => {
  return (
    <div className="flex items-center justify-center pb-3 pl-2 sm:pl-0 pr-2 sm:pr-2 bg-[#d9dada]">
      <iframe className="w-full h-[200px] sm:h-[500px]"
        
        src="https://www.youtube.com/embed/_3-lnq0jTvM?si=mKixrUz9FoybV4WR"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      
      ></iframe>{" "}
    </div>
  );
};

export default YouTube;
