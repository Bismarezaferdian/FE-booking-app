const useSeacrhStore = (set, get) => ({
  city: "",
  dates: [
    {
      startDate: new window.Date(),
      endDate: new window.Date(),
      key: "selection",
    },
  ],

  option: {
    adult: 1,
    children: 0,
    room: 1,
  },

  addCity: (item) => {
    set((state) => ({
      ...state,
      city: item,
    }));
  },

  addDate: (item) => {
    console.log(item);
    set((state) => ({
      ...state,
      dates: item,
    }));
  },

  updateOption: (name, operation) => {
    set((state) => ({
      option: {
        ...state.option,
        [name]:
          operation === "i" ? state.option[name] - 1 : state.option[name] + 1,
      },
    }));
  },
});

export default useSeacrhStore;
