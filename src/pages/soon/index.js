import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const Soon = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Box sx={{ width: "100%" }}>
        <Grid container></Grid>
      </Box>
    </>
  );
};

export default Soon;
