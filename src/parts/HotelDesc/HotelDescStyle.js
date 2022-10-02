import { FaBath, FaParking } from "react-icons/fa";
import { BsTelephoneForward } from "react-icons/bs";
import styled from "styled-components";

export const Bath = styled(FaBath)``;
export const Parking = styled(FaParking)``;
export const Telephone = styled(BsTelephoneForward)``;
export const DescSec = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    padding: 10px 12px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 12px;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
`;

export const TitleContentWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100%;
  max-width: 1024px; */
  padding-bottom: 12px;
  /* border-bottom: 1px solid gray; */
`;

export const TitleWrapp = styled.div``;

export const DescSubTitle = styled.p`
  font-size: 18px;
  opacity: 0.6;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const DescTitle = styled.h1`
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const PriceWrapp = styled.div`
  display: grid;
  justify-items: end;
  align-items: center;
`;

export const PriceDisc = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: line-through;
  opacity: 0.6;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Price = styled.p`
  text-transform: uppercase;
  color: #eb1d36;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Idr = styled.span`
  font-size: 12px;
  margin-right: 4px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const PerNight = styled.p`
  font-size: 12px;
  opacity: 0.6;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
`;

export const Button = styled.a`
  margin-top: 4px;
  padding: 6px 12px;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  background-color: #0e3eda;
  color: #ffff;
  cursor: pointer;

  &:hover {
    background-color: #003580;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    padding: 4px 10px;
    font-size: 10px;
  }
`;

export const DescWrapp = styled.div`
  margin: 20px 0;
`;

export const ContentTitle = styled.p`
  /* border-top: 1px solid gray; */
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0 10px 0;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin: 16px 0 8px 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    margin: 8px 0 8px 0;
  }
  /* padding-top: 10px; */
`;

export const ContentDesc = styled.p`
  white-space: wrap;
  opacity: 0.6;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const FasilitasContent = styled.div`
  display: grid;
  /* grid-auto-flow: column; */
  grid-template-columns: repeat(7, 1fr);
  gap: 40px;
  /* overflow: hidden; */
  width: 100%;
  margin: 2px;
  /* background: red; */
  /* max-width: 100%; */

  @media screen and (max-width: 768px) {
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 480px) {
    gap: 12px;
    grid-template-columns: repeat(4, 1fr);
  }
  /* justify-content: space-between; */
`;

export const IconWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  /* background: blue; */
  @media screen and (max-width: 768px) {
    gap: 2px;
  }
  @media screen and (max-width: 480px) {
    gap: 2px;
    /* background: red; */
  }
`;

export const IconDesc = styled.span`
  opacity: 0.6;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const CollectionWrapp = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid gray;
  margin: 20px 0;
  padding: 20px 0;
`;
