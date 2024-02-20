import React from "react";
import ContainerWrapp from "../ContainerWrapp";
import { ContentWrapp, Desc, HeadTitle, Image } from "./Hero";

const Hero = ({ img }) => {
  return (
    <div>
      <ContainerWrapp>
        <ContentWrapp>
          <Desc>
            <HeadTitle>
              Booking hotel murah online
              <br /> dengan harga promo
            </HeadTitle>
          </Desc>
          <Image src={img} />
        </ContentWrapp>
      </ContainerWrapp>
    </div>
  );
};

export default Hero;
