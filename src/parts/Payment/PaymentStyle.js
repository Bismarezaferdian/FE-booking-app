import styled from "styled-components";

export const PaymentSection = styled.div`
  width: 100%;
  max-width: 1024px;
`;
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 40px;
`;
export const TitleHeader = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
export const PayWrapp = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1024px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ContentPayWrapp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    border-right: 1px solid gray;
  }
  @media screen and (max-width: 768px) {
    &:nth-child(1) {
      border: none;
    }
  }
  @media screen and (max-width: 480px) {
    border: none;
  }
`;
export const SubTitle = styled.p`
  font-size: 18px;
`;
export const PaymentContent = styled.div``;

export const TitlePay = styled.p``;
export const TextPay = styled.p``;
export const PaymentRek = styled.div`
  display: flex;
`;
export const Image = styled.img``;
export const Item = styled.div``;

export const PaymentFormWrapp = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
`;
