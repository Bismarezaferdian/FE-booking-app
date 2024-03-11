import useSWR from "swr";
import addHotel from "../zustand/hotelZustand";

const fecther = (url) => fetch(url).then((res) => res.json());

// export const GetHotel = () => {
//   const {
//     data: hotels,
//     isLoading: hotelLoading,
//     error: hotelError,
//   } = useSWR(`${process.env.REACT_APP_HOST}/api/v1/hotel/all`, fecther);
//   // Handle loading state
//   return { hotels, hotelLoading, hotelError };
// };

export const GetHotel = (limit) => {
  let apiUrl = `${process.env.REACT_APP_HOST}/api/v1/hotel/all`;

  if (limit !== null && limit !== undefined) {
    apiUrl += `?limit=${limit}`;
  }

  const {
    data: hotels,
    isLoading: hotelLoading,
    error: hotelError,
  } = useSWR(apiUrl, fecther);
  // Handle loading state
  return { hotels, hotelLoading, hotelError };
};

export const GetCity = (limit) => {
  let apiUrl = `${process.env.REACT_APP_HOST}/api/v1/place/count`;

  if (limit !== null && limit !== undefined) {
    apiUrl += `?limit=${limit}`;
  }

  const {
    data: city,
    isLoading: cityLoading,
    error: errorCity,
  } = useSWR(apiUrl, fecther);
  // Handle loading state
  return { city, cityLoading, errorCity };
};

export const GetCityWithAllHotel = (limit) => {
  const {
    data: cityWithHotel,
    isLoading: cityWithHotelLoading,
    error: cityWithHotelError,
  } = useSWR(
    `${process.env.REACT_APP_HOST}/api/v1/place/count?limit=${limit}`,
    fecther
  );
  // Handle loading state
  return { cityWithHotel, cityWithHotelLoading, cityWithHotelError };
};

export const GetProvince = () => {
  const {
    data: province,
    isLoading: provinceLoading,
    error: provinceError,
  } = useSWR(`${process.env.REACT_APP_HOST}/api/v1/province`, fecther);
  // Handle loading state
  return { province, provinceLoading, provinceError };
};

export const GetProperties = () => {
  const {
    data: properties,
    isLoading: propertiesLoading,
    error: propertiesError,
  } = useSWR(`${process.env.REACT_APP_HOST}/api/v1/properties/count`, fecther);

  return { properties, propertiesLoading, propertiesError };
};

export const GetMostHotel = () => {
  const {
    data: mostHotel,
    isLoading: mostHotelLoading,
    error: mostHotelError,
  } = useSWR(
    `${process.env.REACT_APP_HOST}/api/v1/hotel/all?feature=true&limit=4`,
    fecther
  );
  return { mostHotel, mostHotelLoading, mostHotelError };
};
