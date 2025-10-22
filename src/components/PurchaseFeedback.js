import React from "react";
import { TextField, FormControl, FormGroup, FormControlLabel, Checkbox, Box, Typography } from "@mui/material";

const products = [
  "T-Shirts", "Jeans", "Dresses", "Jackets", "Shoes", "Accessories", "Sportswear", "Formal Wear"
];

const PurchaseFeedback = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Purchase Feedback
      </Typography>
      
      <TextField
        fullWidth
        label="Date of Purchase"
        type="date"
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />

      <FormControl component="fieldset" fullWidth sx={{ mt: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Products Purchased *
        </Typography>
        <FormGroup row>
          {products.map((product) => (
            <FormControlLabel
              key={product}
              control={<Checkbox />}
              label={product}
            />
          ))}
        </FormGroup>
      </FormControl>

      <TextField
        fullWidth
        label="Your Feedback"
        multiline
        rows={4}
        margin="normal"
        required
      />
    </Box>
  );
};

export default PurchaseFeedback;
