import React from "react";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarRoute,
  SidebarBtnWrapper,
  SidebarLinks,
  SidebarLink,
  SidebarMenu,
  Links,
} from "./SidebarStyle";

const Sidebar = ({ togle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={togle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper onClick={togle}>
        <SidebarMenu>
          <SidebarLinks
            smooth={true}
            duration={800}
            // offset={79}
            onClick={togle}
            to="hotel"
          >
            hotel
            {/* <Links>Home</Links> */}
          </SidebarLinks>
          <SidebarLink
            // smooth={true}
            // duration={800}
            // offset={60}
            onClick={togle}
            to="/hotel"
          >
            {" "}
            Hotel
          </SidebarLink>

          <SidebarLinks
            smooth={true}
            duration={800}
            offset={60}
            onClick={togle}
            spy={true}
            to="mitra"
          >
            Reservation
          </SidebarLinks>
          <SidebarLink to="/signUp">Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrapper>
          <SidebarRoute to="/signIn">Sign In</SidebarRoute>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
