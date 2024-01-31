import useSWR from "swr";
import addHotel from "../zustand/hotelZustand";

const fecther = (url) => fetch(url).then((res) => res.json());

export const GetHotel = () => {
  const {
    data: hotels,
    isLoading: hotelLoading,
    error: hotelError,
  } = useSWR(`http://localhost:8000/api/v1/hotel/all`, fecther);
  // Handle loading state
  return { hotels, hotelLoading, hotelError };
};
export const GetHotelWithQuery = (limit) => {
  const {
    data: hotels,
    isLoading: hotelLoading,
    error: hotelError,
  } = useSWR(`http://localhost:8000/api/v1/hotel/all?limit=${limit}`, fecther);
  // Handle loading state
  return { hotels, hotelLoading, hotelError };
};

export const GetCity = (item) => {
  const {
    data: city,
    isLoading: cityLoading,
    error: errorCity,
  } = useSWR(`http://localhost:8000/api/v1/place?limit=${item}`, fecther);
  // Handle loading state
  return { city, cityLoading, errorCity };
};
