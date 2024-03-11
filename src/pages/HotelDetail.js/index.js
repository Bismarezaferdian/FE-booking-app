import React from "react";
import Header from "../../components/Header";
import Mail from "../../components/Mail.js";
import Navbar from "../../components/Navbar";
import PropertyPart from "../../components/MostHotel/index.js";
import HotelDesc from "../../parts/HotelDesc";
import HotelImage from "../../parts/HotelImage";
import { useLocation } from "react-router-dom";
import { HotelContent, TitleDetail } from "./HotelDetailStyle";
import useFetch from "../../hooks/useFetch";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading } = useFetch(`/api/v1/hotel/find/${id}`);

  // console.log(data);

  // const Image = [
  //   {
  //     src: require("../../assets/images/hotel-detail.jpg"),
  //   },
  //   {
  //     src: require("../../assets/images/hotel-detail2.jpg"),
  //   },
  //   {
  //     src: require("../../assets/images/hotel-detail3.jpg"),
  //   },
  //   {
  //     src: require("../../assets/images/hotel-detail4.jpg"),
  //   },
  //   {
  //     src: require("../../assets/images/hotel-detail5.jpg"),
  //   },
  // ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <HotelContent>
        <HotelImage data={data.photo} />
        <HotelDesc data={data} id={id} />
        <TitleDetail>Other Hotel</TitleDetail>
        <PropertyPart />
        <Mail />
      </HotelContent>
    </div>
  );
};

export default Hotel;
