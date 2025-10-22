import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import CustomerInfo from "./CustomerInfo";
import PurchaseFeedback from "./PurchaseFeedback";
import RatingSystem from "./RatingSystem";
import SignaturePad from "./SignaturePad";
import SuccessMessage from "./SuccessMessage";

const steps = [
  "Customer Information",
  "Purchase Feedback",
  "Ratings",
  "Signature",
  "Confirmation",
];

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <CustomerInfo />;
      case 1:
        return <PurchaseFeedback />;
      case 2:
        return <RatingSystem />;
      case 3:
        return <SignaturePad />;
      case 4:
        return <SuccessMessage onReset={handleReset} />;
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return <SuccessMessage onReset={handleReset} />;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
          Customer Feedback Form
        </Typography>
        
        <Stepper activeStep={currentStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ mt: 2 }}>
          {renderStepContent(currentStep)}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button disabled={currentStep === 0} onClick={handleBack} variant="outlined">
            Back
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button variant="contained" onClick={handleNext} color="primary">
              {currentStep === steps.length - 2 ? "Review" : "Next"}
            </Button>
          ) : (
            <Button variant="contained" onClick={handleSubmit} color="success">
              Submit Feedback
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default StepperForm;
