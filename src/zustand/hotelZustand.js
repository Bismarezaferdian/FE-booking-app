const useHotelStore = (set, get) => ({
  hotel: null,
  addHotel: (item) => {
    set((state) => ({
      hotel: item,
    }));
  },
});

export default useHotelStore;
