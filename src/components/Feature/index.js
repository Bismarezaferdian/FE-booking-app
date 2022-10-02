import React from "react";
import Feature1 from "../../assets/images/feature-villa1.jpg";
import Feature2 from "../../assets/images/feature-villa2.jpg";
import Feature3 from "../../assets/images/feature-villa3.jpg";
import useFetch from "../../hooks/useFetch";
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
  const { data, loading } = useFetch(
    "http://localhost:8000/api/v1/hotel/countCity?cities=jakarta,lampung,bandung,yogyakarta,surabaya,bali"
  );

  return (
    <FeatureSec>
      <>
        {" "}
        {loading ? (
          "is loading "
        ) : (
          <FeatureContainer>
            <FeatureItems>
              <FeatureImg src={Feature1} />
              <FeatureTitleWrapp>
                <FeatureTitle>Jakarta</FeatureTitle>
                <FeatureSubTitle>{data[0]} Properties</FeatureSubTitle>
              </FeatureTitleWrapp>
            </FeatureItems>
            <FeatureItems>
              <FeatureImg src={Feature2} />
              <FeatureTitleWrapp>
                <FeatureTitle>lampung</FeatureTitle>
                <FeatureSubTitle>{data[1]} Properties</FeatureSubTitle>
              </FeatureTitleWrapp>
            </FeatureItems>
            <FeatureItems>
              <FeatureImg src={Feature3} />
              <FeatureTitleWrapp>
                <FeatureTitle>Bandung</FeatureTitle>
                <FeatureSubTitle>{data[2]}Properties</FeatureSubTitle>
              </FeatureTitleWrapp>
            </FeatureItems>
            <FeatureItems>
              <FeatureImg src={Feature3} />
              <FeatureTitleWrapp>
                <FeatureTitle>Yogjakarta</FeatureTitle>
                <FeatureSubTitle>{data[3]} Properties</FeatureSubTitle>
              </FeatureTitleWrapp>
            </FeatureItems>
            <FeatureItems>
              <FeatureImg src={Feature3} />
              <FeatureTitleWrapp>
                <FeatureTitle>Surabaya</FeatureTitle>
                <FeatureSubTitle>{data[4]} Properties</FeatureSubTitle>
              </FeatureTitleWrapp>
            </FeatureItems>
            <FeatureItems>
              <FeatureImg src={Feature3} />
              <FeatureTitleWrapp>
                <FeatureTitle>Bali</FeatureTitle>
                <FeatureSubTitle>{data[5]} Properties</FeatureSubTitle>
              </FeatureTitleWrapp>
            </FeatureItems>
          </FeatureContainer>
        )}
      </>
    </FeatureSec>
  );
};

export default Feature;
