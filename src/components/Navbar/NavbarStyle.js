// import second from "styles-component";

import styled from "styled-components";
import { FaDotCircle, FaBars } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link as LinkR } from "react-router-dom";

export const Dot = styled(FaDotCircle)`
  align-items: center;
  margin: 4px;
  color: #fee440;
`;

export const Icon = styled(MdLogout)`
  font-size: 22px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  background-color: #003580;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 50px;
  @media screen and (max-width: 768px) {
    position: relative;
    z-index: 9999;
  }
  @media screen and (max-width: 480px) {
    position: relative;
    z-index: 999;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  color: #ffff;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 28px 20px 0 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 28px 20px;
  }
`;

export const Logo = styled(LinkR)`
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 24px;
  text-decoration: none;
  color: #ffff;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    /* margin: 10px; */
    display: none;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const NavMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    /* margin: 10px; */
    display: flex;
  }
  @media screen and (max-width: 480px) {
    display: flex;
  }
`;

export const SideBarIcon = styled(FaBars)`
  cursor: pointer;
  align-items: center;
`;

export const NavMenu = styled(LinkR)``;

export const NavButton = styled(LinkR)`
  /* padding: 5px 10px; */
  border: none;
  background-color: transparent;
  color: #ffff;
  text-decoration: none;
  color: #ffff;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #ffff;
  }
`;

export const NavButtonRegister = styled.button`
  padding: 5px 10px;
  border: none;
  color: #003580;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
  }
`;

export const LogOut = styled.button``;

export const UserName = styled.p`
  text-transform: capitalize;
`;
