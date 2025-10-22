import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

const SignaturePad = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Signature
      </Typography>
      
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Please sign in the box below
      </Typography>

      <Paper variant="outlined" sx={{ height: 200, mb: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography color="textSecondary">
          Signature Area - Would use react-signature-canvas in full version
        </Typography>
      </Paper>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button variant="outlined">Clear Signature</Button>
        <Button variant="contained">Save Signature</Button>
      </Box>

      <Button variant="contained" color="primary" size="large" fullWidth>
        Submit Feedback
      </Button>
    </Box>
  );
};

export default SignaturePad;
