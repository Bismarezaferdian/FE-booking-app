import styled from "styled-components";

export const MailSec = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #003580;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: #ffff;
  padding: 50px;
`;

export const MailTitle = styled.h1``;

export const MailDesc = styled.p``;
export const MailFormWrapp = styled.div``;

export const MailForm = styled.input.attrs({
  type: "text",
  placeholder: "Your Email",
})`
  width: 300px;
  height: 30px;
  border: none;
  padding-left: 10px;
  margin-right: 10px;
  border-radius: 4px;
`;

export const MailBtn = styled.button`
  height: 3px;
  border: none;
  height: 30px;
  font-weight: 500;
  background-color: #0071c2;
  color: #ffff;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
