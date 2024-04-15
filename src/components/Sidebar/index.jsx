import React, { useContext } from "react";
import {
  IoCallOutline,
  IoHelpCircleOutline,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
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
  SidebarMenuHeader,
  TitleSidebar,
} from "./SidebarStyle";
import { blue } from "@mui/material/colors";
import { AuthContext } from "../../context/AuthContex";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ togle, isOpen }) => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper onClick={togle}>
        <SidebarMenuHeader onClick={togle}>
          {user ? (
            <>
              <TitleSidebar>{`Hi, ${user.userName}`}</TitleSidebar>
            </>
          ) : (
            <>
              <TitleSidebar>traveler.com</TitleSidebar>
            </>
          )}
          <CloseIcon />
        </SidebarMenuHeader>
        <SidebarMenu>
          <IoHomeOutline />
          <SidebarLink onClick={togle} to="/home">
            Home
            {/* <Links>Home</Links> */}
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <RiHotelLine />
          <SidebarLink onClick={togle} to="/hotel">
            {" "}
            Hotel
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SlCalender />
          <SidebarLink onClick={togle} to="/reservasi">
            Reservation
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <IoCallOutline />
          <SidebarLink onClick={togle} to="/contact">
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <IoHelpCircleOutline />
          <SidebarLink onClick={togle} to="/help">
            Help center
          </SidebarLink>
        </SidebarMenu>
        {user ? (
          <SidebarMenu onClick={handleClick}>
            <IoPersonOutline />
            <SidebarLink to="">Log out</SidebarLink>
          </SidebarMenu>
        ) : (
          <SidebarMenu>
            <IoPersonOutline />
            <SidebarLink to="/signIn">Log in /Register</SidebarLink>
          </SidebarMenu>
        )}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
