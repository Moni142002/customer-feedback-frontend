import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  "T-Shirts", "Jeans", "Dresses", "Jackets", "Shoes", 
  "Accessories", "Sportswear", "Formal Wear"
];

const PurchaseFeedback = () => {
  return (
    <div className="container-fluid">
      <h4 className="mb-4 text-primary">Purchase Feedback</h4>
      
      <div className="mb-3">
        <label className="form-label">Date of Purchase</label>
        <input 
          type="date" 
          className="form-control" 
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Products Purchased <span className="text-danger">*</span></label>
        <div className="row">
          {products.map((product, index) => (
            <div key={product} className="col-md-6 col-lg-4 mb-2">
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id={`product-${index}`}
                />
                <label className="form-check-label" htmlFor={`product-${index}`}>
                  {product}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Your Feedback <span className="text-danger">*</span></label>
        <textarea 
          className="form-control" 
          rows="4" 
          placeholder="Tell us about your experience..."
          required
        ></textarea>
      </div>
    </div>
  );
};

export default PurchaseFeedback;