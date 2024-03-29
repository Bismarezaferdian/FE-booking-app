import React, { useContext, useEffect, useState } from "react";
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
import { combineStore } from "../../zustand/store.js";
import Sidebar from "../../components/Sidebar/index.jsx";

const Home = () => {
  // const { hotels, loading, error } = GetHotel();
  const { getPropertyType, updateError, errorProperty } = combineStore();

  const { properties, propertiesLoading, propertiesError } = GetProperties();
  const { mostHotel, mostHotelLoading, mostHotelError } = GetMostHotel();

  useEffect(() => {
    if (mostHotel) {
      getPropertyType(mostHotel);
    }
    if (mostHotelError) {
      updateError(mostHotelError);
    }
  }, [mostHotel, getPropertyType, updateError, mostHotelError]);

  useEffect(() => {
    combineStore.persist.rehydrate();
  }, []);

  if (mostHotelError) {
    return <div>Error: {mostHotelError.message}</div>;
  }
  // console.log(mostHotelLoading);
  console.log(mostHotel);

  return (
    <>
      {/* <Sidebar togle={togle} isOpen={isOpen} /> */}
      <Navbar />
      <Header />
      <HomeCountainer>
        <Feature />
        <PropertyList data={properties} loading={propertiesLoading} />
        <MostHotel />
        {/* <PropertyList data={mostHotel} loading={mostHotelLoading} /> */}
        {/* <PropertyPart /> */}
      </HomeCountainer>
      <Mail />
    </>
  );
};

export default Home;
