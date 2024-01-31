import { create } from "zustand";
import useHotelStore from "./hotelZustand";
import { persist } from "zustand/middleware";

export const combineStore = create(
  persist(
    (set, get) => ({
      ...useHotelStore(set, get),
      // ...useCartStore(set, get),
    }),
    {
      name: "store",
      skipHydration: true,
    }
  )
);
