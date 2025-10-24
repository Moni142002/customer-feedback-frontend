import {
  UPDATE_STEP,
  UPDATE_FORM_DATA,
  SET_VALIDATION_ERRORS,
  SUBMIT_FORM_SUCCESS,
  RESET_FORM,
} from './actions';

const initialState = {
  currentStep: 0,
  formData: {
    customerInfo: {
      fullName: '',
      email: '',
      phone: '',
    },
    purchaseFeedback: {
      dateOfPurchase: new Date().toISOString().split('T')[0],
      productsPurchased: [],
      feedback: '',
    },
    ratings: {
      productQuality: 0,
      staffFriendliness: 0,
      overallExperience: 0,
    },
    signature: '',
  },
  validationErrors: {},
  isSubmitted: false,
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };

    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };

    case SET_VALIDATION_ERRORS:
      return {
        ...state,
        validationErrors: action.payload,
      };

    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        isSubmitted: true,
      };

    case RESET_FORM:
      return initialState;

    default:
      return state;
  }
};

export default feedbackReducer;