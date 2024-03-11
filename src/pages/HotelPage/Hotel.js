import { Button } from "@mui/material";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ContentContainer = styled.div`
  /* display: grid;
  row-gap: 12px;
  max-width: 1280px;
  margin-bottom: 20px; */
  /* 2nd */
  display: grid;
  justify-content: center;
  padding: 20px 0;
`;

export const WrappContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  text-decoration: none;
  margin: 20px 0 20px 0;
  max-width: 100vw;
  overflow: hidden;
`;

export const ButtonShowAll = styled(LinkR)`
  display: flex;
  justify-content: center;
  justify-self: center;
  text-decoration: none;
  width: max-content;
  padding: 10px 24px;
  margin-top: 12px;
  align-items: center;
  border-radius: 8px;
  /* margin: 28px 0; */
  border: none;
  background-color: #c8e2ff;
  color: #017bfe;
  font-weight: 700;
  @media (max-width: 640px) {
    /* width: 540px; */
    white-space: nowrap;
    width: max-content;
    padding: 12px 20px;
    border-radius: 6px;
  }
`;

export const HeadTitle = styled.h1`
  font-size: 22px;
  text-transform: capitalize;
  padding: 12px 0 8px 0;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  color: gray;
  padding: 0 0 22px 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1280px;
  overflow: hidden;
  gap: 8px;
  @media (max-width: 640px) {
    /* width: 540px; */
    width: 100%;
  }
`;

export const CardWrapp = styled.div`
  /* width: 400px; */
  /* background: blue; */
  overflow: hidden;
  margin: 20px 0;
  width: max-content;
`;

export const LinkToDetail = styled(LinkR)`
  text-decoration: none;
`;

export const PlaceWrapp = styled.div`
  /* width: 100vw; */
  background-color: red;
`;
