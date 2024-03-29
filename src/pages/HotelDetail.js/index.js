import React from "react";
import Header from "../../components/Header";
import Mail from "../../components/Mail.js";
import Navbar from "../../components/Navbar";
import HotelDesc from "../../parts/HotelDesc";
import HotelImage from "../../parts/HotelImage";
import { useLocation } from "react-router-dom";
import { HotelContent, TitleDetail } from "./HotelDetailStyle";
import MostHotel from "../../components/MostHotel/index.js";
import { GetHotelWithId } from "../../hooks/fetchApi.js";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { hotel, hotelLoading, hotelError } = GetHotelWithId(id);

  if (hotelError) {
    return (
      <>
        <h1>Something went wrong !</h1>
      </>
    );
  }
  return (
    <div>
      {hotelLoading ? (
        <div>
          <h1>is Loading</h1>
        </div>
      ) : (
        <>
          <Navbar />
          <Header type="list" />
          <HotelContent>
            <HotelImage data={hotel?.photo} />
            <HotelDesc data={hotel} id={id} />
            <TitleDetail>Other Hotel</TitleDetail>
            <MostHotel />
            <Mail />
          </HotelContent>
        </>
      )}
    </div>
  );
};

export default Hotel;
