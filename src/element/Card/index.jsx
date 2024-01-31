import React from "react";
import {
  Image,
  Price,
  SubTitle,
  Title,
  WrapDesc,
  Wrapp,
  WrappImage,
} from "./Card";
import { rupiah, rupiahId } from "../../utiltis/rupiahId";

const Card = ({ image, title, subtitle, price }) => {
  return (
    <Wrapp>
      <WrappImage>
        <Image src={image} />
      </WrappImage>
      <WrapDesc>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Price>{price ? rupiah(price) : ""}</Price>
      </WrapDesc>
    </Wrapp>
  );
};

export default Card;
