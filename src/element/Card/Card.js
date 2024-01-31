import styled from "styled-components";

export const Wrapp = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;

  max-width: 300px;
  max-height: 300px;
  box-shadow: 1px 3px 16px 2px rgba(207, 207, 207, 1);
`;

export const WrappImage = styled.div`
  display: flex;
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* max-width: 300px;
  max-height: 300px; */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  transition: 0.4s ease-in-out;
  &:hover {
    scale: 1.1;
  }
`;

export const WrapDesc = styled.div`
  display: flex;
  padding: 12px 4px;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  min-height: 100px;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-transform: capitalize;
`;

export const SubTitle = styled.p`
  font-size: 12px;
  text-transform: lowercase;
  color: gray;
`;

export const Price = styled.p`
  font-size: 14px;
  color: red;
  text-transform: capitalize;
`;
