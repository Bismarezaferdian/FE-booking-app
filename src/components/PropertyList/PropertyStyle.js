import styled from "styled-components";

export const PropertySec = styled.div`
  display: flex;
  justify-content: center;
`;

export const PropertyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  width: 100%;
  max-width: 1024px;
`;

export const PropertyImg = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  /* -webkit-transition: 0.4s ease;
  transition: 0.4s ease; */
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.5;

    /* -webkit-transform: scale(1.08);
    transform: scale(1.08); */
  }
`;

export const PropertyItems = styled.div`
  /* flex: 1; */
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const PropertyTitleWrapp = styled.div``;

export const PropertyTitle = styled.h1`
  font-size: 18px;
`;

export const PropertySubTitle = styled.h2`
  font-size: 14px;
  font-weight: 300;
`;
