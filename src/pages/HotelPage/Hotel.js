import { Button } from "@mui/material";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ContentContainer = styled.div`
  /* display: flex; */
  display: grid;
  row-gap: 12px;
  width: 1280px;
  /* grid-row: auto; */
  /* flex-wrap: wrap; */
  /* justify-content: center; */
`;

export const WrappContent = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding: 24px 0;
`;

export const ButtonShowAll = styled(LinkR)`
  /* max-width: max-content; */
  display: flex;
  justify-content: center;
  text-decoration: none;
  width: 20%;
  padding: 14px 0;
  justify-self: center;
  align-items: center;
  margin: 28px 0;
  border: none;
  background-color: #c8e2ff;
  color: #017bfe;
  font-weight: 700;
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
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const LinkToDetail = styled(LinkR)`
  text-decoration: none;
`;

export const PlaceWrapp = styled.div`
  /* width: 100vw; */
  background-color: red;
`;
