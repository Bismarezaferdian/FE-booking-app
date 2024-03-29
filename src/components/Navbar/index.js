import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContex";
import {
  Nav,
  NavbarContainer,
  Logo,
  NavItems,
  NavButton,
  Dot,
  NavButtonRegister,
  UserName,
  Icon,
  SideBarIcon,
  NavMobile,
} from "./NavbarStyle";
import { useState } from "react";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const name = user ? user.userName.slice(0, 1) : "";
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleModal = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const togle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Sidebar togle={togle} isOpen={isOpen} />
      <NavbarContainer>
        <Logo to="/">
          traveler <Dot /> com
        </Logo>
        {user ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <NavItems>
                <NavButton to="/hotel">Hotel</NavButton>
                <NavButton to="#">Reservation</NavButton>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleModal}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <UserName>{name}</UserName>
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </NavItems>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem disabled>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem disabled>
                <Avatar /> My account
              </MenuItem>
              <Divider />

              <MenuItem onClick={handleClick}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
            <NavMobile onClick={togle}>
              <SideBarIcon />
            </NavMobile>
          </>
        ) : (
          <NavItems>
            <NavButton to="/hotel">Hotel</NavButton>
            <NavButton to="#">Reservation</NavButton>
            <NavButton to="/login">Login</NavButton>
            <NavButtonRegister>Register</NavButtonRegister>
          </NavItems>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
