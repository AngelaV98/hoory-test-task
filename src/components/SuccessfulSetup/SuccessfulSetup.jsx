import React from "react";

import "./SuccessfulSetup.scss";

import logo from "../../assets/logos/female-1.svg";
import congrats_logo from "../../assets/congrats_icon.png";

function SuccessfulSetup(props) {
  return (
    <div className="SuccessfulSetup">
      <img src={logo} alt="Logo" />
      <h3>
        Fantastico <img src={congrats_logo} alt="Congratulation icon" />
      </h3>
      <p>
        You have successfully setup the Hoory widget on you website!Proceed to
        Admin Dashboard to start training %name%
      </p>
      <button type="button">Go to Admin Dashboard</button>
    </div>
  );
}

export default SuccessfulSetup;