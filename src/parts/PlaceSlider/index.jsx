import React from "react";
// import required modules
import { Province, ProvinceContent, ProvinceWrapp, PlaceWrapp } from "./Place";
import { GetProperties } from "../../hooks/fetchApi";
import { Skeleton } from "@mui/material";
//props city from list city of hotel
const PlaceSlider = ({ city }) => {
  //form list provice
  const { properties, propertiesLoading, propertiesError } = GetProperties();
  const loading = () => {
    return (
      <>
        <>
          <Skeleton />
        </>
        <>
          <Skeleton />
        </>
        <>
          <Skeleton />
        </>
        <>
          <Skeleton />
        </>
        <>
          <Skeleton />
        </>
      </>
    );
  };

  return (
    <PlaceWrapp>
      {propertiesLoading
        ? loading()
        : properties?.map((item, i) => (
            <ProvinceWrapp>
              <ProvinceContent key={i}>
                <Province>{item.name}</Province>
              </ProvinceContent>
            </ProvinceWrapp>
          ))}
    </PlaceWrapp>
  );
};

export default PlaceSlider;
