import React from "react";
import { Bed } from "../../components/Header/HeaderStyle";
import { Smoke, Tv, Wifi } from "../../components/HotelList.js/HotelListStyle";
import HotelRoom from "../HotelRoom";
import {
  Bath,
  Button,
  ContentDesc,
  ContentTitle,
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

const HotelDesc = ({ data, id }) => {
  const price = data.cheapestPrice;

  const priceDiscount = (price * 10) / 100;
  const priceCount = price - priceDiscount;

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <DescSec>
      <DescContainer>
        <TitleContentWrapp>
          <TitleWrapp>
            <DescSubTitle>{data.type}</DescSubTitle>
            <DescTitle>{data.title}</DescTitle>
            <DescSubTitle>
              {data.address}, {data.city}, {data.distance} mil from bandara
            </DescSubTitle>
          </TitleWrapp>
          <PriceWrapp>
            <PriceDisc>Idr {rupiah(data.cheapestPrice)}</PriceDisc>
            <Price>
              <Idr>idr</Idr>
              {rupiah(priceCount)}
            </Price>
            <PerNight>1 night 1 room</PerNight>
            <Button href="#reservasi">Booking Now</Button>
          </PriceWrapp>
        </TitleContentWrapp>
        <DescWrapp>
          <ContentTitle>Description</ContentTitle>
          <ContentDesc>
            {data.desc}
            {/* <button onClick={handleClick}>....</button> */}
          </ContentDesc>
        </DescWrapp>
        <DescWrapp>
          <ContentTitle>Fasilitas</ContentTitle>
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
        <HotelRoom id={id} hotel={data} />
      </DescContainer>
    </DescSec>
  );
};

export default HotelDesc;
