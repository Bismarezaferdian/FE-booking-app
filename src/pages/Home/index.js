import React from "react";
import Feature from "../../components/Feature";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Mail from "../../components/Mail.js";
import Navbar from "../../components/Navbar";
import PropertyList from "../../components/PropertyList";
import PropertyPart from "../../components/PropertyPart";
import { HomeCountainer, HomeTitle } from "./HomeStyle";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
