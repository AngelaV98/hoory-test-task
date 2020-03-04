import React from "react";
import { connect } from "react-redux";

import "./Steps.scss";

import NameYourAssistant from "../NameYourAssistans/NameYourAssistant";
import SelectStyles from "../SelectStyles/SelectStyles";
import CreateYourAccount from "../CreateYourAccount";
import SuccessfulSetup from "../SuccessfulSetup";
import {
  nextStep,
  setAssistantGender,
  setAssistantName,
  setSchemeColor,
  signUpAssistant
} from "../../redux/actions";

function Steps({
  step,
  assistantName,
  nextStep,
  setName,
  setGender,
  setColor,
  assistantGender,
  signUp
}) {
  let content = <NameYourAssistant nextStep={nextStep} setName={setName} />;

  switch (step) {
    case 2:
      content = (
        <SelectStyles
          assistantName={assistantName}
          nextStep={nextStep}
          assistantGender={assistantGender}
          setGender={setGender}
          setColor={setColor}
        />
      );
      break;
    case 3:
      content = <CreateYourAccount nextStep={nextStep} signUp={signUp} />;
      break;
    case 4:
      content = <SuccessfulSetup />;
      break;
  }
  return <div className="Steps">{content}</div>;
}

const mapStateToProps = state => ({
  assistantName: state.assistantName,
  assistantGender: state.assistantGender,
  step: state.step,
  error: state.error,
  loading: state.loading
});
const mapDispatchToProps = dispatch => ({
  nextStep: _ => dispatch(nextStep),
  setName: name => dispatch(setAssistantName(name)),
  setGender: gender => dispatch(setAssistantGender(gender)),
  setColor: color => dispatch(setSchemeColor(color)),
  signUp: assistant => dispatch(signUpAssistant(assistant))
});

export default connect(mapStateToProps, mapDispatchToProps)(Steps);