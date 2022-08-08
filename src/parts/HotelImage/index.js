import React from "react";

import {
  HotelImg,
  HotelImgContainer,
  HotelImgWrapp,
  ImgWrapp,
} from "./ImgStyle";

const HotelImage = () => {
  const Image = [
    {
      src: require("../../assets/images/hotel-detail.jpg"),
    },
    {
      src: require("../../assets/images/hotel-detail2.jpg"),
    },
    {
      src: require("../../assets/images/hotel-detail3.jpg"),
    },
    {
      src: require("../../assets/images/hotel-detail4.jpg"),
    },
    {
      src: require("../../assets/images/hotel-detail5.jpg"),
    },
  ];

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
