import React, { useEffect, useState } from "react";
import ContainerWrapp from "../../components/ContainerWrapp";
import Card from "../../element/Card";
import HeroImg from "../../assets/images/feature-villa3.jpg";
import {
  ButtonShowAll,
  CardWrapp,
  Content,
  ContentContainer,
  HeadTitle,
  LinkToDetail,
  PlaceWrapp,
  Province,
  ProvinceContent,
  ProvinceWrapp,
  SubTitle,
  WrappContent,
  WrappRekomendasi,
} from "./Hotel";
import {
  GetCity,
  GetHotel,
  GetHotelWithQuery,
  GetProvince,
} from "../../hooks/fetchApi";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Place from "../../parts/PlaceSlider";
import { Box, Skeleton } from "@mui/material";
import PropertyPart from "../../components/MostHotel/index.js";
import Mail from "../../components/Mail.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const Hotel = () => {
  const { hotels, hotelLoading, hotelError } = GetHotel(5);
  const { city, cityLoading, cityError } = GetCity(5);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      // Set window width/height to statl
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
  }, []);

  const hotelLoad = () => {
    return (
      <>
        <Box sx={{ pt: 0.5 }}>
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
        <Box sx={{ pt: 0.5 }}>
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
        <Box sx={{ pt: 0.5 }}>
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
        <Box sx={{ pt: 0.5 }}>
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
        <Box sx={{ pt: 0.5 }}>
          <Skeleton variant="rectangular" width="100%" height={118} />
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <ContainerWrapp id="hotel">
        <Hero img={HeroImg} />
        <ContentContainer>
          <WrappContent>
            <HeadTitle>Penginapan Nyaman untukmu </HeadTitle>
            <SubTitle>
              Liburan bareng keluarga setelah penatnya bekerja{" "}
            </SubTitle>
            {/* <Place city={city} /> */}
            <Content>
              <Swiper
                slidesPerView={windowSize.width < 640 ? 3.5 : 4.5}
                // slidesPerView={4.5}
                spaceBetween={10}
                draggable={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {hotelLoading
                  ? hotelLoad()
                  : hotels.map((item) => (
                      <SwiperSlide>
                        {/* <CardWrapp key={item.i}> */}
                        <LinkToDetail to={`/hotels/${item._id}`}>
                          <Card
                            image={item.photo[0]}
                            title={item.name}
                            subTitle={item.properties?.name}
                            location={item.place?.city}
                          />
                        </LinkToDetail>
                        {/* </CardWrapp> */}
                      </SwiperSlide>
                    ))}
              </Swiper>
            </Content>
          </WrappContent>
          <ButtonShowAll to="/hotels">Lihat semua</ButtonShowAll>
        </ContentContainer>
        {/* daerah */}

        <ContentContainer>
          <WrappContent>
            <HeadTitle> Berkeliling melihat keindahan indonesia </HeadTitle>
            <SubTitle>
              Ajak keluarga anda untuk keliling ke seluruh indonesia dengan
              rileks di hotel di berbagai destinasi domestik menarik
            </SubTitle>
            <Content>
              <Swiper
                slidesPerView={windowSize.width < 640 ? 3.5 : 4.5}
                spaceBetween={10}
                draggable={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {cityLoading
                  ? hotelLoad()
                  : city.map((item) => (
                      <SwiperSlide>
                        {/* <CardWrapp key={item.i}> */}
                        <Card
                          image={item.image}
                          title={item.city}
                          subTitle={
                            item.countAllHotel?.length > 1
                              ? item.countAllHotel?.length + " items"
                              : item.countAllHotel?.length + " item"
                          }
                        />
                        {/* </CardWrapp> */}
                      </SwiperSlide>
                    ))}
              </Swiper>
            </Content>
          </WrappContent>
          <ButtonShowAll to="/hotels">Lihat semua</ButtonShowAll>
        </ContentContainer>

        <Mail />
      </ContainerWrapp>
    </>
  );
};

export default Hotel;

// {
/* <ContentContainer>
<WrappContent>
  <HeadTitle> Berkeliling melihat keindahan indonesia </HeadTitle>
  <SubTitle>
    Ajak keluarga anda untuk keliling ke seluruh indonesia dengan
    rileks di hotel di berbagai destinasi domestik menarik
  </SubTitle>
  <Content>
    {cityLoading
      ? hotelLoad()
      : city.map((item) => (
          <div key={item._id}>
            <Card
              image={item.image}
              title={item.city}
              subTitle={
                item.countAllHotel?.length > 1
                  ? item.countAllHotel?.length + " items"
                  : item.countAllHotel?.length + " item"
              }
            />
          </div>
        ))}
  </Content>
  <ButtonShowAll to="#">Lihat semua</ButtonShowAll>
</WrappContent>
</ContentContainer> */
// }
