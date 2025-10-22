import React from "react";
import { Box, Typography, Rating, FormControl } from "@mui/material";

const RatingSystem = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Rate Your Experience
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <Typography component="legend">Quality of the Product *</Typography>
        <Rating name="product-quality" size="large" />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <Typography component="legend">Staff Friendliness *</Typography>
        <Rating name="staff-friendliness" size="large" />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <Typography component="legend">Overall Experience *</Typography>
        <Rating name="overall-experience" size="large" />
      </FormControl>
    </Box>
  );
};

export default RatingSystem;
