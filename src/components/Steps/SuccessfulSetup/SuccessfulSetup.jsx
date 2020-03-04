import React from "react";
import { withRouter } from "react-router-dom";

import "./SuccessfulSetup.scss";

import icon from "../../../assets/logos/female-1.svg";
import congrats_icon from "../../../assets/congrats_icon.png";

function SuccessfulSetup(props) {
  return (
    <div className="SuccessfulSetup">
      <img src={icon} alt="Logo" />
      <h3>
        <span>Fantastico</span>
        <img src={congrats_icon} alt="Congratulation icon" />
      </h3>
      <p>
        You have successfully setup the Hoory widget on you website! Proceed to
        Admin Dashboard to start training {props.assistantName}
      </p>
      <button type="button" onClick={() => props.history.push("/profile")}>
        Go to Admin Dashboard
      </button>
    </div>
  );
}

export default withRouter(SuccessfulSetup);