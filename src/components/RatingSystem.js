import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RatingSystem = () => {
  const [ratings, setRatings] = useState({
    productQuality: 0,
    staffFriendliness: 0,
    overallExperience: 0
  });

  const handleRating = (category, value) => {
    setRatings(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const StarRating = ({ category, label }) => (
    <div className="mb-4">
      <label className="form-label d-block">
        {label} <span className="text-danger">*</span>
      </label>
      <div className="d-flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`btn btn-star me-1 ${ratings[category] >= star ? 'text-warning' : 'text-secondary'}`}
            onClick={() => handleRating(category, star)}
            style={{ 
              background: 'none', 
              border: 'none', 
              fontSize: '2rem',
              cursor: 'pointer'
            }}
          >
            ★
          </button>
        ))}
      </div>
      <small className="text-muted">
        {ratings[category] > 0 ? `Selected: ${ratings[category]} star${ratings[category] > 1 ? 's' : ''}` : 'Click to rate'}
      </small>
    </div>
  );

  return (
    <div className="container-fluid">
      <h4 className="mb-4 text-primary">Rate Your Experience</h4>
      
      <StarRating 
        category="productQuality" 
        label="Quality of the Product" 
      />
      
      <StarRating 
        category="staffFriendliness" 
        label="Staff Friendliness" 
      />
      
      <StarRating 
        category="overallExperience" 
        label="Overall Experience" 
      />
    </div>
  );
};

export default RatingSystem;