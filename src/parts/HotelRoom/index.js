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
  CardImgWrap,
  CardRoom,
  Content,
  ContentRoomWrap,
  InputNumb,
  Label,
  RoomContainer,
  RoomContentWrap,
  RoomDesc,
  RoomFasilitas,
  RoomH1,
  RoomImg,
  RoomTitle,
  WrapDesc,
} from "./HotelRoomStyle";

const HotelRoom = ({ id, hotel }) => {
  // console.log(hotel);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const { data, loading } = useFetch(
    `http://localhost:8000/api/v1/hotel/room/${id}`
  );

  console.log(selectedRoom);
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

  const alldates = getDatesInRange(date[0].startDate, date[0].endDate);

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
              `http://localhost:8000/api/v1/room/availability/${roomId}`,
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

  const Image = [
    {
      src: require("../../assets/images/feature-villa1.jpg"),
    },
  ];

  return (
    <RoomContainer id="reservasi">
      <ToastContainer autoClose={3000} />
      <RoomTitle>Check Aviable Rooms</RoomTitle>
      <RoomContentWrap>
        {data.map((room, i) => (
          <CardRoom key={i}>
            <CardImgWrap>
              <RoomImg src={Image[0].src} />
            </CardImgWrap>

            <ContentRoomWrap>
              <RoomH1>{room.title}</RoomH1>
              <IconWrapp>
                <div>
                  <Bed /> <WrapDesc>Double Bed</WrapDesc>
                </div>
                <div>
                  <Wifi />
                  <WrapDesc>Wifi</WrapDesc>
                </div>
                <div>
                  <Tv />
                  <WrapDesc>Tv</WrapDesc>
                </div>
                <div>
                  <Bath />
                  <WrapDesc>bathroom</WrapDesc>
                </div>
              </IconWrapp>
              <Content>
                <div>
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
                </div>
                <div style={{ textAlign: "right", marginRight: "20px" }}>
                  <HotelPrice>idr {rupiah(room.price)}</HotelPrice>
                  <HotelPerNight>1 night 1 room</HotelPerNight>
                  <HotelDescCancel>free cancelation</HotelDescCancel>
                  <ButtonRoom onClick={handleClick}>Reservation Now</ButtonRoom>
                </div>
              </Content>
            </ContentRoomWrap>
          </CardRoom>
        ))}
      </RoomContentWrap>
    </RoomContainer>
  );
};

export default HotelRoom;
