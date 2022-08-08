import React from "react";
import Part from "../../assets/images/property-part.jpg";
import Part2 from "../../assets/images/property-part2.jpg";
import Part3 from "../../assets/images/property-part3.jpg";
import Part4 from "../../assets/images/property-part4.jpg";
import {
  PartCity,
  PartContainer,
  PartImg,
  PartItems,
  PartPrice,
  PartRating,
  PartTitle,
  PartTitleWrapp,
  PropertySec,
  Rating,
  RatingWrapp,
} from "./PartStyle";

const PropertyPart = () => {
  return (
    <PropertySec>
      <PartContainer>
        <PartItems>
          <PartImg src={Part} />
          <PartTitleWrapp>
            <PartTitle> Home Stay Angrek</PartTitle>
            <PartCity>Bogor</PartCity>
            <PartPrice>starting from Rp 99.000</PartPrice>
            <RatingWrapp>
              <PartRating>9.8 </PartRating>
              <Rating>Exellent</Rating>
            </RatingWrapp>
          </PartTitleWrapp>
        </PartItems>
        <PartItems>
          <PartImg src={Part2} />
          <PartTitleWrapp>
            <PartTitle>Villa Alana</PartTitle>
            <PartCity>Bogor</PartCity>
            <PartPrice>starting from Rp 99.000</PartPrice>
            <RatingWrapp>
              <PartRating>9.8 </PartRating>
              <Rating>Exellent</Rating>
            </RatingWrapp>
          </PartTitleWrapp>
        </PartItems>
        <PartItems>
          <PartImg src={Part3} />
          <PartTitleWrapp>
            <PartTitle>Home Stay Pinus</PartTitle>
            <PartCity>Bogor</PartCity>
            <PartPrice>starting from Rp 99.000</PartPrice>
            <RatingWrapp>
              <PartRating>9.8 </PartRating>
              <Rating>Exellent</Rating>
            </RatingWrapp>
          </PartTitleWrapp>
        </PartItems>
        <PartItems>
          <PartImg src={Part4} />
          <PartTitleWrapp>
            <PartTitle>Hotels Amanda</PartTitle>
            <PartCity>Bogor</PartCity>
            <PartPrice>starting from Rp 99.000</PartPrice>
            <RatingWrapp>
              <PartRating>9.8 </PartRating>
              <Rating>Exellent</Rating>
            </RatingWrapp>
          </PartTitleWrapp>
        </PartItems>
      </PartContainer>
    </PropertySec>
  );
};

export default PropertyPart;
