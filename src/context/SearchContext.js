import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  destination: JSON.parse(localStorage.getItem("destination")) || "undefined",
  date: JSON.parse(localStorage.getItem("date")) || [],
  option: JSON.parse(localStorage.getItem("option")) || {
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
    if (state.date) {
      localStorage.setItem("date", JSON.stringify(state.date));
    } else if (state.destination) {
      localStorage.setItem("destination", JSON.stringify(state.destination));
    } else if (state.option) {
      localStorage.setItem("option", JSON.stringify(state.option));
    }
  }, [state.date, state.destination, state.option]);

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
