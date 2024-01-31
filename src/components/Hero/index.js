import React from "react";
import ContainerWrapp from "../ContainerWrapp";
import { ContentWrapp, Image } from "./Hero";

const Hero = ({ img }) => {
  return (
    <div>
      <ContainerWrapp>
        <ContentWrapp>
          <Image src={img} />
          test
          <h1>test</h1>
        </ContentWrapp>
      </ContainerWrapp>
    </div>
  );
};

export default Hero;
