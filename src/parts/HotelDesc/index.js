import React from "react";
import { Bed } from "../../components/Header/HeaderStyle";
import { Smoke, Tv, Wifi } from "../../components/HotelList.js/HotelListStyle";
import {
  Bath,
  Button,
  ContentDesc,
  ContentDescTitle,
  DescContainer,
  DescSec,
  DescSubTitle,
  DescTitle,
  DescWrapp,
  FasilitasContent,
  IconDesc,
  IconWrapp,
  Idr,
  Parking,
  PerNight,
  Price,
  PriceDisc,
  PriceWrapp,
  Telephone,
  TitleContentWrapp,
  TitleWrapp,
} from "./HotelDescStyle";

const HotelDesc = () => {
  return (
    <DescSec>
      <DescContainer>
        <TitleContentWrapp>
          <TitleWrapp>
            <DescSubTitle>Hotel</DescSubTitle>
            <DescTitle>Davinci Dago Bandung</DescTitle>
            <DescSubTitle>bandung, jawa barat</DescSubTitle>
          </TitleWrapp>
          <PriceWrapp>
            <PriceDisc>Idr 860.000</PriceDisc>
            <Price>
              <Idr>idr</Idr>550.000
            </Price>
            <PerNight>1 night 1 room</PerNight>
            <Button>Booking Now</Button>
          </PriceWrapp>
        </TitleContentWrapp>
        <DescWrapp>
          <ContentDescTitle>Description</ContentDescTitle>
          <ContentDesc>
            Moritz Smart Bandung welcomes you who are looking for fun in one of
            the best places in the center of Bandung City. You will feel the
            uniqueness combined with the luxurious atmosphere from the moment
            you step into our hotel. Find more space to explore attractive
            facilities with the concept of optical illusion combined with
            monochrome colors throughout the hotel that will take you to
            different atmosphere and flexibility of the best hotel services. The
            happiest moments of life are created from first impressions &
            excitement combined with the best hospitality services. Modern style
            room with smart keyless access, comfortable bed, stylish bathroom
            and free WiFi access. At Moritz, a luxurious atmosphere exists
            throughout the hotel, including the Momo Restaurant. You will
            satisfy your appetite and taste "Pome Fever" on food & drink. Also
            enjoy the experience at Day-light Restaurant and Night-time Social
            House. The nearest airport is Husein Sastranegara International
            Airport, 6.9 km from the property.
          </ContentDesc>
        </DescWrapp>
        <DescWrapp>
          <ContentDescTitle>Fasilitas</ContentDescTitle>
          <FasilitasContent>
            <IconWrapp>
              <Bed /> <IconDesc>Double Bed</IconDesc>
            </IconWrapp>
            <IconWrapp>
              <Wifi />
              <IconDesc>Wifi</IconDesc>
            </IconWrapp>
            <IconWrapp>
              <Telephone />
              <IconDesc>Recepcionis 24 hours</IconDesc>
            </IconWrapp>
            <IconWrapp>
              <Tv />
              <IconDesc>Tv</IconDesc>
            </IconWrapp>
            <IconWrapp>
              <Smoke />
              <IconDesc>SmokingArea</IconDesc>
            </IconWrapp>

            <IconWrapp>
              <Bath />
              <IconDesc>bathroom</IconDesc>
            </IconWrapp>
            <IconWrapp>
              <Parking />
              <IconDesc> Parking area</IconDesc>
            </IconWrapp>
          </FasilitasContent>
        </DescWrapp>
      </DescContainer>
    </DescSec>
  );
};

export default HotelDesc;
