import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Mail from "../../components/Mail.js";
import Navbar from "../../components/Navbar";
import PropertyList from "../../components/PropertyList";
import { AuthContext } from "../../context/AuthContex";
import { HomeCountainer, HomeTitle } from "./HomeStyle";
import useFetch from "../../hooks/useFetch.js";
import { GetHotel, GetProperties, GetMostHotel } from "../../hooks/fetchApi.js";
import MostHotel from "../../components/MostHotel/index.js";

const Home = () => {
  const { hotels, loading, error } = GetHotel();

  const { properties, propertiesLoading, propertiesError } = GetProperties();
  const { mostHotel, mostHotelLoading, mostHotelError } = GetMostHotel();

  // console.log(mostHotelLoading);
  // console.log(mostHotel);
  return (
    <>
      <Navbar />
      <Header />
      <HomeCountainer>
        <Feature />
        <PropertyList data={properties} loading={propertiesLoading} />
        <MostHotel data={mostHotel} loading={mostHotelLoading} />
        {/* <PropertyList data={mostHotel} loading={mostHotelLoading} /> */}
        {/* <PropertyPart /> */}
      </HomeCountainer>
      <Mail />
    </>
  );
};

export default Home;
