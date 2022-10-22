import styled from "styled-components";

export const HotelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #edf6f9;
  padding-top: 30px;
  /* align-items: center; */
  /* max-width: 1024px; */
`;

export const TitleDetail = styled.p`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  /* background: red; */
  justify-content: center;
  margin: 20px 0 20px 0;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin: 16px 0 20px 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    margin: 0 0 20px 0;
  }
`;
