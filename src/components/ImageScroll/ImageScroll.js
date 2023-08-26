import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageScroll = ({children}) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };
  return (
    <div>
        <Slider {...settings}>
            {children}    
        </Slider>
    </div>
  )
}

export default ImageScroll