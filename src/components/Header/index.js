import React, { useContext, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format, parse, parseISO } from "date-fns";
import {
  HeaderHead,
  HeaderContainer,
  HeaderItem,
  HeaderList,
  Span,
  HeadTitle,
  HeaderDesc,
  HeaderBtn,
  Bed,
  Car,
  Plane,
  Taxi,
  HeaderSearch,
  HeaderSearchItems,
  Input,
  Date,
  HeaderSearchBtn,
  DateWrapp,
  DateBtn,
  Option,
  OptionItems,
  OptionText,
  OptionCounterBtn,
  OptionBtnWrapp,
  OptionCounter,
  Minus,
  Plus,
  Train,
  HeaderWrappButton,
} from "./HeaderStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { toast, ToastContainer } from "react-toastify";
import { combineStore } from "../../zustand/store";
import { dateId } from "../../utiltis/dateId";

function Header({ type }) {
  const { addCity, dates, addDate, updateOption, option } = combineStore();
  const [open, setOpen] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new window.Date(),
      endDate: new window.Date(),
      key: "selection",
    },
  ]);

  // console.log(dateRange);
  var location = useLocation();

  const getNavLink = (path) => {
    return location.pathname === path ? "active" : undefined;
  };

  // useEffect(() => {
  //   setDateRange(dates);
  // }, [dates]);

  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const handleSubmit = () => {
    // if (destination === "") {
    //   toast("Destination tidak boleh kosong");
    // } else {
    //   dispatch({
    //     type: "NEW_SEARCH",
    //     payload: { destination, date, option },
    //   });
    //   navigate("/hotels", { state: { destination, date, option } });
    // }
  };

  const handleDestination = (e) => {
    addCity(capitalizeFirstLetter(e.target.value));
  };

  //update to store Zustand
  const handleDate = (e) => {
    setDate([e.selection]);
    addDate([e.selection]);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    combineStore.persist.rehydrate();
  }, []);
  return (
    <HeaderHead type={type}>
      <ToastContainer autoClose={5000} />
      <HeaderContainer type={type}>
        {/* <HeaderList>
          <HeaderItem active={getNavLink("/")} to="/">
            <Bed />
            <Span>stays</Span>
          </HeaderItem>

          <HeaderItem active={getNavLink("/flight")} to="/flight">
            <Plane />
            <Span>Flights</Span>
          </HeaderItem>
          <HeaderItem active={getNavLink("/rental")} to="/rental">
            <Car />
            <Span>Car Rentals</Span>
          </HeaderItem>
          <HeaderItem active={getNavLink("/atracttion")} to="/atracttion">
            <Bed />
            <Span>Atracttions</Span>
          </HeaderItem>
          <HeaderItem active={getNavLink("/taxi")} to="/taxi">
            <Taxi />
            <Span>Taxis</Span>
          </HeaderItem>
          <HeaderItem active={getNavLink("/train")} to="/train">
            <Train />
            <Span>Train</Span>
          </HeaderItem>
        </HeaderList> */}
        {type !== "list" && (
          <>
            <HeadTitle> A lifetime of discounts? It's Genius.</HeadTitle>
            <HeaderDesc>
              {" "}
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </HeaderDesc>
            <HeaderBtn to={"/login"}> Signin/Signup</HeaderBtn>
            <HeaderSearch id="search">
              <HeaderSearchItems>
                <Bed />
                <Input
                  onChange={
                    handleDestination
                    // (e) => setDestination(lowerCase(e.target.value))
                    // setDestination(capitalizeFirstLetter(e.target.value))
                  }
                  required
                />
              </HeaderSearchItems>
              <HeaderSearchItems>
                <Date />
                <Span onClick={() => setOpen(!open)}>{`${dateId(
                  dates[0].startDate
                )} to ${dateId(dates[0].endDate)} `}</Span>
                {open && (
                  <DateWrapp>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(e) => handleDate(e)}
                      // onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      minDate={new window.Date()}
                      // ranges={dates}
                      ranges={date}
                    />
                    <DateBtn onClick={() => setOpen(!open)}>submit</DateBtn>
                  </DateWrapp>
                )}
              </HeaderSearchItems>
              <HeaderSearchItems>
                <Bed />
                <Span onClick={() => setOpenOption(!openOption)}>
                  {`${option.adult} ${option.adult > 1 ? "adults" : "adult "} ${
                    option.room
                  }
              ${option.room > 1 ? "rooms" : "room"} ${option.children} ${
                    option.children > 1 ? "childrens" : "children"
                  } `}
                </Span>

                {openOption && (
                  <Option>
                    <OptionItems>
                      <OptionText>Adults</OptionText>
                      <OptionBtnWrapp>
                        <OptionCounterBtn
                          disabled={option.adult <= 1}
                          onClick={() => updateOption("adult", "i")}
                        >
                          <Minus />
                        </OptionCounterBtn>
                        <OptionCounter>{option.adult}</OptionCounter>
                        <OptionCounterBtn
                          onClick={() => updateOption("adult", "d")}
                        >
                          <Plus />
                        </OptionCounterBtn>
                      </OptionBtnWrapp>
                    </OptionItems>

                    <OptionItems>
                      <OptionText>Rooms</OptionText>
                      <OptionBtnWrapp>
                        <OptionCounterBtn
                          disabled={option.room <= 1}
                          onClick={() => updateOption("room", "i")}
                        >
                          <Minus />
                        </OptionCounterBtn>
                        <OptionCounter>{option.room}</OptionCounter>
                        <OptionCounterBtn
                          onClick={() => updateOption("room", "d")}
                        >
                          <Plus />
                        </OptionCounterBtn>
                      </OptionBtnWrapp>
                    </OptionItems>
                    <OptionItems>
                      <OptionText>Children</OptionText>
                      <OptionBtnWrapp>
                        <OptionCounterBtn
                          disabled={option.children <= 0}
                          onClick={() => updateOption("children", "i")}
                        >
                          <Minus />
                        </OptionCounterBtn>
                        <OptionCounter>{option.children}</OptionCounter>
                        <OptionCounterBtn
                          onClick={() => updateOption("children", "d")}
                        >
                          <Plus />
                        </OptionCounterBtn>
                      </OptionBtnWrapp>
                    </OptionItems>
                  </Option>
                )}
              </HeaderSearchItems>

              <HeaderWrappButton>
                <HeaderSearchBtn
                  // disabled={destination === "" ? true : false}
                  onClick={handleSubmit}
                >
                  {" "}
                  Search
                </HeaderSearchBtn>
              </HeaderWrappButton>
            </HeaderSearch>
          </>
        )}
      </HeaderContainer>
    </HeaderHead>
  );
}

export default Header;
