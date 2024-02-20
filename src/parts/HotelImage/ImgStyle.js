import styled from "styled-components";

export const HotelImgWrapp = styled.div`
  display: grid;
  justify-content: center;
  /* padding: 8px 0; */
  /* margin: 0 20px 0 20px; */
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
  max-width: 1024px;
  max-height: 80vh;
  width: 100%;
  overflow: hidden;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const WrappContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  /* max-height: 80vh; */
  background-color: #0000;

  &:nth-child(1) {
    grid-column: 1/3;
    grid-row: 1/3;
    object-fit: cover;
  }
`;

export const HotelImg = styled.img`
  /* grid-template-columns: 1fr; */
  width: 1024px;
  height: 80vh;
  object-fit: cover;
  border-radius: 5px;
  background-color: #0000;
  &:hover {
    opacity: 0.8;
  }
`;
