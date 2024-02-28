import { create } from "zustand";
import useHotelStore from "./hotelZustand";
import useSeacrhStore from "./searchZustand";
import { persist } from "zustand/middleware";

export const combineStore = create(
  persist(
    (set, get) => ({
      ...useHotelStore(set, get),
      ...useSeacrhStore(set, get),
      // ...useCartStore(set, get),
    }),
    {
      name: "store",
      skipHydration: true,
    }
  )
);
