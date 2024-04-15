import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 90%;
  height: 100%;
  background: #fdfdfd;
  color: #0d0d0d;
  display: grid;
  padding: 0 10px;
  top: 0;
  left: -100%;
  transition: 0.8s ease;
  /* top: 0; */
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #0d0d00;
  font-size: 18px;
`;

export const SidebarMenuHeader = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

export const TitleSidebar = styled.p`
  font-size: 1.2rem;
`;

export const SidebarWrapper = styled.div`
  color: #0d0d00;
  display: flex;
  flex-direction: column;
  /* margin-top: 40px; */
  text-align: center;
`;

export const SidebarMenu = styled.div`
  padding: 20px;
  display: flex;
  gap: 12px;
  font-size: 1.4rem;
  align-items: center;
  &:hover {
    color: #a9a9a9;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarLinks = styled(LinkS)`
  display: flex;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #0d0d00;
  margin: 0;
  cursor: pointer;
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #0d0d00;
  cursor: pointer;

  &:hover {
    color: #a9a9a9;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarBtnWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #1cfd7b;
    color: #7a7a7a;
  }
`;
