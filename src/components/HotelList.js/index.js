import { useContext } from "react";
import { AuthContext } from "../../context/AuthContex";
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

const HotelList = ({ item }) => {
  const { user } = useContext(AuthContext);
  const price = item.cheapestPrice;

  const priceDiscount = (price * 10) / 100;
  const priceCount = price - priceDiscount;

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  return (
    <HotelCard>
      <HotelImgWrapp>
        <HotelImg src={item.photo[0]} />
      </HotelImgWrapp>
      <HotelDescWrapp>
        <HotelDetailContainer>
          <HotelTitleWrapp>
            <HotelDetailTitle to={user ? `/hotels/${item._id}` : "/login"}>
              {item.name}
            </HotelDetailTitle>
            {/* <HotelDetailTitle to={handleLink}>{item.name}</HotelDetailTitle> */}
          </HotelTitleWrapp>
          <HotelDetailContent>
            <HotelDesc>
              <HotelLocation>{item.address}</HotelLocation>
              {item.rating && (
                <div style={{ margin: "2px " }}>
                  <HotelRating>{item.rating}</HotelRating>
                  <SpanRating>good</SpanRating>
                </div>
              )}
              <HotelRating>5.4</HotelRating>
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
            <HotelPriceDisc>{rupiah(item.cheapestPrice)}</HotelPriceDisc>
            <HotelPrice>
              <SpanIdr>idr</SpanIdr>
              {rupiah(priceCount)}
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
