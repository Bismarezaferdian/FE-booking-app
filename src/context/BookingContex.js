import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  //   fistName: JSON.parse(localStorage.getItem("firstName")) || "undefined",
  //   lastName: JSON.parse(localStorage.getItem("lastName")) || "undefined",
  //   email: JSON.parse(localStorage.getItem("email")) || "undefined",
  //   phoneNumber: JSON.parse(localStorage.getItem("phoneNumber")) || "undefined",
  booking: JSON.parse(localStorage.getItem("booking")) || null,
  //   {
  //     fistName: "bisma",
  //     lastName: "reza",
  //     email: "bismareza@gmail.com",
  //     phoneNumber: "082211666095",
  //   },
};

export const BookingContext = createContext(INITIAL_STATE);

const BookingReducer = (state, action) => {
  switch (action.type) {
    case "NEW_BOOKING":
      return action.payload;
    case "RESET_BOOKING":
      return INITIAL_STATE;
    default:
      return state;
  }
};

//untuk membungkus di parent
export const BookingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookingReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("booking", JSON.stringify(state.booking));
  }, [state.booking]);

  return (
    <BookingContext.Provider
      value={{
        booking: state.booking,
        dispatch,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
