import React, { Component } from "react";
import { connect } from "react-redux";

import "./NameYourAssistant.scss";

import logo from "../../../src/assets/hoory icon grey.svg";
import text_logo from "../../assets/hoory text.svg";
import { setAssistantName, nextStep } from "../../redux/actions";

class NameYourAssistant extends Component {
  state = {
    assistantName: ""
  };
  onChange = e => {
    this.setState({ assistantName: e.target.value });
  };
  onStart = _ => {
    const { assistantName } = this.state;
    this.props.setName(assistantName);
    this.props.nextStep();
  };
  render() {
    return (
      <div className="NameYourAssistant">
        <div className="logos">
          <img src={logo} alt="Logo" />
          <img src={text_logo} alt="Text logo" />
        </div>
        <h3>Name your assistant</h3>
        <div className="set-name">
          <input type="text" onChange={this.onChange} autoFocus />
        </div>
        <button type="button" className="start-btn" onClick={this.onStart}>
          Start
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  assistantName: state.assistantName,
  error: state.error,
  loading: state.loading
});
const mapDispatchToProps = dispatch => ({
  nextStep: name => dispatch(nextStep),
  setName: name => dispatch(setAssistantName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(NameYourAssistant);