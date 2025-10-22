import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const SuccessMessage = ({ onReset }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="400px">
      <CheckCircle sx={{ fontSize: 80, color: "success.main", mb: 2 }} />
      
      <Typography variant="h4" component="h2" gutterBottom color="success.main">
        Thank You!
      </Typography>
      
      <Typography variant="h6" component="p" gutterBottom align="center">
        Your feedback has been submitted successfully.
      </Typography>
      
      <Typography variant="body1" color="textSecondary" align="center" sx={{ mb: 4 }}>
        We appreciate you taking the time to share your experience with us.
      </Typography>
      
      <Button variant="contained" color="primary" size="large" onClick={onReset}>
        Submit Another Feedback
      </Button>
    </Box>
  );
};

export default SuccessMessage;
