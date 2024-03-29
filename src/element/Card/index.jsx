import React from "react";
import {
  Image,
  Location,
  Price,
  SubTitle,
  Title,
  Wrapp,
  WrappImage,
} from "./Card";
import { rupiah } from "../../utiltis/rupiahId";
import { MdLocationPin } from "react-icons/md";

const Card = (props) => {
  console.log(props);
  return (
    <Wrapp>
      <WrappImage>
        <Image src={props.image} />
      </WrappImage>
      <SubTitle>{props?.subTitle}</SubTitle>
      <Title>{props?.title.slice(0, 10) + "..."}</Title>
      {props.location && (
        <Location>
          <MdLocationPin />
          {props?.location}
        </Location>
      )}

      <Price>{props.price ? rupiah(props.price) : ""}</Price>
    </Wrapp>
    // <Wrapp>
    //   <WrappImage>
    //     <Image src={props.image} />
    //   </WrappImage>
    //   <WrapDesc>
    //     <SubTitle>{props?.subTitle}</SubTitle>
    //     <Title>{props?.title.slice(0, 10) + "..."}</Title>
    //     {props.location && (
    //       <Location>
    //         <MdLocationPin />
    //         {props?.location}
    //       </Location>
    //     )}

    //     <Price>{props.price ? rupiah(props.price) : ""}</Price>
    //   </WrapDesc>
    // </Wrapp>
  );
};

export default Card;
