import {
  SET_ASSISTANT_GENDER,
  SET_ASSISTANT_NAME,
  SET_SCHEME_COLOR
} from "../constants";

const initialState = {
  assistantName: "",
  assistantGender: "",
  schemeColor: "",
  loading: false,
  error: null
};

function hooryReducer(state = initialState, { type, payload, error }) {
  switch (type) {
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

    default:
      return state;
  }
}
export default hooryReducer;