import React, { useContext, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
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
} from "./HeaderStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { toast, ToastContainer } from "react-toastify";

function Header({ type }) {
  // const [destination, setDestinatio] = useState("destination");
  const [destination, setDestination] = useState("");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new window.Date(),
      endDate: new window.Date(),
      key: "selection",
    },
  ]);

  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  var location = useLocation();

  const getNavLink = (path) => {
    return location.pathname === path ? "active" : undefined;
  };

  // console.log(getNavLi);

  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const handleSubmit = () => {
    if (destination === "") {
      toast("Destination tidak boleh kosong");
    } else {
      dispatch({
        type: "NEW_SEARCH",
        payload: { destination, date, option },
      });
      navigate("/hotels", { state: { destination, date, option } });
    }
  };

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] - 1 : option[name] + 1,
      };
    });
  };

  // const handleDestination = (e) => {
  //   setDestination(e.target.value);
  // };

  // // useEffect(() => {
  // //   handleDestination();
  // // });

  const lowerCase = (string) => {
    // return string.charAt(0).toLowerCase() + string.slice(1);
    return string.toLowerCase();
  };
  return (
    <HeaderHead type={type}>
      <ToastContainer autoClose={5000} />
      <HeaderContainer type={type}>
        <HeaderList>
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
        </HeaderList>
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
                    (e) => setDestination(lowerCase(e.target.value))
                    // setDestination(capitalizeFirstLetter(e.target.value))
                  }
                  required
                />
              </HeaderSearchItems>
              <HeaderSearchItems>
                <Date />
                <Span onClick={() => setOpen(!open)}>{`${format(
                  date[0].startDate,
                  "dd/MM/yyyy"
                )} to ${format(date[0].endDate, "dd/MM/yyyy")} `}</Span>
                {open && (
                  <DateWrapp>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      minDate={new window.Date()}
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
                          onClick={() => handleOption("adult", "i")}
                        >
                          <Minus />
                        </OptionCounterBtn>
                        <OptionCounter>{option.adult}</OptionCounter>
                        <OptionCounterBtn
                          onClick={() => handleOption("adult", "d")}
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
                          onClick={() => handleOption("room", "i")}
                        >
                          <Minus />
                        </OptionCounterBtn>
                        <OptionCounter>{option.room}</OptionCounter>
                        <OptionCounterBtn
                          onClick={() => handleOption("room", "d")}
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
                          onClick={() => handleOption("children", "i")}
                        >
                          <Minus />
                        </OptionCounterBtn>
                        <OptionCounter>{option.children}</OptionCounter>
                        <OptionCounterBtn
                          onClick={() => handleOption("children", "d")}
                        >
                          <Plus />
                        </OptionCounterBtn>
                      </OptionBtnWrapp>
                    </OptionItems>
                  </Option>
                )}
              </HeaderSearchItems>
              <HeaderSearchItems>
                <HeaderSearchBtn
                  // disabled={destination === "" ? true : false}
                  onClick={handleSubmit}
                >
                  {" "}
                  Search
                </HeaderSearchBtn>
              </HeaderSearchItems>
            </HeaderSearch>
          </>
        )}
      </HeaderContainer>
    </HeaderHead>
  );
}

export default Header;