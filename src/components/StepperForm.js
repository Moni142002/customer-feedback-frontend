import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  "Confirmation"
];

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
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
      case 0: return <CustomerInfo />;
      case 1: return <PurchaseFeedback />;
      case 2: return <RatingSystem />;
      case 3: return <SignaturePad />;
      case 4: return <SuccessMessage onReset={handleReset} />;
      default: return null;
    }
  };

  if (isSubmitted) {
    return <SuccessMessage onReset={handleReset} />;
  }

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body p-4">
          <h1 className="card-title text-center text-primary mb-4">
            Customer Feedback Form
          </h1>
          
          {/* Bootstrap Stepper */}
          <div className="stepper mb-4">
            <div className="d-flex justify-content-between">
              {steps.map((step, index) => (
                <div key={step} className="d-flex flex-column align-items-center">
                  <div 
                    className={`rounded-circle mb-2 ${
                      index <= currentStep ? 'bg-primary' : 'bg-secondary'
                    }`}
                    style={{
                      width: '30px',
                      height: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '14px'
                    }}
                  >
                    {index + 1}
                  </div>
                  <small className="text-center" style={{ fontSize: '12px', maxWidth: '80px' }}>
                    {step}
                  </small>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="mt-3">
            {renderStepContent(currentStep)}
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <button 
              className="btn btn-outline-secondary"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              Back
            </button>
            
            {currentStep < steps.length - 1 ? (
              <button 
                className="btn btn-primary"
                onClick={handleNext}
              >
                {currentStep === steps.length - 2 ? 'Review' : 'Next'}
              </button>
            ) : (
              <button 
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit Feedback
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperForm;