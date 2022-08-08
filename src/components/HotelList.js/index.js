import React from "react";
import Hotel from "../../assets/images/hotel-bandung2.jpg";
import {
  DateHotel,
  HotelCard,
  HotelDesc,
  HotelDescCancel,
  HotelDescWrapp,
  HotelDetailContainer,
  HotelDetailContent,
  HotelDetailTitle,
  HotelDiscCard,
  HotelFeatureDesc,
  HotelFeatureIcon,
  HotelIcon,
  HotelImg,
  HotelImgWrapp,
  HotelLocation,
  HotelPerNight,
  HotelPrice,
  HotelPriceDisc,
  HotelPriceWrapp,
  HotelRating,
  HotelTitleWrapp,
  Smoke,
  SpanDesc,
  SpanIdr,
  SpanRating,
  Tv,
  Wifi,
} from "./HotelListStyle";

const HotelList = () => {
  return (
    <HotelCard>
      <HotelImgWrapp>
        <HotelImg src={Hotel} />
      </HotelImgWrapp>
      <HotelDescWrapp>
        <HotelTitleWrapp>
          <HotelDetailTitle>Hotel Davinci Dago Bandung</HotelDetailTitle>
        </HotelTitleWrapp>
        <HotelDetailContainer>
          <HotelDetailContent>
            <HotelDesc>
              <HotelLocation>Bandung, jawa barat</HotelLocation>
              <HotelRating>4.5</HotelRating>
              <SpanRating>good</SpanRating>
              <HotelFeatureDesc>
                <SpanDesc>
                  <Wifi />
                  free wifi
                </SpanDesc>
                <SpanDesc>
                  <DateHotel />
                  free cancelation
                </SpanDesc>
              </HotelFeatureDesc>
              <HotelFeatureIcon>
                <HotelIcon>
                  <Smoke />
                </HotelIcon>
                <HotelIcon>
                  <DateHotel />
                </HotelIcon>
                <HotelIcon>
                  <Wifi />
                </HotelIcon>
                <HotelIcon>
                  <Tv />
                </HotelIcon>
              </HotelFeatureIcon>
            </HotelDesc>
          </HotelDetailContent>
          <HotelPriceWrapp>
            <HotelDiscCard>Disc 10% off</HotelDiscCard>
            <HotelPriceDisc>idr 186.000</HotelPriceDisc>
            <HotelPrice>
              <SpanIdr>idr</SpanIdr>540.000
            </HotelPrice>
            <HotelPerNight>1 night 1 room</HotelPerNight>
            <HotelDescCancel>free cancelation</HotelDescCancel>
          </HotelPriceWrapp>
        </HotelDetailContainer>
      </HotelDescWrapp>
    </HotelCard>
  );
};

export default HotelList;
