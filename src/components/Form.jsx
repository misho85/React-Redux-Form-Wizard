import React from "react";
import Paper from "@material-ui/core/Paper";
import HorizontalStepper from "./HorizontalStepper";
import Box from "@material-ui/core/Box";

const Form = () => {
  return (
    <Box py={{ xs: 2, sm: 4, md: 8 }}>
      <Paper elevation={4}>
        <HorizontalStepper />
      </Paper>
    </Box>
  );
};

export default Form;
