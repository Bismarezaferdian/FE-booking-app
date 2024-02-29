import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const PropertySec = styled.div`
  display: flex;
  justify-content: center;
`;

export const PropertyWrapp = styled.div`
  max-width: 1024px;
`;

export const PropertyHeadTitle = styled.h1`
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
  padding-bottom: 12px;
`;

export const PartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  flex: 1;
  overflow: hidden;
`;

export const PartImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 526px;
  object-fit: cover;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  &:hover {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
  }
`;

export const PartTitleWrapp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  text-transform: capitalize;
`;

export const PartTitle = styled(LinkR)`
  font-size: 18px;
  color: black;
  font-weight: 600;
  border: none;
  outline: none;
  text-align: start;
  white-space: nowrap;
  text-transform: capitalize;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    font-weight: 600;
  }
`;

export const PartCity = styled.p`
  font-weight: 500;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const PartPrice = styled.p`
  color: gray;
  font-size: 14px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
    font-weight: 600;
  }
`;

export const PartRating = styled.button`
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

export const RatingWrapp = styled.div`
  font-size: 14px;
  /* margin-left: 4px; */
  /* color: #2155cd; */
  /* gap: 20px; */
`;

export const Rating = styled.span``;
