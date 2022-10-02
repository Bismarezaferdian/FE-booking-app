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

const Home = () => {
  // const navigate = useNavigate();
  // const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [navigate, user]);

  return (
    <>
      <Navbar />
      <Header />
      <HomeCountainer>
        <Feature />
        <HomeTitle>Browse by property type</HomeTitle>
        <PropertyList />
        <HomeTitle>Homes gues loved </HomeTitle>
        <PropertyPart />
      </HomeCountainer>
      <Mail />
      <Footer />
    </>
  );
};

export default Home;
