import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Booking from "../../parts/Booking";
import Navbar from "../../components/Navbar";
import Payment from "../../parts/Payment";
import { HomeCountainer } from "../../pages/Home/HomeStyle";
import { Buttonwrapp, SteperContent, StepperWrap } from "./SteperStyle";
// import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { BookingContext } from "../../context/BookingContex";
import { dateId } from "../../utiltis/dateId";
import axios from "axios";
import Completed from "../../parts/Completed";
import { combineStore } from "../../zustand/store";

const steps = ["Booking Information", "Payment", "Completed"];

export default function Steper() {
  const [booking, setBooking] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [payment, setPayment] = useState({
    bankFrom: "",
    bankAccountName: "",
  });

  const [error, setError] = useState(false);
  // const location = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  // const [hotel] = useState({
  //   title: location.state.hotel.title,
  //   price: location.state.hotel.cheapestPrice,
  // });
  // const [data, setData] = useState();
  const [setData] = useState();
  const { dates } = combineStore();
  // const { date } = useContext(SearchContext);
  const startDate = dateId(dates[0].startDate);
  const endDate = dateId(dates[0].endDate);

  const payload = {
    firstName: booking.firstName,
    lastName: booking.lastName,
    email: booking.email,
    phoneNumber: booking.phoneNumber,
    bankFrom: payment.bankFrom,
    bankAccountName: payment.bankAccountName,
    startDate: startDate,
    endDate: endDate,
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const { dispatch } = useContext(BookingContext);
  const handleNext = async () => {
    if (
      activeStep === 0 &&
      (booking.firstName === "" ||
        booking.lastName === "" ||
        booking.email === "" ||
        booking.phoneNumber === "")
    ) {
      return setError(!error);
    }

    if (activeStep === 1) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_HOST}/api/v1/booking`,
          payload
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    dispatch({
      type: "NEW_BOOKING",
      payload: { booking },
    });
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <StepperWrap>
      <Navbar />
      <HomeCountainer>
        <Box container="true" sx={{ width: "80%" }}>
          <SteperContent>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Optional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {activeStep === 0 && (
              <>
                <Booking
                  // hotel={hotel}
                  // booking={booking}
                  setBooking={setBooking}
                  error={error}
                />
              </>
            )}
            {activeStep === 1 && (
              <Payment
                date={dates}
                payment={payment}
                handleNext={handleNext}
                activeStep={activeStep}
                setPayment={setPayment}
              />
            )}
            {activeStep === 2 && <Completed />}
            <Buttonwrapp>
              <Button onClick={handleNext} align="center">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Buttonwrapp>
            <Buttonwrapp>
              <Button
                onClick={handleBack}
                disabled={activeStep === 0}
                align="center"
              >
                back
              </Button>
            </Buttonwrapp>
          </SteperContent>
        </Box>
      </HomeCountainer>
    </StepperWrap>
  );
}
