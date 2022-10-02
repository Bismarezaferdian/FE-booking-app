import styled from "styled-components";

export const HotelImgWrapp = styled.div`
  display: grid;
  justify-content: center;
  /* padding: 8px 0; */
  margin: 0 20px 0 20px;
  min-height: 60vh;
  @media screen and (max-width: 768px) {
    min-height: 40vh;
  }
  @media screen and (max-width: 480px) {
    min-height: 40vh;
  }
`;

export const HotelImgContainer = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
  max-width: 1024px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const ImgWrapp = styled.div`
  display: grid;
  background-color: #0000;
  &:nth-child(1) {
    grid-column: 1/3;
    grid-row: 1/3;
  }
`;

export const HotelImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  background-color: #0000;
  &:hover {
    opacity: 0.8;
  }
`;
