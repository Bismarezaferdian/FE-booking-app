import { TextField } from "@mui/material";
import React from "react";
import Bca from "../../assets/images/logo-bca.jpg";
import { dateId } from "../../utiltis/dateId";
import Mandiri from "../../assets/images/logo-mandiri.jpg";
import { HomeCountainer } from "../../pages/Home/HomeStyle";
import {
  ContentPayWrapp,
  Image,
  Item,
  PaymentContent,
  PaymentFormWrapp,
  PaymentRek,
  PayWrapp,
  SubTitle,
  TextPay,
  TitleHeader,
  TitlePay,
  TitleWrap,
} from "./PaymentStyle";

function Payment({ date, setPayment }) {
  const handleChange = (e) => {
    return setPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (!date)
    return (
      <HomeCountainer>
        <div>
          <h1>pilih tanggal dulu </h1>
        </div>
      </HomeCountainer>
    );
  return (
    <HomeCountainer>
      <TitleWrap>
        <TitleHeader>Payment</TitleHeader>
        <SubTitle>Kindly follow the instructions below</SubTitle>
      </TitleWrap>
      <PayWrapp>
        <ContentPayWrapp>
          <PaymentContent>
            <TitlePay>Tranfer Payment</TitlePay>
            <TextPay>PPN 10% : </TextPay>
            <TextPay>Total : </TextPay>
            <TextPay>Sub Total : </TextPay>
            <PaymentRek>
              <Item>
                <Image src={Bca} />
              </Item>
              <Item>
                <TextPay>BCA</TextPay>
                <TextPay>5288590605- </TextPay>
                <TextPay>PT Traveler Dot Com</TextPay>
              </Item>
            </PaymentRek>
            <PaymentRek>
              <Item>
                <Image src={Mandiri} />
              </Item>
              <Item>
                <TextPay>MANDIRI</TextPay>
                <TextPay>65322567755 </TextPay>
                <TextPay>PT Traveler Dot Com</TextPay>
              </Item>
            </PaymentRek>
          </PaymentContent>
        </ContentPayWrapp>
        <ContentPayWrapp>
          <PaymentFormWrapp>
            <TextField
              //   item
              label="Bank From"
              variant="outlined"
              size="small"
              placeholder="BCA"
              name="bankFrom"
              onChange={handleChange}
            />
            <TextField
              //   item
              label="Bank Account Name"
              variant="outlined"
              size="small"
              name="bankAccountName"
              placeholder="Jhone Do"
              onChange={handleChange}
            />{" "}
            <TextField
              //   item
              label="Start Date"
              variant="outlined"
              size="small"
              value={date ? dateId(date[0].startDate) : undefined}
            />
            <TextField
              //   item
              label="End Date"
              variant="outlined"
              size="small"
              value={date ? dateId(date[0].startDate) : undefined}
            />
          </PaymentFormWrapp>
        </ContentPayWrapp>
      </PayWrapp>
      {/* <button onClick={HandleClick}>submit</button> */}
    </HomeCountainer>

    // </Container>
  );
}

export default Payment;
