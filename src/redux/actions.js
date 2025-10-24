export const UPDATE_STEP = 'UPDATE_STEP';
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';
export const SET_VALIDATION_ERRORS = 'SET_VALIDATION_ERRORS';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
export const RESET_FORM = 'RESET_FORM';

export const updateStep = (step) => ({
  type: UPDATE_STEP,
  payload: step,
});

export const updateFormData = (data) => ({
  type: UPDATE_FORM_DATA,
  payload: data,
});

export const setValidationErrors = (errors) => ({
  type: SET_VALIDATION_ERRORS,
  payload: errors,
});

export const submitFormSuccess = () => ({
  type: SUBMIT_FORM_SUCCESS,
});

export const resetForm = () => ({
  type: RESET_FORM,
});