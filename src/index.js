import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "swiper/css/bundle";
// import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import reportWebVitals from "./reportWebVitals";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContex";
import { BookingContextProvider } from "./context/BookingContex";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <React.StrictMode> */}
    <AuthContextProvider>
      <SearchContextProvider>
        <BookingContextProvider>
          <BrowserRouter>
            <App />
            <Footer />
          </BrowserRouter>
        </BookingContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
    {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
