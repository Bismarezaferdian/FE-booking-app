const usePropertyTypeStore = (set) => ({
  PropertyType: null,
  getPropertyType: (item) => {
    set(() => ({
      PropertyType: item,
    }));
  },
});

export default usePropertyTypeStore;
