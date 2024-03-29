import { Skeleton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Bed } from "../../components/Header/HeaderStyle";
import {
  HotelDescCancel,
  HotelPerNight,
  HotelPrice,
  Tv,
  Wifi,
} from "../../components/HotelList.js/HotelListStyle";
import { Bath } from "../HotelDesc/HotelDescStyle";
import {
  ButtonRoom,
  CardRoom,
  ContentRoomWrap,
  IconRoom,
  IconRoomWrapp,
  ImageDetail,
  ImageRoomWrapp,
  PriceDescWrapp,
  RoomContainer,
  RoomContentWrap,
  RoomH1,
  RoomTitle,
  SubContent,
  WrapDesc,
} from "./HotelRoomStyle";
import { GetRoom } from "../../hooks/fetchApi";

const HotelRoom = ({ id, hotel }) => {
  // console.log(hotel);
  // const [selectedRoom, setSelectedRoom] = useState([]);
  // const { room, loading } = useFetch(`/api/v1/hotel/room/${id}`);
  const { room, roomLoading, roomError } = GetRoom(id);
  // const { dates } = combineStore();
  // const getDatesInRange = (startDate, endDate) => {
  //   const start = new Date(startDate);
  //   const end = new Date(endDate);

  //   const dates = [];

  //   while (start <= end) {
  //     dates.push(new Date(start).getTime());
  //     start.setDate(start.getDate() + 1);
  //   }

  //   return dates;
  // };

  // const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  // const isAvailable = (roomNumber) => {
  //   const isFound = roomNumber.unavailableDates.some((date) =>
  //     alldates.includes(new Date(date).getTime())
  //   );
  //   return !isFound;
  // };

  const navigate = useNavigate();

  // const handleSelected = (e) => {
  //   const checked = e.target.checked;
  //   const value = e.target.value;
  //   setSelectedRoom(
  //     checked
  //       ? [...selectedRoom, value]
  //       : selectedRoom.filter((item) => item !== value)
  //   );
  // };

  const handleClick = async () => {
    navigate("/steper", { state: { hotel, room } });
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
      {roomLoading ? (
        <Skeleton
          sx={{ bgcolor: "grey" }}
          variant="rectangular"
          width={window.innerWidth < 480 ? 360 : 720}
          height={window.innerWidth < 480 ? 180 : 280}
        />
      ) : (
        <RoomContentWrap>
          {room.map((room, i) => (
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
                {/* <Content> */}
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
                {/* </Content> */}
              </ContentRoomWrap>
            </CardRoom>
          ))}
        </RoomContentWrap>
      )}
    </RoomContainer>
  );
};

export default HotelRoom;
