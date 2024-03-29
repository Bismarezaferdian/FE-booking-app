const propertyTypeZustand = (set) => ({
  propertyType: null,
  isLoadingProperty: false,
  errorProperty: null,

  getPropertyType: (item) => {
    set(() => ({
      propertyType: item,
    }));
  },
  updateError: (error) => {
    // console.log(error);
    set(() => ({
      errorProperty: error,
    }));
  },
});

export default propertyTypeZustand;
