import React from "react";
import ContainerWrapp from "../../components/ContainerWrapp";
import Card from "../../element/Card";
import HeroImg from "../../assets/images/feature-villa3.jpg";
import {
  ButtonShowAll,
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
import PropertyPart from "../../components/PropertyPart";
import Mail from "../../components/Mail.js";

const Hotel = () => {
  const { hotels, hotelLoading, hotelError } = GetHotel(5);

  const { city, cityLoading, cityError } = GetCity(5);

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
      <ContainerWrapp>
        <Hero img={HeroImg} />
        <ContentContainer>
          <WrappContent>
            <HeadTitle>Penginapan Nyaman untukmu </HeadTitle>
            <SubTitle>
              Liburan bareng keluarga setelah penatnya bekerja{" "}
            </SubTitle>
            <Place city={city} />
            <Content>
              {hotelLoading
                ? hotelLoad()
                : hotels.map((item) => (
                    <div key={item._id}>
                      <LinkToDetail to={`/hotels/${item._id}`}>
                        <Card
                          image={item.photo[0]}
                          title={item.name}
                          subTitle={item.properties?.name}
                          location={item.place?.city}
                        />
                      </LinkToDetail>
                    </div>
                  ))}
            </Content>
            <ButtonShowAll to="/hotels">Lihat semua</ButtonShowAll>
          </WrappContent>
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
        </ContentContainer>
        <Mail />
      </ContainerWrapp>
    </>
  );
};

export default Hotel;
