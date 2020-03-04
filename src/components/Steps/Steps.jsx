import React, { Component } from "react";
import { connect } from "react-redux";
import "./Steps.scss";

import NameYourAssistant from "../NameYourAssistans/NameYourAssistant";
import SelectStyles from "../SelectStyles/SelectStyles";
import CreateYourAccount from "../CreateYourAccount";
import SuccessfulSetup from "../SuccessfulSetup";

class Steps extends Component {
  render() {
    const { step } = this.props;
    let content = <NameYourAssistant />;

    switch (step) {
      case 2:
        content = <SelectStyles />;
        break;
      case 3:
        content = <CreateYourAccount />;
        break;
      case 4:
        content = <SuccessfulSetup />;
        break;
    }
    return <div className="Main">{content}</div>;
  }
}
const mapStateToProps = state => ({
  step: state.step,
  error: state.error,
  loading: state.loading
});

export default connect(mapStateToProps)(Steps);