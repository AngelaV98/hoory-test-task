import React from "react";
import { connect } from "react-redux";

import "./SuccessfulSetup.scss";

import icon from "../../assets/logos/female-1.svg";
import congrats_icon from "../../assets/congrats_icon.png";

function SuccessfulSetup(props) {
  const { assistantName } = props;
  return (
    <div className="SuccessfulSetup">
      <img src={icon} alt="Logo" />
      <h3>
        Fantastico <img src={congrats_icon} alt="Congratulation icon" />
      </h3>
      <p>
        You have successfully setup the Hoory widget on you website! Proceed to
        Admin Dashboard to start training {assistantName}
      </p>
      <button type="button">Go to Admin Dashboard</button>
    </div>
  );
}
const mapStateToProps = state => ({
  assistantName: state.assistantName,
  error: state.error,
  loading: state.loading
});
export default connect(mapStateToProps)(SuccessfulSetup);