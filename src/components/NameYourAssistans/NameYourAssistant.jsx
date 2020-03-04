import React, { Component } from "react";

import "./NameYourAssistant.scss";

import icon from "../../../src/assets/hoory icon grey.svg";
import text_icon from "../../assets/hoory text.svg";

class NameYourAssistant extends Component {
  state = {
    assistantName: ""
  };
  onChange = e => {
    this.setState({ assistantName: e.target.value });
  };
  onStart = _ => {
    const { assistantName } = this.state;
    const { setName, nextStep } = this.props;

    setName(assistantName);
    nextStep();
  };
  render() {
    const { assistantName } = this.state;

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
      </div>
    );
  }
}

export default NameYourAssistant;