import React, { Component } from "react";

import "./NameYourAssistant.scss";

import icon from "../../../assets/hoory icon grey.svg";
import text_icon from "../../../assets/hoory text.svg";

import Validator from "../../../helpers/Validator";

class NameYourAssistant extends Component {
  validator = new Validator();
  state = {
    assistantName: "",
    isError: false
  };
  onChange = e => {
    this.setState({ assistantName: e.target.value });
  };
  onStart = _ => {
    const { assistantName } = this.state;
    const { setName, nextStep } = this.props;

    if (!this.validator.isEmpty(assistantName)) {
      setName(assistantName);
      nextStep();
    } else {
      this.setState({ isError: true });
    }
  };
  render() {
    const { assistantName, isError } = this.state;

    return (
      <div className="NameYourAssistant">
        <div className="icons">
          <img src={icon} alt="Hoory Icon" />
          <img src={text_icon} alt="Text icon" />
        </div>
        <h3>Name your assistant</h3>
        <div className="set-name">
          <input
            type="text"
            onChange={this.onChange}
            value={assistantName}
            autoFocus
          />
        </div>
        <button type="button" className="start-btn" onClick={this.onStart}>
          Start
        </button>
          <h5 style={{ color: "red" }}>{isError ? "Something went wrong" : ""}</h5>
      </div>
    );
  }
}

export default NameYourAssistant;