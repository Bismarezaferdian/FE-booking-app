import styled from "styled-components";

export const HotelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background-color: #edf6f9;
  padding-top: 30px;
`;

export const TitleDetail = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0 10px 0;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin: 16px 0 8px 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    margin: 10px;
  }
`;
