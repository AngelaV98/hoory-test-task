import {
  NEXT_STEP,
  SET_ASSISTANT_GENDER,
  SET_ASSISTANT_NAME,
  SET_SCHEME_COLOR,
  SIGN_UP_ASSISTANT,
  SIGN_IN_ASSISTANT
} from "../constants";

const initialState = {
  step: 1,
  assistantName: "",
  assistantGender: "",
  schemeColor: "",
  assistant: {},
  isLoggedIn: false,
  loading: false,
  error: null
};

function hooryReducer(state = initialState, { type, payload, error }) {
  switch (type) {
    case NEXT_STEP: {
      return {
        ...state,
        step: ++state.step
      };
    }
    case SET_ASSISTANT_NAME: {
      return {
        ...state,
        assistantName: payload.assistantName
      };
    }
    case SET_ASSISTANT_GENDER: {
      return {
        ...state,
        assistantGender: payload.assistantGender
      };
    }
    case SET_SCHEME_COLOR: {
      return {
        ...state,
        schemeColor: payload.schemeColor
      };
    }
    case SIGN_UP_ASSISTANT: {
      return {
        ...state,
        assistant: payload.assistant
      };
    }
    case SIGN_IN_ASSISTANT: {
      return {
        ...state,
        isLoggedIn: true,
        assistant: payload.assistant
      };
    }
    default:
      return state;
  }
}
export default hooryReducer;