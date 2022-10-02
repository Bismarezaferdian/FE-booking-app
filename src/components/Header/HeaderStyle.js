import styled from "styled-components";
import {
  FaBed,
  FaTaxi,
  FaPlane,
  FaCar,
  FaCalendarAlt,
  FaPlus,
  FaMinus,
  FaTrain,
} from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";

export const Bed = styled(FaBed)``;
export const Train = styled(FaTrain)``;
export const Plane = styled(FaPlane)``;
export const Taxi = styled(FaTaxi)``;
export const Car = styled(FaCar)``;
export const Date = styled(FaCalendarAlt)`
  color: #000;
`;
export const Minus = styled(FaMinus)`
  background-color: #ffff;
`;
export const Plus = styled(FaPlus)`
  background-color: #ffff;
`;

export const HeaderHead = styled.div`
  display: flex;
  justify-content: center;
  color: #ffff;
  background-color: #003580;
  position: relative;
`;

export const HeaderContainer = styled.div`
  margin: ${(props) =>
    props.type !== "list" ? "20px 0 100px 0" : "20px 0 0 0"};
  width: 100%;
  max-width: 1024px;
  @media screen and (max-width: 768px) {
    max-width: 768px;
    max-height: 70vh;
    padding: 0 20px;
    margin-bottom: ${(props) => (props.type !== "list" ? "120px" : "0")};
  }
  @media screen and (max-width: 480px) {
    max-width: 768px;
    padding: 0 20px;
  }
`;

export const HeaderList = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 40px;
  grid-auto-flow: column;
  margin-bottom: 50px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    margin-top: 20px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;

    grid-auto-flow: row;
  }
`;

export const HeaderItem = styled(LinkR)`
  display: flex;
  align-items: center;
  color: #ffff;
  text-decoration: none;
  /* justify-content: center; */
  white-space: nowrap;
  padding: 8px;
  text-align: center;
  border: 0 solid #0d0f40;
  ${(props) =>
    props.active && "border : 2px solid white; border-radius:20px; "};
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;

    ${(props) => props.active && "border : none; color: #fee440; "};
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    ${(props) => props.active && "border : none ;color: #fee440"};
  }
`;

export const Span = styled.span``;

export const HeadTitle = styled.h1`
  margin: 20px 0;
`;

export const HeaderDesc = styled.p`
  margin-bottom: 20px;
`;
export const HeaderBtn = styled(LinkR)`
  background-color: #fee440;
  /* background-color: #553995; */
  color: #2c3333;
  border: none;
  border-radius: 40px;
  padding: 10px 20px;
  margin-top: 20px;
  font-weight: 500;
  text-decoration: none;

  cursor: pointer;
  &:hover {
    background: #ffcb42;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 8px 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffff;
  height: 60px;
  color: gray;
  padding: 20px;
  border: 3px solid #febb02;
  border-radius: 5px;
  width: 100%;
  max-width: 1024px;
  position: absolute;
  bottom: -30px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    max-width: 260px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 260px;
    bottom: -90px;
    /* margin: 40px; */
  }
  @media screen and (max-width: 480px) {
    display: flex;
    max-width: 768px;
    flex-direction: column;
    /* overflow: hidden; */
    height: 260px;
    margin-right: 20px;
  }
`;

export const HeaderSearchItems = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;
  z-index: 1;
  &:nth-child(2) {
    z-index: 999;
    @media screen and (max-width: 768px) {
      z-index: 999;
    }
  }
  &:nth-child(4) {
    border: none;
  }

  @media screen and (max-width: 768px) {
    border-bottom: 1px solid gray;
  }
  @media screen and (max-width: 480px) {
    border-bottom: 1px solid gray;
  }
`;

export const HeaderSearchBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 14px;
  text-transform: uppercase;
  border-radius: 20px;
  background: #fee440;
  color: #2c3333;
  border: none;
  :hover {
    background: #ffcb42;
  }
`;

export const Input = styled.input.attrs({
  type: "text submit",
  placeholder: "where are yo going ?",
})`
  border: none;
  outline: none;
`;
export const DateWrapp = styled.div`
  position: absolute;
  top: 50px;
  z-index: 999;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    transform: translate(-4%, 20%);
  }
`;

export const DateBtn = styled.button`
  position: absolute;
  bottom: -10px;
  right: 10px;
  padding: 8px 4px;
  border: none;
  background-color: #0071c2;
  color: #ffff;
  border-radius: 4px;
  cursor: pointer;
  z-index: 999;
`;

export const Option = styled.div`
  position: absolute;
  top: 50px;
  border: 2px solid black;
  background-color: #fff;
  border-radius: 4px;
`;

export const OptionItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  margin: 10px;
`;

export const OptionText = styled.span``;

export const OptionCounterBtn = styled.button`
  display: flex;
  border: none;
  font-size: 20px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const OptionCounter = styled.span``;

export const OptionBtnWrapp = styled.div`
  display: flex;
  gap: 20px;
`;
