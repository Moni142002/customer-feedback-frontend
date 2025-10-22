import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const CustomerInfo = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Customer Information
      </Typography>
      
      <TextField
        fullWidth
        label="Full Name"
        margin="normal"
        required
      />
      
      <TextField
        fullWidth
        label="Email Address"
        type="email"
        margin="normal"
        required
      />
      
      <TextField
        fullWidth
        label="Phone Number"
        margin="normal"
        required
      />
    </Box>
  );
};

export default CustomerInfo;
