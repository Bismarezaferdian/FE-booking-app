import React from "react";
import ContainerWrapp from "../../components/ContainerWrapp";
import Card from "../../element/Card";
import Bogor from "../../assets/images/bogor-display.jpg";
import {
  ButtonShowAll,
  Content,
  ContentContainer,
  HeadTitle,
  SubTitle,
  WrappContent,
  WrappRekomendasi,
} from "./Hotel";
import { GetCity, GetHotel, GetHotelWithQuery } from "../../hooks/fetchApi";
import Hero from "../../components/Hero";
import Header from "../../components/Header";

const Hotel = () => {
  const { hotels, hotelLoading, hotelError } = GetHotelWithQuery(5);

  console.log(hotels);
  const { city, cityLoading, cityError } = GetCity(5);

  return (
    <ContainerWrapp>
      <Header />
      <Hero img={Bogor} />
      <ContentContainer>
        <WrappContent>
          <HeadTitle>Penginapan Nyaman untukmu </HeadTitle>
          <SubTitle>Liburan bareng keluarga setelah penatnya bekerja </SubTitle>
          <Content>
            {hotels &&
              hotels.map((item) => (
                <Card image={item.photo[0]} title={item.name} />
              ))}
          </Content>
          <ButtonShowAll>Lihat semua</ButtonShowAll>
        </WrappContent>
      </ContentContainer>
      {/* daerah */}
      <ContentContainer>
        <WrappContent>
          <HeadTitle> Berkeliling melihat keindahan indonesia </HeadTitle>
          <SubTitle>
            Ajak keluarga anda untuk keliling ke seluruh indonesia dengan rileks
            di hotel di berbagai destinasi domestik menarik
          </SubTitle>
          <Content>
            {city &&
              city.map((item) => <Card image={item.image} title={item.city} />)}
          </Content>
          <ButtonShowAll>Lihat semua</ButtonShowAll>
        </WrappContent>
      </ContentContainer>
    </ContainerWrapp>
  );
};

export default Hotel;
