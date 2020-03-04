import {
  NEXT_STEP,
  SET_ASSISTANT_NAME,
  SET_ASSISTANT_GENDER,
  SET_SCHEME_COLOR
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

export { nextStep, setAssistantName, setAssistantGender, setSchemeColor };
