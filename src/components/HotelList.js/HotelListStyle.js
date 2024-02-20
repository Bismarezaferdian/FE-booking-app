import { FaCalendarAlt, FaSmoking, FaTv, FaWifi } from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

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
  align-items: center;
  border: 1px solid gray;
  /* border: none; */
  /* margin: 30px 10px; */
  margin: 15px 0;
  gap: 10px;
  width: 100%;
  border-radius: 4px;
  /* justify-content: center; */
  /* align-items: center; */

  &:nth-child(1) {
    margin-top: 0px;
  }
  /* background: #e0e0e0;
  box-shadow: -31px -31px 61px #bebebe, 31px 31px 61px #ffffff; */
`;

export const HotelDescWrapp = styled.div`
  padding: 20px 12px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 8px 12px;
  }
  @media screen and (max-width: 480px) {
    padding: 8px 12px;
  }
`;

export const HotelImgWrapp = styled.div`
  /* padding: 10px; */
  width: 240px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  /* overflow: hidden; */

  /* max-width: 300px; */
  /* max-height: 300px; */
  padding: 8px;
  @media screen and (max-width: 768px) {
    /* margin: 10px; */
    min-height: 180px;
    width: 120px;
  }
  @media screen and (max-width: 480px) {
    min-height: 100px;
    width: 120px;
    margin-left: 8px;
  }
`;

export const HotelImg = styled.img`
  /* width: 300px;
  height: 200px; */
  /* background: green; */
  /* background: red; */
  /* z-index: 999; */
  width: 240px;
  /* height: 184px; */
  min-height: 300px;
  object-fit: cover;
  border: 1px solid gray;
  @media screen and (max-width: 768px) {
    height: 160px;
    width: 120px;
  }
  @media screen and (max-width: 480px) {
    min-height: 100px;
    width: 120px;
  }
`;

export const HotelTitleWrapp = styled.div`
  /* margin: 30px 0 10px 0; */
  @media screen and (max-width: 768px) {
    /* margin: 10px; */
  }
  @media screen and (max-width: 480px) {
  }
`;

export const HotelDetailTitle = styled(LinkR)`
  font-size: 18px;
  color: black;
  font-weight: 600;
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const HotelDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const HotelDetailContent = styled.div`
  position: relative;
`;

export const HotelDesc = styled.div`
  /* padding: 20px; */
  /* padding: 0; */
`;

export const HotelLocation = styled.p`
  margin-bottom: 12px;
  text-transform: capitalize;
  opacity: 0.6;
  font-size: 12px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-bottom: 8px;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
    margin-bottom: 2px;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 6;
    margin-bottom: 8px;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
    padding: 4px;
    margin-bottom: 4px;
  }
`;

export const SpanRating = styled.span`
  font-size: 18px;
  margin-left: 4px;
  color: #2155cd;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const HotelFeatureDesc = styled.div`
  margin-bottom: 14px;
  text-transform: capitalize;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    margin-bottom: 8px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 4px;
  }
`;

export const SpanDesc = styled.span`
  margin: 0 4px 0 4px;
  /* opacity: 0.6; */
  font-size: 14px;
  color: #06623b;
  gap: 8px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const HotelIcon = styled.span`
  /* margin-right: 8px; */
  /* padding-right: 12px; */
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const HotelFeatureIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const HotelPriceWrapp = styled.div`
  /* position: absolute; */
  /* transform: translate(340px, 50px); */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-start;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    position: relative;
    align-items: flex-start;
    transform: none;
    margin-top: 8px;
  }
  @media screen and (max-width: 480px) {
    position: relative;
    align-items: flex-start;
    transform: none;
    margin-top: 8px;
    /* margin-top: 10px; */
    /* transform: translate(30%, -10%); */
  }
`;

export const HotelDiscCard = styled.div`
  background-color: #eb1d36;
  color: #ffff;
  padding: 2px 8px 2px 10px;
  border-radius: 8px;
  border-bottom-right-radius: 2px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
`;

export const HotelPriceDisc = styled.p`
  margin-top: 8px;
  text-transform: uppercase;
  text-decoration: line-through;
  opacity: 0.6;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 6px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    margin-top: 4px;
  }
`;

export const HotelPrice = styled.p`
  margin-top: 2px;
  text-transform: uppercase;
  color: #eb1d36;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 6px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    margin-top: 4px;
  }
`;

export const SpanIdr = styled.span`
  font-size: 12px;
  margin-right: 4px;
`;

export const HotelPerNight = styled.p`
  font-size: 12px;
  margin-top: 2px;
  opacity: 0.6;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 6px;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
    margin-top: 2px;
  }
`;

export const HotelDescCancel = styled.p`
  font-size: 14px;
  color: #06623b;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 6px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    margin-top: 2px;
  }
`;
