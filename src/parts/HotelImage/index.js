import React, { useEffect, useState } from "react";

import {
  HotelImg,
  HotelImgContainer,
  HotelImgWrapp,
  ImgWrapp,
  WrappContent,
} from "./ImgStyle";

const HotelImage = ({ data }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(data);
  }, [data]);

  return (
    <HotelImgWrapp>
      <HotelImgContainer>
        {images?.slice(0, 3).map((item, index) => (
          <div key={index}>
            <HotelImg src={item} />
          </div>
        ))}
      </HotelImgContainer>
    </HotelImgWrapp>
  );
};

export default HotelImage;
