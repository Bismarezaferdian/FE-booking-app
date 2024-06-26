import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";

export const Location = styled(MdLocationOn)`
  position: absolute;
  transform: translate(8px, 28px);
  font-size: 20px;
`;

export const ListSec = styled.div`
  background-color: #edf6f9;
  /* background-color: #e0e0e0; */
  min-height: 100vh;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #edf6f9;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  position: relative;
`;

export const ListWrapp = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  gap: 20px;
`;
export const ListSearch = styled.div`
  position: sticky;
  height: max-content;
  top: 16px;
  padding: 20px;
  background-color: #fee440;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 60vh;
  border-radius: 8px;
  /* margin-top: 30px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
  }

  /* margin-left: 12px; */
`;
export const SpanDate = styled.span`
  background-color: #ffff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  white-space: nowrap;
  /* color: rgba(0, 0, 0, 0.5); */
`;

export const ListDateWrapp = styled.div`
  position: absolute;
  z-index: 1;
  transform: translateY(62px);
  /* width: 50%; */
`;

export const ListDate = styled.span`
  opacity: 0.6;
  padding-left: 4px;
`;

export const ListTitle = styled.p`
  margin: 0 18px 12px 0;
  font-size: 18px;
  font-weight: 600;
`;

export const ListLabel = styled.p`
  margin: 0 4px 4px 0;
`;

export const ListInput = styled.input.attrs({
  type: "text",
})`
  position: relative;
  padding: 10px 10px 10px 30px;
  border: none;
  border-radius: 4px;
  text-transform: lowercase;
`;

export const ListResult = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  background-color: "blue";
  gap: 20px;
`;

export const ListOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const ListLabelOption = styled.p`
  white-space: nowrap;
`;

export const ListOptionInput = styled.input.attrs({
  type: "number",
})`
  border: none;
  width: 50px;
  padding: 6px;
`;

export const BtnWrapp = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 20px;
`;

export const WrappSkeleton = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
`;

export const BtnListSeacrh = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 8px 14px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  background: #003580;
  color: #ffff;
  border-radius: 4px;

  &:hover {
    background: #1363df;
    transition: 0.2s all ease;
  }
`;

export const PropertiWrapp = styled.div`
  display: flex;
  justify-content: center;
`;
