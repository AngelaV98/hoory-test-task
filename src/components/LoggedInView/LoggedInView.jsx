import React from "react";
import { connect } from "react-redux";

import "./LoggedInView.scss";

import getCurrentSchemeIcons from "../../helpers/getCurrentSchemeIcons";

function LoggedInView({
  assistant: { firstName, lastName, email },
  schemeColor,
  assistantName,
  assistantGender
}) {
  const { female_logo, male_logo } = getCurrentSchemeIcons(schemeColor);
  const icon = assistantGender === "female" ? female_logo : male_logo;

  return (
    <div className="LoggedInView">
      <div>
        <div className="icons">
          <img src={icon} alt="Hoory icon" />
          <h3>{assistantName}</h3>
        </div>
        <h3>
          {firstName}&nbsp;
          {lastName}
        </h3>
        <p>{email}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  assistant: state.assistant,
  schemeColor: state.schemeColor,
  assistantName: state.assistantName,
  assistantGender: state.assistantGender
});

export default connect(mapStateToProps)(LoggedInView);