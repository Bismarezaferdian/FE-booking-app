import { FaCopyright } from "react-icons/fa";
import styled from "styled-components";

export const CopyRight = styled(FaCopyright)``;
export const FooterSec = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterList = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  padding: 50px 50px 10px 50px;
`;

export const FooterUl = styled.ul``;

export const FooterLi = styled.li`
  list-style: none;
  padding: 8px;
`;

export const FooterTitle = styled.p`
  text-align: center;
  padding: 40px;
  font-weight: 500;
  opacity: 0.4;
`;
