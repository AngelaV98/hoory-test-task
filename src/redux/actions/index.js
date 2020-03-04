import {
  NEXT_STEP,
  SET_ASSISTANT_NAME,
  SET_ASSISTANT_GENDER,
  SET_SCHEME_COLOR,
  SIGN_UP_ASSISTANT,
  SIGN_IN_ASSISTANT
} from "../constants";

const nextStep = {
  type: NEXT_STEP
};
const setAssistantName = assistantName => ({
  type: SET_ASSISTANT_NAME,
  payload: { assistantName }
});
const setAssistantGender = assistantGender => ({
  type: SET_ASSISTANT_GENDER,
  payload: { assistantGender }
});
const setSchemeColor = schemeColor => ({
  type: SET_SCHEME_COLOR,
  payload: { schemeColor }
});
const signUpAssistant = assistant => ({
  type: SIGN_UP_ASSISTANT,
  payload: { assistant }
});
const signInAssistant = assistant => ({
  type: SIGN_IN_ASSISTANT,
  payload: { assistant }
});
export {
  nextStep,
  setAssistantName,
  setAssistantGender,
  setSchemeColor,
  signUpAssistant,
  signInAssistant
};
