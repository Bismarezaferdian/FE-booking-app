import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { format } from "date-fns";
import {
  BtnListSeacrh,
  BtnWrapp,
  ListContainer,
  ListDate,
  ListDateWrapp,
  ListInput,
  ListItem,
  ListLabel,
  ListLabelOption,
  ListOption,
  ListOptionInput,
  ListResult,
  ListSearch,
  ListSec,
  ListTitle,
  ListWrapp,
  Location,
  SpanDate,
} from "./ListStyle";
import { Date, DateWrapp, Span } from "../../components/Header/HeaderStyle";
import { DateRange } from "react-date-range";
import HotelList from "../../components/HotelList.js/index";
import Footer from "../../components/Footer";
import Mail from "../../components/Mail.js";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const List = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

  const datas = useContext(SearchContext);
  // console.log(datas.date);

  const [openDate, setOpenDate] = useState("false");
  const location = useLocation();
  const [destination, setDestination] = useState(datas.destination);
  // const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  // const [option, setOption] = useState(location.state.option);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const { data, loading, reFetch } = useFetch(
    `http://localhost:8000/api/v1/hotel?feature=true&city=${destination}`
  );
  // &min=${
  //   min || 0
  // }&max=${max || 9999}
  const handleClick = () => {
    reFetch();
  };

  const { option } = useContext(SearchContext);

  // console.log(destination);
  return (
    <ListSec>
      <Navbar />
      <Header type="list" />
      <ListContainer>
        <ListWrapp>
          {/* flex1 column */}
          <ListSearch>
            <ListTitle>Booking Now !</ListTitle>
            <ListItem>
              <ListLabel>Destination</ListLabel>
              <ListInput
                placeholder={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <Location />
            </ListItem>
            <ListItem>
              <ListLabel>check-in date</ListLabel>
              <SpanDate>
                {" "}
                <Date />
                <ListDate onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )} `}
                </ListDate>
              </SpanDate>

              {!openDate && (
                <ListDateWrapp>
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new window.Date()}
                    ranges={date}
                  />
                </ListDateWrapp>
              )}
            </ListItem>
            <ListItem>
              <ListTitle>Option</ListTitle>
              <ListOption>
                <ListLabelOption>Min Price per night</ListLabelOption>
                <ListOptionInput onChange={(e) => setMin(e.target.value)} />
              </ListOption>
              <ListOption>
                <ListLabelOption>Max Price per night</ListLabelOption>
                <ListOptionInput onChange={(e) => setMax(e.target.value)} />
              </ListOption>
              <ListOption>
                <ListLabelOption>adult</ListLabelOption>
                <ListOptionInput min={1} placeholder={option.adult} />
              </ListOption>
              <ListOption>
                <ListLabelOption>room</ListLabelOption>
                <ListOptionInput min={1} placeholder={option.room} />
              </ListOption>
              <ListOption>
                <ListLabelOption>children</ListLabelOption>
                <ListOptionInput min={0} placeholder={option.children} />
              </ListOption>
              <BtnWrapp>
                <BtnListSeacrh onClick={handleClick}>Search</BtnListSeacrh>
              </BtnWrapp>
            </ListItem>
          </ListSearch>
          {/* flex3 column */}
          <ListResult>
            {loading ? (
              "please wait page is loading......."
            ) : (
              <>
                {data.map((item) => (
                  <HotelList item={item} key={item._id} />
                ))}
              </>
            )}
          </ListResult>
        </ListWrapp>
      </ListContainer>
      <Mail />
      <Footer />
    </ListSec>
  );
};

export default List;

// @media screen and (max-width: 768px) {
//   display: none;
//   /* position: relative;
//   flex-direction: column;
//   height: 64vh;
//   top: -160px;
//   z-index: 999;
//   border-top-left-radius: 40px 40px;
//   border-top-right-radius: 40px 40px; */
// }
// @media screen and (max-width: 480px) {
//   /* flex-direction: column; */
// }
