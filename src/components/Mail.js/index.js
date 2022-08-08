import React from "react";
import {
  MailBtn,
  MailDesc,
  MailForm,
  MailFormWrapp,
  MailSec,
  MailTitle,
} from "./MailStyled";

const Mail = () => {
  return (
    <MailSec>
      <MailTitle>save time, save money !</MailTitle>
      <MailDesc>signup and we'll send best deals to you</MailDesc>
      <MailFormWrapp>
        <MailForm />
        <MailBtn>Subscribe</MailBtn>
      </MailFormWrapp>
    </MailSec>
  );
};

export default Mail;
