import React from "react";
import {
  CopyRight,
  FooterContainer,
  FooterLi,
  FooterList,
  FooterSec,
  FooterTitle,
  FooterUl,
} from "./FooterStyle";

function Footer() {
  return (
    <FooterSec>
      <FooterContainer>
        <FooterList>
          <FooterUl>
            <FooterLi>City</FooterLi>
            <FooterLi>Popular</FooterLi>
            <FooterLi>Hotels</FooterLi>
            <FooterLi>Villa</FooterLi>
            <FooterLi>Home Stays</FooterLi>
          </FooterUl>
          <FooterUl>
            <FooterLi>City</FooterLi>
            <FooterLi>Popular</FooterLi>
            <FooterLi>Hotels</FooterLi>
            <FooterLi>Villa</FooterLi>
            <FooterLi>Home Stays</FooterLi>
          </FooterUl>
          <FooterUl>
            <FooterLi>City</FooterLi>
            <FooterLi>Popular</FooterLi>
            <FooterLi>Hotels</FooterLi>
            <FooterLi>Villa</FooterLi>
            <FooterLi>Home Stays</FooterLi>
          </FooterUl>
        </FooterList>
      </FooterContainer>
      <FooterTitle>
        <CopyRight /> 2022 Bisma Reza Ferdian
      </FooterTitle>
    </FooterSec>
  );
}

export default Footer;
