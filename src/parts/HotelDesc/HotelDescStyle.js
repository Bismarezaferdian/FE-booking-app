import { FaBath, FaParking } from "react-icons/fa";
import { BsTelephoneForward } from "react-icons/bs";
import styled from "styled-components";

export const Bath = styled(FaBath)``;
export const Parking = styled(FaParking)``;
export const Telephone = styled(BsTelephoneForward)``;
export const DescSec = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1024px;
  /* background-color: aqua; */
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
`;

export const DescTitle = styled.h1`
  text-transform: capitalize;
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
`;

export const Price = styled.p`
  text-transform: uppercase;
  color: #eb1d36;
  font-size: 18px;
`;

export const Idr = styled.span`
  font-size: 12px;
  margin-right: 4px;
`;

export const PerNight = styled.p`
  font-size: 12px;
  opacity: 0.6;
`;

export const Button = styled.button`
  margin-top: 4px;
  padding: 6px 12px;
  border: none;
  border-radius: 25px;

  background-color: #0e3eda;
  color: #ffff;
  cursor: pointer;

  &:hover {
    background-color: #003580;
  }
`;

export const DescWrapp = styled.div`
  margin-top: 24px;
`;

export const ContentDescTitle = styled.p`
  /* border-top: 1px solid gray; */
  font-size: 18px;
  font-weight: 5 00;
  margin: 20px 0 10px 0;
  padding-top: 10px;
`;

export const ContentDesc = styled.p`
  white-space: wrap;
  opacity: 0.6;
`;

export const FasilitasContent = styled.div`
  display: flex;
  gap: 40px;
  /* justify-content: space-between; */
`;

export const IconWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const IconDesc = styled.span`
  opacity: 0.6;
`;
