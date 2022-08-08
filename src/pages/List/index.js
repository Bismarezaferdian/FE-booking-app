import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { format } from "date-fns";
import {
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

const List = () => {
  const [openDate, setOpenDate] = useState("false");
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);

  const [option, setOption] = useState(location.state.option);

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
              <ListInput placeholder={destination} />
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
                <ListOptionInput />
              </ListOption>
              <ListOption>
                <ListLabelOption>Max Price per night</ListLabelOption>
                <ListOptionInput />
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
            </ListItem>
          </ListSearch>
          {/* flex3 column */}
          <ListResult>
            <HotelList />
            <HotelList />
            <HotelList />
            <HotelList />
            <HotelList />
            <HotelList />
            <HotelList />
          </ListResult>
        </ListWrapp>
      </ListContainer>
      <Mail />
      <Footer />
    </ListSec>
  );
};

export default List;
