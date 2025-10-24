import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerInfo = () => {
  return (
    <div className="container-fluid">
      <h4 className="mb-4 text-primary">Customer Information</h4>
      
      <div className="mb-3">
        <label className="form-label">Full Name <span className="text-danger">*</span></label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter your full name" 
          required 
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Email Address <span className="text-danger">*</span></label>
        <input 
          type="email" 
          className="form-control" 
          placeholder="Enter your email address" 
          required 
        />
      </div>
      
      <div className="mb-3">
        <label className="form-label">Phone Number <span className="text-danger">*</span></label>
        <input 
          type="tel" 
          className="form-control" 
          placeholder="Enter your phone number" 
          required 
        />
      </div>
    </div>
  );
};

export default CustomerInfo;