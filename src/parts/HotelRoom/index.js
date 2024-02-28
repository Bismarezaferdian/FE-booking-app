import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Bed } from "../../components/Header/HeaderStyle";
import {
  HotelDescCancel,
  HotelPerNight,
  HotelPrice,
  Tv,
  Wifi,
} from "../../components/HotelList.js/HotelListStyle";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import { Bath, IconWrapp } from "../HotelDesc/HotelDescStyle";
import {
  ButtonRoom,
  CardRoom,
  Content,
  ContentRoomWrap,
  IconRoom,
  IconRoomWrapp,
  ImageDetail,
  ImageRoomWrapp,
  InputNumb,
  Label,
  PriceDescWrapp,
  RoomContainer,
  RoomContentWrap,
  RoomDesc,
  RoomFasilitas,
  RoomH1,
  RoomTitle,
  SubContent,
  WrapDesc,
} from "./HotelRoomStyle";
import zIndex from "@mui/material/styles/zIndex";
import { combineStore } from "../../zustand/store";

const HotelRoom = ({ id, hotel }) => {
  // console.log(hotel);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const { data, loading } = useFetch(`/api/v1/hotel/room/${id}`);

  const { dates } = combineStore();
  const { date } = useContext(SearchContext);
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const dates = [];

    while (start <= end) {
      dates.push(new Date(start).getTime());
      start.setDate(start.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  console.log(alldates);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const navigate = useNavigate();

  const handleSelected = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRoom(
      checked
        ? [...selectedRoom, value]
        : selectedRoom.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      if (selectedRoom.length <= 0) {
        toast("please selected your room !", { autoClose: 3000 });
      } else {
        await Promise.all(
          selectedRoom.map((roomId) => {
            return axios.put(
              `${process.env.REACT_APP_HOST}/api/v1/room/availability/${roomId}`,
              {
                dates: alldates,
              }
            );
            // return res.data;
          })
        );
        navigate("/steper", { state: { hotel, data } });
      }
    } catch (error) {}
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <RoomContainer id="reservasi">
      <ToastContainer autoClose={3000} />
      <RoomTitle>Select Rooms</RoomTitle>
      {loading ? (
        <Skeleton
          sx={{ bgcolor: "grey" }}
          variant="rectangular"
          width={window.innerWidth < 480 ? 360 : 720}
          height={window.innerWidth < 480 ? 180 : 280}
        />
      ) : (
        <RoomContentWrap>
          {data.map((room, i) => (
            <CardRoom key={i}>
              <ImageRoomWrapp>
                {room.image?.map((item, i) => (
                  <div key={i}>
                    <ImageDetail src={item} />
                  </div>
                ))}
              </ImageRoomWrapp>
              <ContentRoomWrap>
                <RoomH1>{room.title}</RoomH1>
                <SubContent>
                  <IconRoomWrapp>
                    <IconRoom>
                      <Bed /> <WrapDesc>Double Bed</WrapDesc>
                    </IconRoom>
                    <IconRoom>
                      <Wifi />
                      <WrapDesc>Wifi</WrapDesc>
                    </IconRoom>
                    <IconRoom>
                      <Tv />
                      <WrapDesc>Tv</WrapDesc>
                    </IconRoom>
                    <IconRoom>
                      <Bath />
                      <WrapDesc>bathroom</WrapDesc>
                    </IconRoom>
                  </IconRoomWrapp>
                  <PriceDescWrapp>
                    <HotelPrice>idr {rupiah(room.price)}</HotelPrice>
                    <HotelPerNight>1 night 1 room</HotelPerNight>
                    <HotelDescCancel>free cancelation</HotelDescCancel>
                    <ButtonRoom onClick={handleClick}>
                      Reservation Now
                    </ButtonRoom>
                  </PriceDescWrapp>
                </SubContent>
                <Content>
                  {/* <div>
                    <RoomDesc>{room.desc}</RoomDesc>

                    <RoomFasilitas>
                      {room.roomNumbers.map((roomNumber, i) => (
                        <div key={i}>
                          <InputNumb
                            value={roomNumber._id}
                            onChange={handleSelected}
                            disabled={!isAvailable(roomNumber)}
                            // disabled={true}
                          />
                          <Label>{roomNumber.number}</Label>
                        </div>
                      ))}
                    </RoomFasilitas>
                  </div> */}
                </Content>
              </ContentRoomWrap>
            </CardRoom>
          ))}
        </RoomContentWrap>
      )}
    </RoomContainer>
  );
};

export default HotelRoom;
