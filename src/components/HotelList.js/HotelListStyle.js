import { FaCalendarAlt, FaSmoking, FaTv, FaWifi } from "react-icons/fa";
import styled from "styled-components";

export const Wifi = styled(FaWifi)`
  color: #000;
  margin-right: 8px;
`;

export const Smoke = styled(FaSmoking)`
  margin-right: 8px;
`;

export const Tv = styled(FaTv)`
  margin-right: 8px;
`;

export const DateHotel = styled(FaCalendarAlt)`
  color: #000;
  margin-right: 8px;
`;

export const HotelCard = styled.div`
  display: flex;
  border: 2px solid gray;
  /* border: none; */
  margin-left: 10px;
  border-radius: 4px;

  &:nth-child(1) {
    margin-top: 30px;
  }
  /* background: #e0e0e0;
  box-shadow: -31px -31px 61px #bebebe, 31px 31px 61px #ffffff; */
`;

export const HotelImgWrapp = styled.div`
  padding: 10px;
`;

export const HotelImg = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
`;

export const HotelDescWrapp = styled.div`
  /* padding: 32px 12px; */
`;

export const HotelTitleWrapp = styled.div`
  margin: 30px 0 10px 0;
`;

export const HotelDetailTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const HotelDetailContainer = styled.div`
  display: flex;
`;

export const HotelDetailContent = styled.div`
  position: relative;
`;

export const HotelDesc = styled.div``;

export const HotelLocation = styled.p`
  margin-bottom: 12px;
  text-transform: capitalize;
  opacity: 0.6;
`;

export const HotelRating = styled.button`
  font-size: 12px;
  border: none;
  margin-bottom: 14px;
  color: #fff;
  background-color: #2155cd;
  padding: 6px;
  border-radius: 8px;
  border-top-left-radius: 2px;
  text-align: center;
`;

export const SpanRating = styled.span`
  font-size: 18px;
  margin-left: 4px;
  color: #2155cd;
`;

export const HotelFeatureDesc = styled.div`
  margin-bottom: 14px;
  text-transform: capitalize;
  white-space: nowrap;
`;

export const SpanDesc = styled.span`
  margin: 0 4px 0 4px;
  /* opacity: 0.6; */
  font-size: 14px;
  color: #06623b;
  gap: 8px;
`;

export const HotelIcon = styled.span`
  /* margin-right: 8px; */
  /* padding-right: 12px; */
`;

export const HotelFeatureIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HotelPriceWrapp = styled.div`
  position: absolute;
  transform: translate(290px, 34px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-start;
  margin-top: 20px;
`;

export const HotelDiscCard = styled.div`
  background-color: #eb1d36;
  color: #ffff;
  padding: 2px 8px 2px 10px;
  border-radius: 8px;
  border-bottom-right-radius: 2px;
`;

export const HotelPriceDisc = styled.p`
  margin-top: 8px;
  text-transform: uppercase;
  text-decoration: line-through;
  opacity: 0.6;
`;

export const HotelPrice = styled.p`
  margin-top: 2px;
  text-transform: uppercase;
  color: #eb1d36;
`;

export const SpanIdr = styled.span`
  font-size: 12px;
  margin-right: 4px;
`;

export const HotelPerNight = styled.p`
  font-size: 12px;
  margin-top: 2px;
  opacity: 0.6;
`;

export const HotelDescCancel = styled.p`
  font-size: 14px;
  color: #06623b;
`;
