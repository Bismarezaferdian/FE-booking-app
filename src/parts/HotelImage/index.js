import React, { useEffect, useState } from "react";

import {
  HotelImg,
  HotelImgContainer,
  HotelImgWrapp,
  ImgWrapp,
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
          <ImgWrapp key={index}>
            <HotelImg src={item} />
          </ImgWrapp>
        ))}
      </HotelImgContainer>
    </HotelImgWrapp>
  );
};

export default HotelImage;
