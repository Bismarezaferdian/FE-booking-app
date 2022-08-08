import styled from "styled-components";
import {
  FaBed,
  FaTaxi,
  FaPlane,
  FaCar,
  FaCalendarAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

export const Bed = styled(FaBed)``;
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
  /* margin-bottom: ${(props) => (props.type !== "list" ? "50px" : "20px")}; */
`;

export const HeaderContainer = styled.div`
  margin: ${(props) =>
    props.type !== "list" ? "20px 0 100px 0" : "20px 0 0 0"};
  width: 100%;
  max-width: 1024px;
`;

export const HeaderList = styled.div`
  /* background-color: red; */
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  ${(props) =>
    props.active &&
    "border : 2px solid white ;padding: 10px; border-radius:20px "}
`;

export const Span = styled.span``;

export const HeadTitle = styled.h1`
  margin: 20px 0;
`;

export const HeaderDesc = styled.p``;
export const HeaderBtn = styled.button`
  background-color: #0071c2;
  color: white;
  border: none;
  border-radius: 2px;
  padding: 10px 20px;
  margin-top: 20px;
  font-weight: 500;
  cursor: pointer;
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
`;

export const HeaderSearchItems = styled.div`
  display: flex;
  align-content: center;
  gap: 20px;
  z-index: 1;
`;

export const HeaderSearchBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  background-color: #003580;
  color: #ffff;
  border: none;
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
