import React,{useState} from 'react'

const ImageHover = ({hoverImage,items}) => {
    const [hover, setHover] = useState(false);
    return (
      <div
        style={{ width: "200px", height: "200px" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? (
          <img src={items[0]} alt="" />
        ) : (
          <img src={hoverImage} alt="" />
        )}
      </div>
    );
}

export default ImageHover