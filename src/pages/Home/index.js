import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Mail from "../../components/Mail.js";
import Navbar from "../../components/Navbar";
import PropertyList from "../../components/PropertyList";
import PropertyPart from "../../components/PropertyPart";
import { AuthContext } from "../../context/AuthContex";
import { HomeCountainer, HomeTitle } from "./HomeStyle";
import useFetch from "../../hooks/useFetch.js";
import { GetHotel } from "../../hooks/fetchApi.js";

const Home = () => {
  const { hotels, loading, error } = GetHotel();

  return (
    <>
      <Navbar />
      <Header />
      <HomeCountainer>
        <Feature />
        <PropertyList />
        <PropertyPart />
      </HomeCountainer>
      <Mail />
      <Footer />
    </>
  );
};

export default Home;
