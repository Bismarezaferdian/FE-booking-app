import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
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
  PropertiWrapp,
  SpanDate,
  WrappSkeleton,
} from "./ListStyle";
import { Date } from "../../components/Header/HeaderStyle";
import { DateRange } from "react-date-range";
import HotelList from "../../components/HotelList.js/index";
import Mail from "../../components/Mail.js";
import { Skeleton } from "@mui/material";
import { combineStore } from "../../zustand/store.js";
import { GetHotel } from "../../hooks/fetchApi.js";
import { dateId } from "../../utiltis/dateId.js";
import MostHotel from "../../components/MostHotel/index.js";

const List = () => {
  const { PropertyType, hotel, addHotel } = combineStore();
  const [search, setSearch] = useState("jakarta");
  const [openDate, setOpenDate] = useState("false");
  const { option, dates, addDate } = combineStore();
  // const [option, setOption] = useState(location.state.option);
  const [date, setDate] = useState([
    {
      startDate: new window.Date(),
      endDate: new window.Date(),
      key: "selection",
    },
  ]);

  const { hotels, hotelLoading, hotelError } = GetHotel();

  console.log(hotels);
  useEffect(() => {
    if (hotels) {
      addHotel(hotels);
    }
  }, [hotels, addHotel]);

  useEffect(() => {
    if (search) {
      const filter = hotels
        ?.map((hotel) => hotel)
        .filter((item) => item?.place?.city === search);
      addHotel(filter);
    }
  }, [search, hotels, addHotel]);

  console.log(hotel);

  useEffect(() => {
    combineStore.persist.rehydrate();
  }, []);

  const handleClick = (item) => {
    setSearch(item);
  };

  //update to store Zustand
  const handleDate = (e) => {
    setDate([e.selection]);
    addDate([e.selection]);
  };

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
                placeholder={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Location />
            </ListItem>
            <ListItem>
              <ListLabel>check-in date</ListLabel>
              <SpanDate>
                {" "}
                <Date />
                <ListDate onClick={() => setOpenDate(!openDate)}>
                  {`${dateId(dates[0].startDate, "dd/MM/yyyy")} to ${dateId(
                    dates[0].endDate,
                    "dd/MM/yyyy"
                  )} `}
                </ListDate>
              </SpanDate>

              {!openDate && (
                <ListDateWrapp>
                  <DateRange
                    onChange={(e) => handleDate(e)}
                    moveRangeOnFirstSelection={false}
                    minDate={new window.Date()}
                    ranges={date}
                  />
                </ListDateWrapp>
              )}
            </ListItem>
            <ListItem>
              <ListTitle>Option</ListTitle>
              {/* <ListOption>
                <ListLabelOption>Min Price per night</ListLabelOption>
                <ListOptionInput onChange={(e) => setMin(e.target.value)} />
              </ListOption>
              <ListOption>
                <ListLabelOption>Max Price per night</ListLabelOption>
                <ListOptionInput onChange={(e) => setMax(e.target.value)} />
              </ListOption> */}
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
            {hotelLoading ? (
              <WrappSkeleton>
                <Skeleton
                  variant="rectangular"
                  width={window.innerWidth < 480 ? 360 : 720}
                  height={window.innerWidth < 480 ? 180 : 280}
                />
                <Skeleton
                  variant="rectangular"
                  width={window.innerWidth < 480 ? 360 : 720}
                  height={window.innerWidth < 480 ? 180 : 280}
                />
              </WrappSkeleton>
            ) : (
              <div>
                {hotels &&
                  hotels?.map((item) => (
                    <HotelList item={item} key={item._id} />
                  ))}
              </div>
            )}
          </ListResult>
        </ListWrapp>
      </ListContainer>
      <PropertiWrapp>
        {/* <PropertyPart /> */}
        <MostHotel data={PropertyType} />
      </PropertiWrapp>
      <Mail />
    </ListSec>
  );
};

export default List;
