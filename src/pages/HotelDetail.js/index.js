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
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <HotelContent>
        <HotelImage />
        <HotelDesc />
        <TitleDetail>Other Hotel</TitleDetail>
        <PropertyPart />
        <Mail />
      </HotelContent>
      <Footer />
    </div>
  );
};

export default Hotel;
