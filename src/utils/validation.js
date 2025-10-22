export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s-()]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateStep = (step, formData) => {
  const errors = {};

  switch (step) {
    case 0: // Customer Info
      if (!formData.customerInfo.fullName.trim()) {
        errors.fullName = 'Full name is required';
      }
      if (!formData.customerInfo.email) {
        errors.email = 'Email is required';
      } else if (!validateEmail(formData.customerInfo.email)) {
        errors.email = 'Please enter a valid email address';
      }
      if (!formData.customerInfo.phone) {
        errors.phone = 'Phone number is required';
      } else if (!validatePhone(formData.customerInfo.phone)) {
        errors.phone = 'Please enter a valid phone number';
      }
      break;

    case 1: // Purchase Feedback
      if (formData.purchaseFeedback.productsPurchased.length === 0) {
        errors.productsPurchased = 'Please select at least one product';
      }
      if (!formData.purchaseFeedback.feedback.trim()) {
        errors.feedback = 'Feedback is required';
      }
      break;

    case 2: // Ratings
      if (formData.ratings.productQuality === 0) {
        errors.productQuality = 'Please rate product quality';
      }
      if (formData.ratings.staffFriendliness === 0) {
        errors.staffFriendliness = 'Please rate staff friendliness';
      }
      if (formData.ratings.overallExperience === 0) {
        errors.overallExperience = 'Please rate overall experience';
      }
      break;

    case 3: // Signature
      if (!formData.signature) {
        errors.signature = 'Signature is required';
      }
      break;

    default:
      break;
  }

  return errors;
};
