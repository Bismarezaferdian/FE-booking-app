import styled from "styled-components";

export const PropertySec = styled.div`
  justify-content: center;
`;

export const PropertyHeadTitle = styled.h1`
  font-size: 18px;
  line-height: 30px;
  font-weight: 700;
  padding: 0 12px 0 12px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const PropertyContainer = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(5, 1fr); */
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0 12px 0 12px;
  width: 100vw;
  max-width: 1024px;
  overflow: hidden;
`;

export const WrappSkeleton = styled.div`
  display: flex;
  gap: 20px;
`;

export const PropertyImg = styled.img`
  width: 100%;
  height: 120px;
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
  /* background: red; */
  border-radius: 10px;
  /* overflow: hidden; */

  cursor: pointer;
`;

export const PropertyTitleWrapp = styled.div`
  text-transform: capitalize;
`;

export const PropertyTitle = styled.a`
  font-size: 18px;
  text-transform: capitalize;
  /* list-style: none; */
  text-decoration: none;
  color: black;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const PropertySubTitle = styled.h2`
  font-size: 14px;
  font-weight: 300;
  text-transform: capitalize;
`;
