import React from "react";

import "./LoggedInView.scss";

import icon from "../../assets/logos/female-1.svg";
import text_logo from "../../assets/hoory text.svg";

function LoggedInView(props) {
  return (
    <div className="LoggedInView">
      <div className="icons">
        <img src={icon} alt="Hoory icon" />
        <img src={text_logo} alt="Text logo" />
      </div>
      <h3>Name Surname</h3>
      <p>example@gmail.com</p>
    </div>
  );
}

export default LoggedInView;