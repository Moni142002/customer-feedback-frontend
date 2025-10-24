import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SuccessMessage = ({ onReset }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card border-0 shadow">
            <div className="card-body py-5">
              <div className="text-success mb-3">
                <i className="bi bi-check-circle-fill" style={{ fontSize: '4rem' }}></i>
              </div>
              
              <h2 className="card-title text-success mb-3">Thank You!</h2>
              
              <h5 className="card-subtitle mb-3">
                Your feedback has been submitted successfully.
              </h5>
              
              <p className="card-text text-muted mb-4">
                We appreciate you taking the time to share your experience with us. 
                Your feedback helps us improve our services.
              </p>
              
              <button 
                className="btn btn-primary btn-lg"
                onClick={onReset}
              >
                Submit Another Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;