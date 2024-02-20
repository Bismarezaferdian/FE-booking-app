import styled from "styled-components";

export const ContentWrapp = styled.div`
  background-color: black;
  position: relative;
  max-height: 70vh;
  width: 100vw;
  z-index: 0;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  opacity: 0.3;
`;

export const Desc = styled.div`
  position: absolute;
  z-index: 10;
  transform: translate(40px, 300px);
`;

export const HeadTitle = styled.h1`
  font-size: 42px;
  opacity: 1;
  /* color: red; */
  color: #ffff;
`;
