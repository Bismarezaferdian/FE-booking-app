import styled from "styled-components";

export const Wrapp = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  overflow: hidden;
`;

export const WrappImage = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  transition: 0.4s ease-in-out;
  overflow: hidden;
  &:hover {
    scale: 1.1;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-transform: capitalize;
  color: #0f0f00;
  text-decoration: none;
  @media (max-width: 640px) {
    font-size: 12px;
    line-height: inherit;
  }
`;

export const SubTitle = styled.p`
  margin-top: 12px;
  font-size: 12px;
  text-transform: lowercase;
  color: gray;
  text-decoration: none;
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  text-transform: lowercase;
  color: gray;
  text-decoration: none;
`;

export const Price = styled.p`
  font-size: 14px;
  color: red;
  text-transform: capitalize;
`;
