import styled from "styled-components";

export const RoomContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 1024px;
`;

export const RoomTitle = styled.p`
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
`;

export const RoomContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  /* background: blue; */
`;

export const CardRoom = styled.div`
  /* border: 1px solid gray; */
  background: #ffff;
  border-radius: 8px;
  display: flex;
  width: 100%;
  /* flex-direction: column; */
  margin: 4px 0;
  padding: 8px;
  align-items: center;
  /* padding: 20px 0 20px 20px; */
  align-items: center;
`;

export const CardImgWrap = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  padding: 8px;
  margin-left: 8px;
  @media screen and (max-width: 768px) {
    /* margin: 10px; */
    min-height: 180px;
    width: 120px;
  }
  @media screen and (max-width: 480px) {
    min-height: 100px;
    width: 120px;
  }
`;

export const RoomImg = styled.img`
  max-width: 300px;
  overflow: hidden;
  border-radius: 12px;
  object-fit: cover;
  /* border: 1px solid gray; */
  @media screen and (max-width: 768px) {
    height: 160px;
    width: 120px;
  }
  @media screen and (max-width: 480px) {
    min-height: 100px;
    width: 120px;
  }
`;

export const ContentRoomWrap = styled.div`
  margin-left: 20px;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const RoomH1 = styled.h2`
  white-space: nowrap;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const WrapDesc = styled.p`
  font-size: 14px;
  margin-right: 8px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const RoomFasilitas = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  /* background: blue; */
  justify-content: flex-start;
`;

export const NumbRoomP = styled.p``;

export const RoomDesc = styled.p`
  font-size: 18px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Label = styled.p`
  font-size: 16px;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const InputNumb = styled.input.attrs({ type: "checkbox" })`
  font-size: 16px;
  text-align: center;
  background-color: green;
  /* margin-top: 10px; */
  margin-left: 4px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ButtonRoom = styled.button`
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
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
`;
