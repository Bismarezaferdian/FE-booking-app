import React from "react";
import {
  Nav,
  NavbarContainer,
  Logo,
  NavItems,
  NavButton,
  Dot,
  NavButtonRegister,
} from "./NavbarStyle";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <Logo>
          traveler <Dot /> com
        </Logo>
        <NavItems>
          <NavButton>Login</NavButton>
          <NavButtonRegister>Register</NavButtonRegister>
        </NavItems>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
