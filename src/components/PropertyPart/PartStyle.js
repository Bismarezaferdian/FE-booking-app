import styled from "styled-components";

export const PropertySec = styled.div`
  display: flex;
  justify-content: center;
`;

export const PartContainer = styled.div`
  /* margin-top: 40px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  gap: 20px;
`;

export const PartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  position: relative;
  flex: 1;
  overflow: hidden;
  /* position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  flex: 1; */
`;

export const PartImg = styled.img`
  /* position: relative; */
  /* width: 100%;
  height: 100%;
  max-width: 500px;
  object-fit: cover;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  &:hover {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
  } */
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
`;

export const PartTitle = styled.button`
  font-size: 18px;
  font-weight: 600;
  border: none;
  outline: none;
  text-align: start;
  background-color: transparent;
  cursor: pointer;
`;

export const PartCity = styled.p`
  font-weight: 500;
`;

export const PartPrice = styled.p`
  color: gray;
`;

export const PartRating = styled.button`
  /* padding: 8px 10px 8px 10px;
  background-color: #0071c2;
  width: 50px;
  border: none;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  margin: 4px 4px 0 0; */
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
