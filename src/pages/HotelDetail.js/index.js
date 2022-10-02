import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Mail from "../../components/Mail.js";
import Navbar from "../../components/Navbar";
import PropertyPart from "../../components/PropertyPart";
import HotelDesc from "../../parts/HotelDesc";
import HotelImage from "../../parts/HotelImage";
import { HotelContent, TitleDetail } from "./HotelDetailStyle";

const Hotel = () => {
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

  // console.log(Image);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <HotelContent>
        <HotelImage Image={Image} />
        <HotelDesc Image={Image} />
        <TitleDetail>Other Hotel</TitleDetail>
        <PropertyPart />
        <Mail />
      </HotelContent>
      <Footer />
    </div>
  );
};

export default Hotel;
