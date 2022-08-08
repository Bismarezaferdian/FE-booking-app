import React from "react";
import Hotel1 from "../../assets/images/property-hotel.jpg";
import Hotel2 from "../../assets/images/property-hotel2.jpg";
import Villa from "../../assets/images/property-villa.jpg";
import Villa2 from "../../assets/images/property-villa2.jpg";
import Villa3 from "../../assets/images/property-villa3.jpg";
import {
  PropertyContainer,
  PropertyImg,
  PropertyItems,
  PropertySec,
  PropertySubTitle,
  PropertyTitle,
  PropertyTitleWrapp,
} from "./PropertyStyle";

function PropertyList() {
  return (
    <PropertySec>
      <PropertyContainer>
        <PropertyItems>
          <PropertyImg src={Hotel1} />
          <PropertyTitleWrapp>
            <PropertyTitle>Apartement</PropertyTitle>
            <PropertySubTitle>233 Hotels</PropertySubTitle>
          </PropertyTitleWrapp>
        </PropertyItems>
        <PropertyItems>
          <PropertyImg src={Villa} />
          <PropertyTitleWrapp>
            <PropertyTitle>Villa</PropertyTitle>
            <PropertySubTitle>233 Hotels</PropertySubTitle>
          </PropertyTitleWrapp>
        </PropertyItems>
        <PropertyItems>
          <PropertyImg src={Hotel2} />
          <PropertyTitleWrapp>
            <PropertyTitle>Hotels</PropertyTitle>
            <PropertySubTitle>233 Hotels</PropertySubTitle>
          </PropertyTitleWrapp>
        </PropertyItems>
        <PropertyItems>
          <PropertyImg src={Villa2} />
          <PropertyTitleWrapp>
            <PropertyTitle>Home Private</PropertyTitle>
            <PropertySubTitle>233 Hotels</PropertySubTitle>
          </PropertyTitleWrapp>
        </PropertyItems>
        <PropertyItems>
          <PropertyImg src={Villa3} />
          <PropertyTitleWrapp>
            <PropertyTitle>Home Stays</PropertyTitle>
            <PropertySubTitle>233 Hotels</PropertySubTitle>
          </PropertyTitleWrapp>
        </PropertyItems>
      </PropertyContainer>
    </PropertySec>
  );
}

export default PropertyList;
