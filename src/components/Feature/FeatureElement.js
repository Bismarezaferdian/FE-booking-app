import styled from "styled-components";

export const FeatureSec = styled.div`
  display: grid;
  justify-content: center;
`;

export const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  gap: 20px;
  padding: 10px;
  width: 100%;
  max-width: 1024px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 10px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
  }
`;

export const FeatureItems = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  /* max-height: 250px; */

  /* flex: 1; */
  @media screen and (max-width: 768px) {
    column-gap: 5px;
  }
  @media screen and (max-width: 480px) {
    column-gap: 5px;
  }
`;

export const FeatureImg = styled.img`
  width: 100%;
  height: f 100%;
  max-width: 526px;
  height: 380px;
  object-fit: cover;
  -webkit-transition: 0.4s ease;
  transition: 0.4s ease;
  &:hover {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
  }
`;

export const FeatureTitleWrapp = styled.div`
  position: absolute;
  transform: translate(20px, -80px);
`;

export const FeatureTitle = styled.h1`
  font-size: 24px;
  text-transform: capitalize;
`;

export const FeatureSubTitle = styled.h2`
  font-size: 20px;
`;
