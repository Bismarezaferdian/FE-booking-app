import { create } from "zustand";
import useHotelStore from "./hotelZustand.js";
import useSeacrhStore from "./searchZustand.js";
import usePropertyTypeStore from "./propertyTypeZustand.js";
import { persist } from "zustand/middleware";

export const combineStore = create(
  persist(
    (set, get) => ({
      ...useHotelStore(set, get),
      ...useSeacrhStore(set, get),
      ...usePropertyTypeStore(set, get),
      // ...useCartStore(set, get),
    }),
    {
      name: "store",
      skipHydration: true,
    }
  )
);
