import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  destination: JSON.parse(localStorage.getItem("destination")) || "undefined",
  date: JSON.parse(localStorage.getItem("date")) || [],
  option: {
    adult: 1,
    childern: 0,
    room: 1,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

//untuk membungkus di parent
export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  // console.log(state.destination);
  useEffect(() => {
    localStorage.setItem("date", JSON.stringify(state.date));
  }, [state.date]);
  useEffect(() => {
    localStorage.setItem("destination", JSON.stringify(state.destination));
  }, [state.destination]);

  return (
    <SearchContext.Provider
      value={{
        destination: state.destination,
        date: state.date,
        option: state.option,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
