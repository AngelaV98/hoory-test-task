import React from "react";
import { connect } from "react-redux";

import "./List.scss";

import step_circle_icon from "../../assets/step.svg";
import done_step_icon from "../../assets/done.svg";

function List(props) {
  const { step } = props;

  return (
    <div className="List">
      <ul>
        <li>
          <img
            src={step >= 2 ? done_step_icon : step_circle_icon}
            alt="Step circle"
          />
          <span>Name your assistant</span>
        </li>
        <li>
          <img
            src={step >= 3 ? done_step_icon : step_circle_icon}
            alt="Step circle"
          />
          <span>Select styles</span>
        </li>
        <li>
          <img
            src={step >= 4 ? done_step_icon : step_circle_icon}
            alt="Step circle"
          />
          <span>Create your account</span>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  step: state.step
});
export default connect(mapStateToProps)(List);