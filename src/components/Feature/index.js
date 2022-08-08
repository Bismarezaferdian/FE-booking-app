import React from "react";
import Feature1 from "../../assets/images/feature-villa1.jpg";
import Feature2 from "../../assets/images/feature-villa2.jpg";
import Feature3 from "../../assets/images/feature-villa3.jpg";
import {
  FeatureContainer,
  FeatureImg,
  FeatureItems,
  FeatureSec,
  FeatureSubTitle,
  FeatureTitle,
  FeatureTitleWrapp,
} from "./FeatureElement";

const Feature = () => {
  return (
    <FeatureSec>
      <FeatureContainer>
        <FeatureItems>
          <FeatureImg src={Feature1} />
          <FeatureTitleWrapp>
            <FeatureTitle>Jakarta</FeatureTitle>
            <FeatureSubTitle>532 Properties</FeatureSubTitle>
          </FeatureTitleWrapp>
        </FeatureItems>
        <FeatureItems>
          <FeatureImg src={Feature2} />
          <FeatureTitleWrapp>
            <FeatureTitle>Bandung</FeatureTitle>
            <FeatureSubTitle>532 Properties</FeatureSubTitle>
          </FeatureTitleWrapp>
        </FeatureItems>
        <FeatureItems>
          <FeatureImg src={Feature3} />
          <FeatureTitleWrapp>
            <FeatureTitle>Surabaya</FeatureTitle>
            <FeatureSubTitle>532+ Properties</FeatureSubTitle>
          </FeatureTitleWrapp>
        </FeatureItems>
        <FeatureItems>
          <FeatureImg src={Feature3} />
          <FeatureTitleWrapp>
            <FeatureTitle>Yogjakarta</FeatureTitle>
            <FeatureSubTitle>532+ Properties</FeatureSubTitle>
          </FeatureTitleWrapp>
        </FeatureItems>
        <FeatureItems>
          <FeatureImg src={Feature3} />
          <FeatureTitleWrapp>
            <FeatureTitle>lampung</FeatureTitle>
            <FeatureSubTitle>532+ Properties</FeatureSubTitle>
          </FeatureTitleWrapp>
        </FeatureItems>
        <FeatureItems>
          <FeatureImg src={Feature3} />
          <FeatureTitleWrapp>
            <FeatureTitle>Bali</FeatureTitle>
            <FeatureSubTitle>532+ Properties</FeatureSubTitle>
          </FeatureTitleWrapp>
        </FeatureItems>
      </FeatureContainer>
    </FeatureSec>
  );
};

export default Feature;
