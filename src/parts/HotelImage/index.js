import React from "react";

import {
  HotelImg,
  HotelImgContainer,
  HotelImgWrapp,
  ImgWrapp,
} from "./ImgStyle";

const HotelImage = ({ Image }) => {
  return (
    <HotelImgWrapp>
      <HotelImgContainer>
        {Image.map((item, index) => (
          <ImgWrapp key={index}>
            <HotelImg src={item.src} />
          </ImgWrapp>
        ))}
      </HotelImgContainer>
    </HotelImgWrapp>
  );
};

export default HotelImage;
