import React from "react";
import TextField from "@mui/material/TextField";
import { HomeCountainer } from "../../pages/Home/HomeStyle";

import {
  ContentPayWrapp,
  PaymentContent,
  PaymentFormWrapp,
  PayWrapp,
  SubTitle,
  TitleHeader,
  TitleWrap,
} from "../Payment/PaymentStyle";
import { LogoName } from "./BookingStyle";
import { Dot } from "../../components/Navbar/NavbarStyle";

const Booking = ({ error, setBooking }) => {
  // const [booking, setbooking] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phoneNumber: "",
  // });

  // state di pindah ke stepper

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <HomeCountainer>
      <TitleWrap>
        <TitleHeader>Booking Information</TitleHeader>
        <SubTitle>Please fill up the blank fields below</SubTitle>
      </TitleWrap>
      <PayWrapp>
        <ContentPayWrapp>
          <PaymentContent>
            <LogoName to="/">
              traveler <Dot /> com
            </LogoName>
          </PaymentContent>
        </ContentPayWrapp>
        <ContentPayWrapp>
          <PaymentFormWrapp>
            <TextField
              //   item

              label=" First Name"
              variant="outlined"
              size="small"
              placeholder="jhon"
              name="firstName"
              onChange={handleChange}
              required
              autoFocus
              error={error}
              helperText={error ? "is required" : ""}
            />
            <TextField
              //   item
              label="Last Name"
              variant="outlined"
              size="small"
              placeholder="do"
              name="lastName"
              onChange={handleChange}
              required
              error={error}
              helperText={error ? "is required" : ""}
            />
            <TextField
              //   item
              label="email"
              variant="outlined"
              size="small"
              placeholder="jhondo@gmail.com"
              name="email"
              onChange={handleChange}
              required
              error={error}
              helperText={error ? "is required" : ""}
            />{" "}
            <TextField
              //   item
              label="Phone Number"
              variant="outlined"
              size="small"
              name="phoneNumber"
              onChange={handleChange}
              placeholder="0822-1166-6095"
              required
              error={error}
              helperText={error ? "is required" : ""}
            />
          </PaymentFormWrapp>
        </ContentPayWrapp>
      </PayWrapp>
    </HomeCountainer>
  );
};

export default Booking;
