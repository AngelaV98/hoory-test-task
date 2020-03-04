import React from "react";

import done_step_icon from "../../../../assets/done.svg";
import step_circle_icon from "../../../../assets/step.svg";

function ListItem({ step, stepNumber, label }) {
  return (
    <li>
      <img
        src={step >= stepNumber ? done_step_icon : step_circle_icon}
        alt="Step circle"
      />
      <span>{label}</span>
    </li>
  );
}

export default ListItem;