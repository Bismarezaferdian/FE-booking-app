const useSeacrhStore = (set, get) => ({
  search: {
    city: "",
    date: {
      startDate: null,
      endDate: null,
    },
    option: {
      adult: 1,
      children: 0,
      room: 1,
    },
  },

  onSearch: (item) => {},
});

export default useSeacrhStore;
