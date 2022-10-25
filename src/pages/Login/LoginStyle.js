import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: #003580;
  /* background: red; */
`;
export const LoginWrapp = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  /* background: blue; */
`;
export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginHeadTitle = styled.h1`
  position: absolute;
  transform: translateY(-240px);
  color: #ffff;
  display: flex;
`;
export const LogTitle = styled.h3`
  margin-bottom: 20px;
`;
export const InputWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  /* width: 100%; */
  color: white;
  @media screen and (max-width: 768px) {
    width: 280px;
  }
  @media screen and (max-width: 480px) {
    width: 260px;
  }
`;

// export const InputUser = styled.input.attrs({
//   type: "text",
//   placeholder: "user name",
// })`
//   width: 300px;
//   height: 48px;
//   padding: 8px;
// `;
// export const InputEmail = styled.input.attrs({
//   type: "email",
//   placeholder: "email",
// })`
//   width: 300px;
//   height: 48px;
//   padding: 8px;
// `;
// export const InputPassword = styled.input.attrs({
//   type: "password",
//   placeholder: "password",
// })`
//   width: 300px;
//   height: 48px;
//   padding: 8px;
// `;
export const LogButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 32px;
  padding: 8px;
  background: #fb2576;
  color: #ffff;
  border: none;
  border-radius: 4px;
  &:hover {
    background: #e0144c;
  }
  &:disabled {
    background: gray;
  }
`;
export const LoginFooter = styled.div`
  margin-top: 10px;
`;
export const SpanContent = styled.div`
  font-size: 12px;
  color: #ffff;
`;

export const LinkTo = styled(LinkR)`
  color: #fb2576;
  font-size: 14px;
`;

export const ErrorMsg = styled.span`
  color: red;
`;
